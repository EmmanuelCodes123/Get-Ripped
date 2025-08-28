import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DefaultPath from "./lib/DefualtPath";
import UseProvider from "./hooks/useProvider";
import AuthForm from "./Components/Creating Workout/AuthForn";

function App() {
  return (
    <>
      <UseProvider>
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
            <Route path="/create-workout" element={<AuthForm />}/>
          </Routes>
        </BrowserRouter>
      </UseProvider>
    </>
  );
}

export default App;
