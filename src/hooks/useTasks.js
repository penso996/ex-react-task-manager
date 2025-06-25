//  Import hooks from React
import { useState, useEffect } from "react";


export default function useTasks() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error));
    }, []);

    const addTask = () => {

    }

    const removeTask = () => {

    }

    const updateTask = () => {

    }

    return { tasks, addTask, removeTask, updateTask }

}