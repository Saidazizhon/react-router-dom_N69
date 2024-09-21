import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Overview from "../components/Overview";
import Tickets from "../components/Tickets";

const Dashboard = () => {
  return (
    <Router>
      <div className="flex">
        {/* Chap tomonda joylashgan Sidebar */}
        <Sidebar />

        {/* Asosiy kontent qismi */}
        <div className="flex-grow bg-gray-100 min-h-screen">
          {/* Yuqoridagi header */}
          <Header />

          {/* Sahifalarni navigatsiya qilish */}
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/tickets" element={<Tickets />} />
              {/* Boshqa sahifalarni qo‘shishingiz mumkin */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
