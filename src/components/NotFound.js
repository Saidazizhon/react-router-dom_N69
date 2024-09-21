import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Sahifa topilmadi!</p>
      <Link to="/" className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default NotFound;
