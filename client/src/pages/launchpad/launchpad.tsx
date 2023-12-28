import { Stack } from "@mui/material";
import { GreetCard } from "../../components/greetCard/greetCard";
import { PNLCard } from "../../components/pnlCard/pnlCard";
import { SideBar } from "../../components/sidebar/sidebar";
import { UpcomingTaskCard } from "../../components/upcomingTaskCard/upcomingTaskCard";
import { TimeTrackCard } from "../../components/timeTrackCard/timeTrackCard";

export const LaunchPad = () => {
  return (
    <>
      <SideBar />
      <Stack sx={{ ml: "270px" }}>
        <GreetCard />
        <PNLCard />
        <UpcomingTaskCard />
        <TimeTrackCard />
      </Stack>
    </>
  );
};
