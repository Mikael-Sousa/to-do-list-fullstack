import { useEffect } from "react";
import { useState } from "react";
import { fetchTasks, resetTasks } from "../hooks/UseAPI";
import { messageFunction } from "../utils/TaskCounter";
import { reset } from "../utils/DailyReset";
import Navbar from "../components/Navbar";
import TaskCounter from "../components/TaskCounter";
import ShiftBar from "../components/ShiftBar";
import TaskList from "../components/TaskList";
import Modal from "../components/Modal";

function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("Create a Task");
  const [completed, setCompleted] = useState(0);
  const [total, setTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(0);
  const [taskSelected, setTaskSelected] = useState(null);
  const [shift, setShift] = useState("anytime");

  console.log(setCompleted);

  useEffect(() => {
    const load = async () => {
      const data = await fetchTasks();
      setTasks(data);
      setTotal(data.length);
      setMessage(messageFunction(data, completed, data.length));
      const completedCount = data.filter((t) => t.status !== "pending").length;
      setCompleted(completedCount);
      const newTasks = reset(data);

      if (newTasks !== data) {
      await resetTasks(); 
      setTasks(newTasks); 
    }
    };
    load();
  }, [tasks, completed, deleteClicked]);

  const handleUpdateStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, status: newStatus } : t
    );
    setTasks(updatedTasks);
    const completedCount = updatedTasks.filter(
      (t) => t.status !== "pending"
    ).length;
    setCompleted(completedCount);
  };

  return (
    <>
      <Navbar />
      <TaskCounter message={message} completed={completed} total={total} />
      <ShiftBar selectedShift={shift} setSelectedShift={setShift} />
      <TaskList
        tasks={tasks}
        onModal={(task) => {
          setTaskSelected(task);
          setShowModal(true);
        }}
        updateStatus={handleUpdateStatus}
        selectedShift={shift}
      />
      {showModal && (
        <Modal
          offModal={() => {
            setShowModal(false);
          }}
          deleteClick={() => {
            setDeleteClicked(deleteClicked + 1);
          }}
          task={taskSelected}
          updateStatus={handleUpdateStatus}
        />
      )}
    </>
  );
}

export default App;
