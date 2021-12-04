import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import NavbarLink from "../buttons/navbar-link";

const Navbar = ({ links }) => {
  return (
    <AppBar position="sticky" color="transparent" sx={{ boxShadow: 0 }}>
      <Toolbar>
        <Box display="flex">
          {links.map((link) => (
            <NavbarLink route={link.route} label={link.label} />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
