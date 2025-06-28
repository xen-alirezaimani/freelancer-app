import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[15rem]">
      <div className="bg-red-200 col-span-2">app header</div>
      <div className="bg-red-300">app sidebar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
