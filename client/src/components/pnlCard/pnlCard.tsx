import { Card, Typography } from "@mui/material";

export const PNLCard = () => {
  return (
    <Card sx={{ p: 2, mt: 2, width: "30%" }}>
      <Typography variant="h5" fontWeight={"bold"}>
        Profit & Loss
      </Typography>
    </Card>
  );
};
