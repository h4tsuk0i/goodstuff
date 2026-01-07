import { useEffect, useState } from "react";
import { type User, type Game } from "../types/Profile";


const Profile = () => {
  const [user, setUser] = useState<User>();
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    try {
      fetch(
        "https://drive.google.com/file/d/1IQ-SfSRF7FaoLzHnsGyPfYN0K-8xz0Um/view?usp=drive_link"
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
        "https://api.thegamesdb.net/v1/Games/ByGameID?apikey="
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
