import React from "react";

const Shifts = ( {selectedShift, setSelectedShift} ) => {
  const shiftsButton = [
    { value: "anytime" },
    { value: "morning" },
    { value: "afternoon" },
    { value: "evening" },
  ];

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <h2 className="text-white text-2xl font-bold text-shadow-black">
        Do it at
      </h2>

      <div className="grid grid-cols-2 gap-6 w-full">
        {shiftsButton.map(({ value }) => (
          <label
            key={value}
            className="relative cursor-pointer select-none"
          >
            <input
              type="radio"
              name="shift"
              value={value}
              checked={selectedShift === value}
              onChange={(e) => setSelectedShift(e.target.value)}
              className="hidden peer"
            />
            <span
              className="
                flex items-center justify-center p-4
                rounded-xl border-2 border-black
                bg-white/80 text-black font-[Caprasimo] text-base
                transition-all duration-300 ease-in-out
                peer-checked:bg-black/60 peer-checked:border-white 
                peer-checked:text-white
              "
            >
              {value}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Shifts;
