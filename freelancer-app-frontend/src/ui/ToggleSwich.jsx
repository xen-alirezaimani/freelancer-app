
export default function ToggleSwich({ onChange, status }) {
  return (
    <>
      <button
        onClick={onChange}
        className={`w-[50px] h-[28px] relative cursor-pointer border border-solid border-secondary-0 rounded-full transition-colors duration-300 ease-in-out ${
          status === "OPEN" ? "bg-primary-900" : "bg-secondary-200"
        }`}
      >
        <div
          className={`w-[20px] h-[20px] absolute top-1/2 -translate-y-1/2 bg-secondary-0 rounded-full transition-all duration-300 ease-in-out ${
            status === "OPEN" ? "right-[25px]" : "right-[3px]"
          }`}
        ></div>
      </button>
    </>
  );
}
