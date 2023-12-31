import { Card, Typography, Grid } from "@mui/material";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Styling for the charts

export const PNLCard = () => {
  return (
    <Card sx={{ p: 2, mt: 2, width: "70%" }}>
      <Typography variant="h5" fontWeight={"bold"}>
        Profit & Loss
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Bar
            data={{
              labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [
                {
                  label: "Revenue",
                  data: [100, 200, 300, 150, 400, 200],
                  backgroundColor: "rgba(75,192,192,0.6)",
                },
                {
                  label: "Investment",
                  data: [30, 70, 100, 50, 200, 200],
                  backgroundColor: "rgba(255,99,132,0.6)",
                },
              ],
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Bar
            data={{
              labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [
                {
                  label: "Paid",
                  data: [100, 200, 300, 150, 400, 200],
                  backgroundColor: "rgba(54,162,235,0.6)",
                },
                {
                  label: "Overdue",
                  data: [30, 70, 100, 50, 200, 200],
                  backgroundColor: "rgba(255,206,86,0.6)",
                },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};
