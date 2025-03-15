function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm">
      <img
        className="rounded-full w-36 h-36 mx-auto hover:scale-110 transition-transform duration-500 sm:w-24 sm:h-24 md:w-36 md:h-36"
        src="https://placehold.co/600x400"
        alt="User"
      />
      <h1 className="text-xl text-blue-800 my-4 hover:text-blue-500 sm:text-lg md:text-xl">
        John Doe
      </h1>
      <p className="text-gray-600 text-base hover:shadow-xl sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
