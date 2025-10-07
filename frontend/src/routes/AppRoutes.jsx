import { Routes, Route } from "react-router-dom";
import Goals from "../pages/Goals";
import CreateTask from "../pages/CreateTask";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/create-task" element={<CreateTask />} />
      <Route path="/goals" element={<Goals />} />
    </Routes>
  );
}

export default AppRoutes;
