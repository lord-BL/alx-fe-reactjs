function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
      <img
        className="rounded-full w-36 h-36 mx-auto hover:scale-110 transition duration-500"
        src="https://placehold.co/600x400"
        alt="User"
      />
      <h1 className="text-xl text-blue-800 my-4 hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-gray-600 text-base hover:shadow-xl">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
