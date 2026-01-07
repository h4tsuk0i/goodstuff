import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { type User } from "../../types/Profile";

type ProfileAvatarProps = {
  user: User;
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
