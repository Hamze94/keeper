import { useContext } from "react";
import Dashboard from "./components/Dashboard";

import { DarkModeContext } from './contex/DarkModeContex.js'

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'bg-[#1e293b]  h-[100vh]  text-white' : ""}>
      <Dashboard />
    </div>
  );
}

export default App;
