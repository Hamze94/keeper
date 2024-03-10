import { useContext } from "react";
import Dashboard from "./components/Dashboard";

import { DarkModeContext } from './contex/DarkModeContex.js'

function App() {
  const { darkMode, toggle } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'bg-[#1e293b] w-screen  text-white' : ""}>
      <Dashboard />
    </div>
  );
}

export default App;
