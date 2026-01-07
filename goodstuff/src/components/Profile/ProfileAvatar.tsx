import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { type user } from "../../types/Profile";

type ProfileAvatarProps = {
  user: user;
};

export function ProfileAvatar({ user }: ProfileAvatarProps) {
  return (
    <Box>
      <Avatar
        src={user.profilePicture}
        alt="Profile"
        sx={{ width: 100, height: 100 }}
      />
    </Box>
  );
}

export default ProfileAvatar;
