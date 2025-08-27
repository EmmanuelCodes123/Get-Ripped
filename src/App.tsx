import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DefaultPath from "./lib/DefualtPath";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultPath>
                <Dashboard />
              </DefaultPath>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
