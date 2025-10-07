import { useEffect } from "react";
import { useState } from "react";
import { fetchTasks } from "../hooks/UseAPI";
import { messageFunction } from "../utils/TaskCounter";
import Navbar from "../components/Navbar";
import TaskCounter from "../components/TaskCounter";
import TaskList from "../components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);

  console.log(setCompleted)

  useEffect(() => {
    const load = async () => {
      const data = await fetchTasks();
      setTasks(data);
      setTotal(data.length);
      setMessage(messageFunction(data, completed, data.length))
      console.log("Tasks:", data);

      }
    load();
  }, [completed]);

  return (
    <>
      <Navbar />
      <TaskCounter 
        message={message}
        completed={completed}
        total={total}
      />
      <TaskList 
      tasks={tasks}
      />
    </>
  );
}

export default App;
