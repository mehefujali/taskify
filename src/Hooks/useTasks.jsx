import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useTasks = () => {
      const [tasks, setTasks] = useState({});
      const apiUrl = import.meta.env.VITE_API_URL;
      const { user } = useContext(AuthContext);
      console.log(tasks)
      const { refetch } = useQuery({
          queryKey: ["tasks", user.email],
          queryFn: async () => {
              const { data } = await axios.get(`${apiUrl}/tasks/${user.email}`);
              const sortedTasks = {
                  todo: data.todo.sort((a, b) => a.order - b.order),
                  inProgress: data.inProgress.sort((a, b) => a.order - b.order),
                  done: data.done.sort((a, b) => a.order - b.order),
              };
              setTasks(sortedTasks);
          },
      });
      return { tasks, refetch ,setTasks };
};

export default useTasks;