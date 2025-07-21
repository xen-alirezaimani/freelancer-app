export default function RHFSelect({ name, label, register, required, options, errors }) {
  return (
    <div className="h-10">
      <label htmlFor={name}>
        <div className="flex gap-x-1">
          {required && <p className="text-error">*</p>}
          <p>{label}</p>
          {errors && errors[name] && <p className="text-error">{errors[name]?.message}</p>}
        </div>
      </label>
      <select className="textField__input" {...register(name)} id={name}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
