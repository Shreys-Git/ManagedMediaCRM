import {
  AppBar,
  Button,
  Icon,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import FastForwardIcon from "@mui/icons-material/FastForward";

export const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <FastForwardIcon />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            ManagedMedia
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Why Us?</Button>
            <Button color="inherit">University</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">Contact Us</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
