import { Card, CardContent } from "@mui/material";

const DefaultCard = ({ children }) => {
  return (
    <Card sx={{ boxShadow: 20 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default DefaultCard;
