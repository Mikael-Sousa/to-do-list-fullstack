import { useEffect } from "react";
import { useState } from "react";
import { fetchTasks, resetDailyTasks, resetWeeklyTasks } from "../hooks/UseAPI";
import { messageFunction } from "../utils/TaskCounter";
import { dailyReset } from "../utils/DailyReset";
import { weeklyReset } from "../utils/WeeklyReset";
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
    const loadTasks = async () => {
      const data = await fetchTasks();
      const newDailyTasks = dailyReset(data);

      if (newDailyTasks !== data) {
        await resetDailyTasks();
        setTasks(newDailyTasks);
      } else {
        setTasks(data);
      }

      const newWeeklyTasks = weeklyReset(data);

      if (newWeeklyTasks !== data) {
        await resetWeeklyTasks();
        setTasks(newWeeklyTasks);
      } else {
        setTasks(data);
      }
    };

    loadTasks();
  }, [deleteClicked]);

  useEffect(() => {
    const totalCount = tasks.filter(
      (t) => t.daysPerWeek !== t.weeklyCount
    ).length;
    const completedCount = tasks.filter(
      (t) => t.status !== "pending" && t.daysPerWeek !== t.weeklyCount
    ).length;

    setTotal(totalCount);
    setCompleted(completedCount);
    setMessage(messageFunction(tasks, completedCount, totalCount));
  }, [tasks]);

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
