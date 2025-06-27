// Import hooks from React
import { useCallback, useContext, useMemo, useState } from "react";

// Import context
import { GlobalContext } from "../context/GlobalContext";

// Import page_single_component
import TaskRow from "../pages_single_components/TaskRow";

// Debounce function
function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay)
    }
}

export default function TaskList() {

    const { tasks } = useContext(GlobalContext);

    const [searchQuery, setSearchQuery] = useState("");
    const debouncedSetSearchQuery = useCallback(
        debounce(setSearchQuery, 500)
        , []);

    const [sortBy, setSortBy] = useState("createdAt");
    const [sortOrder, setSortOrder] = useState(1);

    const sortIcon = sortOrder === 1 ? "↓" : "↑";

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1);
        } else {
            setSortBy(field);
            setSortOrder(1);
        }
    }

    const filteredSortedTask = useMemo(() => {
        return [...tasks]
            .filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
            .sort((a, b) => {
                let comparison;
                if (sortBy === "title") {
                    comparison = a.title.localeCompare(b.title)
                } else if (sortBy === "status") {
                    const statusOption = ["To do", "Doing", "Done"];
                    comparison = statusOption.indexOf(a.status) - statusOption.indexOf(b.status);
                } else if (sortBy === "createdAt") {
                    const dateA = new Date(a.createdAt).getTime();
                    const dateB = new Date(b.createdAt).getTime();
                    comparison = dateA - dateB;
                }

                return comparison * sortOrder;
            })
    }, [tasks, sortBy, sortOrder, searchQuery])

    // RENDER
    return (
        <>
            <h1>TASK LIST</h1>

            {/* input */}
            <input
                type="text"
                onChange={e => debouncedSetSearchQuery(e.target.value)}
            />

            <table>
                {/* table head */}
                <thead>
                    <tr>
                        <th onClick={() => handleSort("title")}>
                            Title {sortBy === "title" && sortIcon}
                        </th>
                        <th onClick={() => handleSort("status")}>
                            Status {sortBy === "status" && sortIcon}
                        </th>
                        <th onClick={() => handleSort("createdAt")}>
                            Creation {sortBy === "createdAt" && sortIcon}
                        </th>
                    </tr>
                </thead>
                {/* table body */}
                <tbody>
                    {filteredSortedTask.map(task => (
                        <TaskRow key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </>
    )
}