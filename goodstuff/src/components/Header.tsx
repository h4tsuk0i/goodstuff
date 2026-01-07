import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export function Header() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/profile">
          Profile
        </Link>
        <Link underline="hover" color="inherit" href="/shoppinglist">
          <Typography>Shopping List</Typography>
        </Link>
      </Breadcrumbs>
    </Box>
  );
}
