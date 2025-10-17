import { useNavigate } from "react-router-dom";

function TaskCounter({ message, completed, total }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full items-center justify-center gap-2">
        <div
          className="
        flex bg-[rgba(0,0,0,0.2)] w-full p-7 rounded-3xl justify-around
        items-center"
        >
          <h3 className="text-cyan-50 text-2xl">{message}</h3>
          <div className="text-cyan-50 bg-[rgba(0,0,0,0.6)] rounded-4xl py-5 px-2.5">
            <p className="numbers">
              {completed} / {total}
            </p>
          </div>
        </div>
        <button
          className="
      w-15 h-15 flex items-center justify-center bg-[rgba(0,0,0,0.6)] text-cyan-50
      rounded-full"
          onClick={() => navigate("/create-task")}
        >
          +
        </button>
      </div>
    </>
  );
}

export default TaskCounter;
