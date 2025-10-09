import { useState } from "react";
import { putTasks } from "../hooks/UseAPI";
import vIcon from "../assets/v-icon.png";

function TaskList({tasks, onModal}) {
  const [icon, setIcon] = useState({});

  return (
    <ul className="w-9/10 flex flex-col p-0 gap-5">
      {tasks.length > 0 ? (
        tasks.map((task) => {
          return (
            <li
              className="w-full text-center p-5 bg-[rgba(230,240,255,0.8)] rounded-3xl flex 
                    items-center justify-between"
              key={task.id}
            >
              <button
                className="w-10 h-10 p-1 rounded-full bg-transparent border-2 border-black 
                    cursor-pointer flex justify-center items-center"
                onClick={() => {
                  setIcon((prev) => ({ ...prev, [task.id]: vIcon }));
                  putTasks(task.id, task.text, "concluida");
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
              onClick={() => onModal(task)}>
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
