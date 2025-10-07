import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postTasks } from "../hooks/UseAPI";

function CreateTask() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const daysButton = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
  ];

  const shiftsButton = [
    { value: "anytime" },
    { value: "morning" },
    { value: "afternoon" },
    { value: "evening" },
  ];

  return (
    <>
      <h1>Create a new habit</h1>
      <form 
      onSubmit={() => {
          postTasks(text);
          navigate("/");}}>  
      <input
        type="text"
        value={text}
        placeholder="Task name..."
        required
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <h2>X days per week</h2>
      <div className="flex">
        {daysButton.map(({ value }) => (
          <label
            key={value}
            className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-blue-100"
          >
            <input
              type="radio"
              name="opcao"
              value={value}
              className="sr-only form-radio text-blue-600"
              
            />
            {value}
          </label>
        ))}
      </div>

      <div>
        <h2>Do it at</h2>
        <div className="flex">
          {shiftsButton.map(({ value }) => (
            <label
              key={value}
              className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer hover:bg-blue-100"
            >
              <input
                type="radio"
                name="opcao"
                value={value}
                className="sr-only form-radio text-blue-600"
              />
              {value}
            </label>
          ))}
        </div>
      </div>

      <button type="submit">
        Save
      </button>
      </form>  
    </>
  );
}

export default CreateTask;
