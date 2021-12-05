import { Typography } from "@mui/material";
import DefaultCard from "./default-card";

const ProfileCard = ({ name, profile }) => {
  return (
    <DefaultCard>
      <Typography>{name}</Typography>
      <Typography>{profile}</Typography>
    </DefaultCard>
  );
};

export default ProfileCard;
