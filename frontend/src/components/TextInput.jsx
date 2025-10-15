const TextInput = ({ value, onChange, placeholder, required = false }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      className="
        w-4/5 p-4 rounded-2xl bg-black/40 text-white 
        font-[Caprasimo] focus:outline-none focus:shadow-lg
      "
    />
  );
};

export default TextInput;
