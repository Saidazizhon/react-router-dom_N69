import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Tickets from "./components/Tickets";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow bg-gray-100">
          <Header />
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
