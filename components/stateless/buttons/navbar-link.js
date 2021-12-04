import { Link } from "@mui/material";
import NextLink from "next/link";

const NavbarLink = ({ route, label }) => {
  return (
    <NextLink href={route} passHref>
      <Link color="text.primary" sx={{ p: 1 }} underline="none">
        {label}
      </Link>
    </NextLink>
  );
};

export default NavbarLink;
