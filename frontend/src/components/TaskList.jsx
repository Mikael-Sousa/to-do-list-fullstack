import { putTasks } from "../hooks/UseAPI";
import vIcon from "../assets/v-icon.png";
import zIcon from "../assets/z-icon.png";

function TaskList({ tasks, onModal, updateStatus, selectedShift }) {

  const getIcon = (task) => {
    if (task.status === "completed") return vIcon;
    if (task.status === "dayOff") return zIcon;
    return null;
  };

  const filteredTasks = tasks.filter(
  t =>
    (t.daysPerWeek !== t.weeklyCount) &&
    (selectedShift === "anytime" || t.shift === selectedShift || t.shift === "anytime")
);

  return (
    <ul className="w-9/10 flex flex-col p-0 gap-5">
      {filteredTasks.length === 0 && <li>Nenhuma tarefa encontrada</li>}

      {filteredTasks
        .filter(t => t.status === "pending")
        .map(task => (
          <li
            key={task.id}
            className="w-full text-center p-5 rounded-3xl flex items-center justify-between bg-[rgba(230,240,255,0.8)]"
          >
            <button
              className="w-10 h-10 p-1 rounded-full bg-transparent border-2 border-black cursor-pointer flex justify-center items-center"
              onClick={async () => {
                const updatedWeeklyCount = task.weeklyCount + 1;
                await putTasks(task.id, task.text, "completed", task.daysPerWeek, task.shift, updatedWeeklyCount);
                updateStatus(task.id, "completed", updatedWeeklyCount);
              }}
            >
              {getIcon(task) && <img className="w-full" src={getIcon(task)} />}
            </button>
            <span>{task.text}</span>
            <button
              className="w-10 h-10 flex justify-center items-center border-transparent caret-black bg-transparent text-3xl mb-2"
              onClick={() => onModal(task)}
            >
              ...
            </button>
          </li>
        ))}

      {filteredTasks
        .filter(t => t.status !== "pending")
        .map(task => (
          <li
            key={task.id}
            className="w-full text-center p-5 rounded-3xl flex items-center justify-between bg-[rgba(150,150,150,0.6)]"
          >
            <button
              className="w-10 h-10 p-1 rounded-full bg-transparent border-2 border-black cursor-pointer flex justify-center items-center"
              onClick={async () => {
                const updatedWeeklyCount = task.weeklyCount + 1;
                await putTasks(task.id, task.text, "completed", task.daysPerWeek, task.shift, updatedWeeklyCount);
                updateStatus(task.id, "completed", updatedWeeklyCount);
              }}
            >
              {getIcon(task) && <img className="w-full" src={getIcon(task)} />}
            </button>
            <span>{task.text}</span>
            <button
              className="w-10 h-10 flex justify-center items-center border-transparent caret-black bg-transparent text-3xl mb-2"
              onClick={() => onModal(task)}
            >
              ...
            </button>
          </li>
        ))}
    </ul>
  );
}

export default TaskList;
