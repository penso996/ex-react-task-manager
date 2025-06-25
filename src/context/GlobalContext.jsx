// Import hooks from React
import { createContext } from "react";

// Import custom hooks
import useTasks from "../hooks/useTasks";


// export GlobalContext
export const GlobalContext = createContext();

// export GlobalProvider
export function GlobalProvider({ children }) {

    const taskData = useTasks();

    return (
        <GlobalContext.Provider value={{ ...taskData }}>
            {children}
        </GlobalContext.Provider>
    )
}