import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-900 text-white w-60 p-5">
      <h2 className="text-2xl font-bold mb-6">Dashboard Kit</h2>
      <ul>
        <li className="mb-4">
          <Link to="/" className="flex items-center">
            Overview
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/tickets" className="flex items-center">
            Tickets
          </Link>
        </li>
        {/* Boshqa havolalar qo'shing: Ideas, Contacts va boshqalar */}
      </ul>
    </div>
  );
};

export default Sidebar;
