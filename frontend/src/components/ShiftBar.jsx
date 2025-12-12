import React from "react";

const Shifts = ( {selectedShift, setSelectedShift} ) => {
  const shiftsButton = [
    { value: "anytime" },
    { value: "morning" },
    { value: "afternoon" },
    { value: "evening" },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex items-center justify-center gap-2 w-10">
        {shiftsButton.map(({ value }) => (
          <label key={value} className="relative cursor-pointer select-none">
            <input
              type="radio"
              name="shift"
              value={value}
              checked={selectedShift === value}
              onChange={(e) => setSelectedShift(e.target.value) }
              className="hidden peer"
            />
            <span
              className="
                flex items-center justify-center min-w-30 p-4
                rounded-xl border-2 border-black
                bg-black/60 text-white font-[Caprasimo] text-base
                transition-all duration-300 ease-in-out
                peer-checked:bg-black/60 peer-checked:border-white 
                peer-checked:text-white
              "
            >
              {value === "anytime"? <span>all</span>:<span>{value}</span>}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Shifts;
