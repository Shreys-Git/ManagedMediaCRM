import { Box, Button, Stack, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import WelcomeImage from "../../assets/WelcomeImage.png";

export const WelcomeBar = () => {
  return (
    <>
      <Stack direction="row" m={5}>
        <Stack justifyContent="center" alignItems="center">
          <Box width={"70%"}>
            <Typography variant="h2" color="inherit" mb={2}>
              Fast forward your bussiness
            </Typography>
            <Typography mb={2}>
              #ManagedMedia helps you manage your entire business. Send
              proposals, sign contracts, track billable hours, create invoices,
              and receive payments all in one place.
            </Typography>
            <Button>
              <SendIcon sx={{ paddingRight: "0.5rem" }} />
              Start for free
            </Button>
          </Box>
        </Stack>
        <Box>
          <img
            src={WelcomeImage}
            style={{ width: "100%" }}
            alt="welcome-image"
          />
        </Box>
      </Stack>
    </>
  );
};
