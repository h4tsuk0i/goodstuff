import { useEffect, useState } from "react";
import { type User } from "../types/Profile";

const Profile = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    try {
      fetch(
        "https://drive.google.com/file/d/107OAR5wKhjyTa1a_k2Z_DoW5y9UM-aIu/view?usp=drive_link"
      )
        .then((res) => res.json())
        .then((data) => setUser(data.user));
    } catch (error) {
      console.error("Error fetching user", error);
    }
  }, []);

  return <div>asd</div>;
};
export default Profile;
