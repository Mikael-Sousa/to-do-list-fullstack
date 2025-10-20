const DaysPerWeek = ( {selectedDay, setSelectedDay} ) => {

  const daysButton = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
  ];

  return (
    <div className="flex flex-col items-center gap-5 w-full">
      <h2 className="text-white text-2xl font-bold text-shadow-black">
        X days per week
      </h2>

      <div className="flex flex-nowrap justify-center gap-4 w-full overflow-x-auto">
        {daysButton.map(({ value }) => (
          <label key={value} className="relative cursor-pointer select-none">
            <input
              type="radio"
              name="opcao"
              value={value}
              checked={selectedDay === value}
              onChange={(e) => setSelectedDay(Number(e.target.value))}
              className="sr-only peer"
            />
            <span
              className="
          flex items-center justify-center p-3 
          rounded-lg border-2 border-black 
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

export default DaysPerWeek;
