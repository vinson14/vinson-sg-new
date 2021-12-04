import { Box, Container, Typography } from "@mui/material";
import Background from "../components/stateless/misc/background";
import MetaData from "../components/stateless/misc/meta-data";

const Home = () => {
  return (
    <Box minHeight="100vh">
      <MetaData />
      <Background />
      <Container>
        <Typography>Vinson</Typography>
      </Container>
    </Box>
  );
};

export default Home;
