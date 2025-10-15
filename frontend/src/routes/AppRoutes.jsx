import { Routes, Route } from "react-router-dom";
import Goals from "../pages/Goals";
import CreateTask from "../pages/CreateTask";
import Dashboard from "../pages/Dashboard";
import EditeTask from "../pages/EditeTask"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/edite-task" element={<EditeTask />} />
      <Route path="/goals" element={<Goals />} />
    </Routes>
  );
}

export default AppRoutes;
