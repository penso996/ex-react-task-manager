// Import hooks from React
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import context
import { GlobalProvider } from "./context/GlobalContext";

// Import pages_layouts
import DefaultLayout from "./pages_layouts/DefaultLayout";

// Import pages
import AddTask from "./pages/AddTask";
import TaskList from "./pages/TaskList";
import TaskDetail from "./pages/TaskDetail";

function App() {

  // RENDER
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<TaskList />} />
            <Route path="/add-task" element={< AddTask />} />
            <Route path="/task/:id" element={<TaskDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App;