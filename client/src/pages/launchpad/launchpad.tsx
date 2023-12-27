import { Stack } from "@mui/material";
import { GreetCard } from "../../components/greetCard/greetCard";
import { PNLCard } from "../../components/pnlCard/pnlCard";
import { SideBar } from "../../components/sidebar/sidebar";

export const LaunchPad = () => {
  return (
    <>
      <SideBar />
      <Stack sx={{ ml: "270px" }}>
        <GreetCard />
        <PNLCard />
      </Stack>
    </>
  );
};
