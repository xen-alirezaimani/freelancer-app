export default function RadioInput({ label, value, register, name, id, watch }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={watch(name) == value}
        {...register(name)}
        className="w-4 h-4 accent-primary-900 cursor-pointer"
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
}
