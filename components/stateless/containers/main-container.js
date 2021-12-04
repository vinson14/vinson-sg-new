import { Box, Container } from "@mui/material";
import { NAVBAR_LINKS } from "../../../constants/ui-components";
import MetaData from "../misc/meta-data";
import Navbar from "../navigation/navbar";

const MainContainer = ({ children }) => {
  return (
    <Box height="100vh">
      <MetaData />
      <Navbar links={NAVBAR_LINKS} />
      <Container>{children}</Container>
    </Box>
  );
};

export default MainContainer;
