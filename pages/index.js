import { Box, Container, Grid, Typography } from "@mui/material";
import DefaultCard from "../components/stateless/cards/default-card";
import ProfileCard from "../components/stateless/cards/profile-card";
import MainContainer from "../components/stateless/containers/main-container";
import Background from "../components/stateless/misc/background";
import Hero from "../components/stateless/misc/hero";
import MetaData from "../components/stateless/misc/meta-data";
import { PROFILE_CARD_NAME, PROFILE_CARD_PROFILE } from "../constants/strings";

const Home = () => {
  return (
    <MainContainer>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Hero />
        </Grid>
        <Grid xs={12} md={6}>
          <ProfileCard
            name={PROFILE_CARD_NAME}
            profile={PROFILE_CARD_PROFILE}
          />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default Home;
