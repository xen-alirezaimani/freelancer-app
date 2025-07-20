export default function TextField({ label, name, register, validationSets = {}, errors, type = "text", required }) {
  return (
    <>
      <input
        {...register(name, validationSets)}
        type={type}
        id={name}
        required
        autoComplete="off"
        placeholder=" "
        className="peer textField__input"
      />
      <label
        htmlFor={name}
        className="absolute flex items-center px-1 right-4 top-1.5 cursor-text select-none text-sm bg-white dark:bg-black transition-all duration-300
            peer-placeholder-shown:top-1.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-not-placeholder-shown:-top-3.5 peer-not-placeholder-shown:text-blue-500
            peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
      >
        <div className="flex gap-x-1">
          {required && <p>*</p>}
          <p>{label}</p>
          {errors && errors[name] && <p className="text-error">{errors[name]?.message}</p>}
        </div>
      </label>
    </>
  );
}
