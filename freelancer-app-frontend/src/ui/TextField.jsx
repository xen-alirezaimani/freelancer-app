export default function TextField({ label, name, value, onChange }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={name}
        required
        autoComplete="off"
        placeholder=" "
        className="peer textField__input"
      />
      <label
        htmlFor={name}
        className="absolute flex items-center px-1 right-4 top-1.5 cursor-text select-none text-sm bg-white dark:bg-black transition-all duration-300 peer-valid:-top-3 peer-valid:text-blue-500 peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-500"
      >
        {label}
      </label>
    </>
  );
}
