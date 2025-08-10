import Home from "./pages/Home";
import Auth from "./pages/Auth";
import AppLayout from "./ui/AppLayout";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import { Toaster } from "react-hot-toast";
import Freelancer from "./pages/Freelancer";
import { Routes, Route, Navigate } from "react-router-dom";
import SingleProject from "./pages/SingleProject";
import OwnerDashboard from "./pages/OwnerDashboard";
import CompleteProfile from "./pages/CompleteProfile";
import DarkModeProvider from "./context/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Toaster />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/owner" element={<AppLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<SingleProject />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </>
  );

  // return (
  //   <>
  //     <div className="container mx-auto bg-secondary-900 dark:bg-dark-secondary-900">
  //       <h1 className="text-blue-950 dark:text-blue-300">سلام تست!</h1>
  //       <ThemeToggle />
  //     </div>
  //   </>
  // );
}

export default App;
