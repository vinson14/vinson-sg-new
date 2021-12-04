import { Box } from "@mui/material";
import Image from "next/image";

const Background = () => {
  return (
    <Box position="fixed" height="100vh" width="100vw" zIndex="-1">
      <Image alt="Dark Keyboard" src="/home-bg.jpg" layout="fill" objectFit="cover" quality={100} />
    </Box>
  );
};

export default Background;
