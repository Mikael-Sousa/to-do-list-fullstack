import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { putTasks } from "../hooks/UseAPI";
import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import DaysPerWeek from "../components/DaysPerWeek";
import Shifts from "../components/Shifts";

function EditTask() {
  const navigate = useNavigate();
  const location = useLocation();
  const task = location.state?.task;

  const [text, setText] = useState(task?.text || "");
  const [daysPerWeek, setDaysPerWeek] = useState(task?.daysPerWeek || 7);
  const [shift, setShift] = useState(task?.shift || "anytime");

  useEffect(() => {
    if (!task) {
      navigate("/");
    }
  }, [task, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await putTasks(task.id, text, task.status, daysPerWeek, shift);

    navigate("/");
  };

  if (!task) return null;

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center gap-6 w-full px-4">
        <h1 className="text-white text-3xl font-bold text-shadow-black">
          Edit the habit
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full max-w-lg items-center"
        >
          <TextInput
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Task name..."
            required
          />

          <DaysPerWeek
            selectedDay={daysPerWeek}
            setSelectedDay={setDaysPerWeek}
          />

          <Shifts selectedShift={shift} setSelectedShift={setShift} />

          <div className="flex gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="font-[Caprasimo] w-36 px-6 py-3 rounded-2xl text-lg
                bg-black/60 text-white border-2 border-black
                hover:bg-black hover:shadow-lg
                transition-all duration-300 ease-in-out cursor-pointer select-none"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="font-[Caprasimo] w-36 px-6 py-3 rounded-2xl text-lg
                bg-black/60 text-white border-2 border-black
                hover:bg-black hover:shadow-lg
                transition-all duration-300 ease-in-out cursor-pointer select-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditTask;
