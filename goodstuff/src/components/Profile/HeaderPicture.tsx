import Box from "@mui/material/Box";
import Carousel from "react-material-ui-carousel";
import { type user } from "../../types/Profile";

type HeaderPictureProps = {
  user: user;
};

export function HeaderPicture({ user }: HeaderPictureProps) {
  return (
    <Box>
      <Carousel>
        {user.headerPictures.map((picture) => (
          <img src={picture} alt="Header" key={picture} />
        ))}
      </Carousel>
    </Box>
  );
}

export default HeaderPicture;
