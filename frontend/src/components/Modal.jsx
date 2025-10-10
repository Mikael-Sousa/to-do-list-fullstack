import { deleteTasks } from "../hooks/UseAPI";
import { putTasks } from "../hooks/UseAPI";

function Modal({ offModal, task, deleteClick, updateStatus }) {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex justify-center
    items-center z-999"
    >
      <div
        className="flex flex-col items-center gap-4 text-center rounded-2xl px-20 py-10 shadow
      bg-[rgba(230,240,255,0.8)]"
      >
        <p className="text-black text-2xl">Choose an action</p>
        <button
          className="text-white bg-[rgba(196,27,27,0.8)] w-8/10 p-2.5 rounded-2xl
        text-2xl cursor-pointer"
          onClick={async () => {
            await deleteTasks(task.id);
            deleteClick();
            offModal();
          }}
        >
          Delete
        </button>
        <button
          className="text-white bg-[rgba(4,83,202,0.8)] w-8/10 p-2.5 rounded-2xl
        text-2xl cursor-pointer"
          onClick={() => {
            offModal();
          }}
        >
          Edite
        </button>
        <button
          className="text-white bg-[rgba(109,4,179,0.8)] w-8/10 p-2.5 rounded-2xl
        text-2xl cursor-pointer"
          onClick={() => {
            putTasks(task.id, task.text, "dayOff");
            updateStatus(task.id, "dayOff");
            offModal();
          }}
        >
          Day off
        </button>
        <button
          className="text-white bg-[rgba(76,83,94,0.8)] w-8/10 p-2.5 rounded-2xl
        text-2xl cursor-pointer"
          onClick={offModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
