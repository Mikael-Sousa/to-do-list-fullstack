import { useState } from "react";
import { useEffect } from "react";
import { putTasks } from "../hooks/UseAPI";
import vIcon from "../assets/v-icon.png";
import zIcon from "../assets/z-icon.png";

function TaskList({ tasks, onModal, updateStatus }) {
  const [icon, setIcon] = useState({});

  useEffect(() => {
    const newIcons = {};
    tasks.forEach((task) => {
      if (task.status === "completed") {
        newIcons[task.id] = vIcon;
      } else if (task.status === "dayOff") {
        newIcons[task.id] = zIcon;
      }
    });
    setIcon((prev) => ({ ...prev, ...newIcons }));
  }, [tasks]);

  return (
    <ul className="w-9/10 flex flex-col p-0 gap-5">
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <li
              className={`w-full text-center p-5 rounded-3xl flex items-center justify-between
    ${
      task.status !== "pending" ? "bg-[rgba(150,150,150,0.6)]" : "bg-[rgba(230,240,255,0.8)]"
    }`}
              key={task.id}
            >
              <button
                className="w-10 h-10 p-1 rounded-full bg-transparent border-2 border-black 
                    cursor-pointer flex justify-center items-center"
                onClick={async () => {
                  await putTasks(task.id, task.text, "completed");
                  updateStatus(task.id, "completed");
                }}
              >
                {icon[task.id] && (
                  <img className="w-full" src={icon[task.id]} />
                )}
              </button>
              <span>{task.text}</span>
              <button
                className="w-10 h-10 flex justify-center items-center border-transparent caret-black
              bg-transparent text-3xl mb-2"
                onClick={() => onModal(task)}
              >
                ...
              </button>
            </li>
          );
        })
      ) : (
        <li>Nenhuma tarefa encontrada</li>
      )}
    </ul>
  );
}

export default TaskList;
