import Home from "./pages/Home";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import Freelancer from "./pages/Freelancer";
import { Routes, Route } from "react-router-dom";
import CompleteProfile from "./pages/CompleteProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./ui/AppLayout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="container h-full mx-auto">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route element={<AppLayout />}>
            <Route path="/freelancer" element={<Freelancer />} />
            <Route path="/owner" element={<Freelancer />} />
            <Route path="/admin" element={<Freelancer />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
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
