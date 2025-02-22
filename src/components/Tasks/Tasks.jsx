import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RiProgress2Line, RiTodoLine } from "react-icons/ri";

import axios from "axios";
import { CiMenuKebab } from "react-icons/ci";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import dateFormat from "dateformat";
import { MdDeleteOutline } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";

import useTasks from "../../Hooks/useTasks";
import toast from "react-hot-toast";


const Tasks = () => {

  const { tasks, setTasks, refetch } = useTasks();
  const apiUrl = import.meta.env.VITE_API_URL;
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const handleDeleteTaks = async (id) => {
    axios.delete(`${apiUrl}/tasks/${id}`).then(() => {
      toast.success("Task Deleted");
      refetch();
    });
  };
/////////////////////////////////////////////////////////////


















////////////////////////////////////////////////////






  
  const onDragEnd = async (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;

    if (sourceColumn === destinationColumn) {
      const items = reorder(
        [...tasks[sourceColumn]],
        source.index,
        destination.index
      );
      items.forEach((item, index) => (item.order = index));

      const updatedTasks = {
        ...tasks,
        [sourceColumn]: items.sort((a, b) => a.order - b.order),
      };

      setTasks(updatedTasks);

      await axios.put(`${apiUrl}/tasks/reorder`, {
        tasks: items.map(({ _id, order }) => ({ _id, order })),
      });
    } else {
      const sourceItems = [...tasks[sourceColumn]];
      const destinationItems = [...tasks[destinationColumn]];

      const [movedItem] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, movedItem);

      sourceItems.forEach((item, index) => (item.order = index));
      destinationItems.forEach((item, index) => (item.order = index));

      const updatedTasks = {
        ...tasks,
        [sourceColumn]: sourceItems.sort((a, b) => a.order - b.order),
        [destinationColumn]: destinationItems.sort((a, b) => a.order - b.order),
      };

      setTasks(updatedTasks);

      await axios.put(`${apiUrl}/tasks/drag/${movedItem._id}`, {
        category: destinationColumn,
        order: destination.index,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 gap-2 xl:gap-4 h-full">
        {Object.entries(tasks).map(([column, items]) => (
          <Droppable key={column} droppableId={column}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="theme-border rounded p-2 xl:p-4 overflow-x-hidden border-2 min-h-full space-y-2 overflow-y-auto"
              >
                <h2 className="text-lg font-bold mb-4 capitalize flex theme-border-b pb-3 items-center gap-1">
                  {column === "todo" && <RiTodoLine />}
                  {column === "inProgress" && <RiProgress2Line />}
                  {column === "done" && <IoCheckmarkDoneCircleOutline />}
                  {column}
                </h2>
                {items?.map((item, index) => (
                  <Draggable
                    key={item._id}
                    draggableId={item._id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="cursor-default"
                      >
                        <div className="cursor-default py-3 bg-gray-700 px-2 rounded-t w-full justify-between flex items-center">
                          <div className="text-white text-xs">
                            {dateFormat(
                              new Date(item.timestamp),
                              "mmmm dS, yyyy, h:MM TT"
                            )}
                          </div>
                          <Menu>
                            <MenuHandler>
                              <div>
                                <p className="text-white px-3 cursor-pointer">
                                  <CiMenuKebab />
                                </p>
                              </div>
                            </MenuHandler>
                            <MenuList className="theme-bg px-0 w-fit">
                              <MenuItem
                                
                                className="hover:bg-black/20 rounded-none flex gap-1 items-center cursor-pointer"
                              >
                                <GrFormEdit /> Edit
                              </MenuItem>
                              <MenuItem
                                onClick={() => handleDeleteTaks(item._id)}
                                className="hover:bg-black/20 rounded-none flex gap-1 items-center cursor-pointer"
                              >
                                <MdDeleteOutline /> Delete
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </div>

                        <div className="p-3 theme-border rounded shadow-sm cursor-grab theme-bg shadow-background-dark/30 theme-card-bg relative">
                          <h1 className="font-bold text-sm lg:text-lg">
                            {item.title}
                          </h1>
                          <p className="text-xs lg:text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Tasks;
