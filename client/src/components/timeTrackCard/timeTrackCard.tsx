import { Card, Typography, Grid, Stack } from "@mui/material";
import { Bar } from "react-chartjs-2";
import "chart.js/auto"; // Styling for the charts

export const TimeTrackCard = () => {
  return (
    <Card sx={{ p: 2, mt: 2, width: "70%" }}>
      <Typography variant="h5" fontWeight={"bold"}>
        Time Tracked
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Bar
            data={{
              labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [
                {
                  label: "Billed Time",
                  data: [100, 200, 300, 150, 400, 200],
                  backgroundColor: "rgba(75,192,192,0.6)",
                },
                {
                  label: "Unbilled Time",
                  data: [30, 70, 100, 50, 200, 200],
                  backgroundColor: "rgba(255,99,132,0.6)",
                },
              ],
            }}
          />
          <Grid container>
            <Grid item xs={6}>
              <Stack>
                <Typography>Billed Time</Typography>
                <Typography>00:00:00</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack>
                <Typography>Unbilled Time</Typography>
                <Typography>00:00:00</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Bar
            data={{
              labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [
                {
                  label: "Billed Amount",
                  data: [100, 200, 300, 150, 400, 200],
                  backgroundColor: "rgba(54,162,235,0.6)",
                },
                {
                  label: "Unbilled Amount",
                  data: [30, 70, 100, 50, 200, 200],
                  backgroundColor: "rgba(255,206,86,0.6)",
                },
              ],
            }}
          />
          <Grid container>
            <Grid item xs={6}>
              <Stack>
                <Typography>Billed Amount</Typography>
                <Typography>$0.00</Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack>
                <Typography>Unbilled Amount</Typography>
                <Typography>$0.00</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
