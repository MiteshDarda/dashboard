import Dashboard from "./components/dashboard";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="text-black flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
