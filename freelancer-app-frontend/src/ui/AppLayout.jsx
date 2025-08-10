import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Container from "./Container";
import AppFooter from "./AppFooter";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-secondary-100 dark:bg-secondary-700">
      <AppHeader setIsOpen={setIsOpen} />

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-40 bg-black/20"></div>}

      <main className="flex-grow p-10">
        <Container>
          <Outlet />
        </Container>
      </main>
      <AppFooter />
    </div>
  );
}
