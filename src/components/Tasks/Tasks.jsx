import { useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RiProgress2Line, RiTodoLine } from "react-icons/ri";
import MyButton from "../../Shaird/MyButton";
import axios from "axios";
import { AuthContext } from "../../Context/AuthProvider";

const Tasks = () => {
  const [tasks, setTasks] = useState({});
  const apiUrl = import.meta.env.VITE_API_URL;
  const {user} = useContext(AuthContext)

  useEffect(() => {
    axios.get(`${apiUrl}/tasks/${user?.email}`).then((res) => {
      setTasks(res.data);
    });
  }, [apiUrl, user.email]);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    // if (!destination) return;

    const sourceColumn = source.droppableId;
    const destinationColumn = destination.droppableId;

    if (sourceColumn === destinationColumn) {
      const items = [...tasks[sourceColumn]];
      const [movedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, movedItem);

      setTasks((prevTasks) => ({
        ...prevTasks,
        [sourceColumn]: items,
      }));

      axios.put(`${apiUrl}/tasks/drag/${movedItem._id}`, {
        category: destinationColumn,
        order: destination.index,
      });
    } else {
      const sourceItems = [...tasks[sourceColumn]];
      const destinationItems = [...tasks[destinationColumn]];

      const [movedItem] = sourceItems.splice(source.index, 1);
      destinationItems.splice(destination.index, 0, movedItem);

      setTasks((prevTasks) => ({
        ...prevTasks,
        [sourceColumn]: sourceItems,
        [destinationColumn]: destinationItems,
      }));

      axios.put(`${apiUrl}/tasks/drag/${movedItem._id}`, {
        category: destinationColumn,
        order: destination.index,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 gap-4 h-full">
        {Object.entries(tasks).map(([column, items]) => (
          <Droppable key={column} droppableId={column}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="theme-border rounded p-4  border-2 min-h-full space-y-2 overflow-y-auto"
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
                        className="p-3 theme-border rounded shadow-sm cursor-grab theme-bg shadow-background-dark/30 theme-card-bg"
                      >
                        <h1 className="font-bold text-lg">{item.title}</h1>
                        <p>{item.description}</p>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                <MyButton text> Create Task +</MyButton>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Tasks;
