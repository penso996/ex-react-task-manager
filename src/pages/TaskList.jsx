// Import hooks from React
import { useContext } from "react";

// Import context
import { GlobalContext } from "../context/GlobalContext";

export default function TaskList() {

    const { tasks } = useContext(GlobalContext);
    console.log("Tasks", tasks);

    // RENDER
    return (
        <>
            <h1>TASK LIST</h1>
        </>
    )
}