// Import hooks from React
import { createContext, useEffect, useState } from "react";


// export GlobalContext
export const GlobalContext = createContext();

// export GlobalProvider
export function GlobalProvider({ children }) {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error));
    }, [])

    return (
        <GlobalContext.Provider value={{ tasks, setTasks }}>
            {children}
        </GlobalContext.Provider>
    )
}