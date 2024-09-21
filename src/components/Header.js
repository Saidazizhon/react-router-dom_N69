const Header = () => {
    return (
      <div className="flex justify-between p-4 bg-white shadow">
        <h2 className="text-lg font-semibold">Overview</h2>
        <div className="flex items-center">
          <span className="mr-4">Jones Ferdinand</span>
          <img
            src="profile-image-url" // Profil rasmini qo'shing
            alt="profile"
            className="rounded-full w-8 h-8"
          />
        </div>
      </div>
    );
  };
  
  export default Header;
  