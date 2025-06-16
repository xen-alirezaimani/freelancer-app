import useMoveBack from "./../hooks/useMoveBack";

export default function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-full mx-auto py-20 px-5 flex flex-col justify-start items-center gap-20">
      <button onClick={moveBack} className="text-xl self-start cursor-pointer text-primary-900">
        بازگشت
      </button>
      <h1 className="text-xl">❌ صفحه که دنبال آن بودید پیدا نشد!</h1>
    </div>
  );
}
