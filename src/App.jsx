// Import hooks from React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages_layouts
import DefaultLayout from "./pages_layouts/DefaultLayout";

// Import pages
import AddTask from "./pages/AddTask";
import TaskList from "./pages/TaskList";

function App() {

  // RENDER
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<TaskList />} />
          <Route path="/add-task" element={< AddTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App