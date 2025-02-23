import { useContext } from "react";
import UserContext from "./UserContext"; // Adjust the path if needed

function UserProfile() {
  const userData = useContext(UserContext); // Accessing userData from context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
