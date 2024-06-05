import Dashboard from "./components/dashboard";
import HighlightsBar from "./components/highlights_bar";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="text-black flex">
      <Sidebar />
      <Dashboard />
      <HighlightsBar />
    </div>
  );
}

export default App;
