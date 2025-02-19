import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { RiProgress2Line, RiTodoLine } from "react-icons/ri";
import MyButton from "../../Shaird/MyButton";

const initialTasks = {
  todo: [
    { id: "1", title: "Task 1" },
    { id: "2", title: "Task 2" },
    { id: "3", title: "Task 3" },
    { id: "4", title: "Task 4" },
    { id: "5", title: "Task 5" },
    
  ],
  inProgress: [{ id: "49", title: "Task 49" }],
  done: [{ id: "50", title: "Task 50" }],
};

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

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
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 gap-4  h-full">
        {Object.entries(tasks).map(([column, items]) => (
          <Droppable key={column} droppableId={column}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="theme-border rounded p-4  border-2 min-h-full space-y-2 overflow-y-auto "
              >
                <h2 className="text-lg font-bold mb-4 capitalize flex theme-border-b pb-3 items-center gap-1">
                  {column==="todo"&&<RiTodoLine className=" "/>}
                  {column==="inProgress"&&<RiProgress2Line className=" "/>}
                  {column==="done"&&<IoCheckmarkDoneCircleOutline className=" "/>}
                  {column}
                  </h2>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="p-3 theme-border rounded shadow-sm cursor-grab"
                      >
                        {item.title}
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
