import { useEffect, useState } from "react";
import { type User, type Game } from "../types/Profile";

const Profile = () => {
  const [user, setUser] = useState<User>();
  const [game, setGame] = useState<Game>();

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

  useEffect(() => {
    try {
      fetch(
        "https://api.thegamesdb.net/d8e4c3f5090daa662694828af9faa52d708befaa120573f5797c0fbd7c05b929"
      )
        .then((res) => res.json())
        .then((data) => setGame(data.game));
    } catch (error) {
      console.error("Error fetching games", error);
    }
  }, []);

  return <div>asd</div>;
};
export default Profile;
