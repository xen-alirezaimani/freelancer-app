import ThemeToggle from "./components/ThemeToggle";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Hi</h1>
          </div>
        }
      />
      <Route path="/auth" element={<Auth />} />
    </Routes>
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
