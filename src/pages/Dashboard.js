import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Overview from "../components/Overview";
import Tickets from "../components/Tickets";

const Dashboard = () => {
  return (
    <Router>
      <div className="flex">
         <Sidebar />

        <div className="flex-grow bg-gray-100 min-h-screen">

          <Header />

          <div className="p-6">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/tickets" element={<Tickets />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
