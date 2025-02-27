import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";

const useTasks = () => {
    const [tasks, setTasks] = useState({ todo: [], inProgress: [], done: [] });
    const apiUrl = import.meta.env.VITE_API_URL;
    const { user } = useContext(AuthContext);

    const { refetch, data, isError, error , isLoading } = useQuery({
        queryKey: ["tasks", user?.email],
        queryFn: async () => {
            if (!user?.email) return;
            const { data } = await axios.get(`${apiUrl}/tasks/${user.email}`);
            return {
                todo: data.todo.sort((a, b) => a.order - b.order),
                inProgress: data.inProgress.sort((a, b) => a.order - b.order),
                done: data.done.sort((a, b) => a.order - b.order),
            };
        },
        enabled: !!user?.email,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
    });

    useEffect(() => {
        if (data) {
            setTasks(data); 
        }
    }, [data]);

    if (isError) {
        console.error("Error fetching tasks:", error);
    }

    return { tasks, setTasks, refetch,isLoading };
};

export default useTasks;

