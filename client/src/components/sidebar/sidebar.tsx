import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Card,
  Stack,
  List,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import FastForwardIcon from "@mui/icons-material/FastForward";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import FaceIcon from "@mui/icons-material/Face";
import FolderIcon from "@mui/icons-material/Folder";
import TaskIcon from "@mui/icons-material/Task";
import PaidIcon from "@mui/icons-material/Paid";
import CreateIcon from "@mui/icons-material/Create";
import DescriptionIcon from "@mui/icons-material/Description";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ContactlessIcon from "@mui/icons-material/Contactless";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export const SideBar = () => {
  return (
    <Drawer anchor={"left"} open={true} variant={"permanent"}>
      <List sx={{ paddingRight: "20px" }}>
        <ListItem>
          <ListItemIcon>
            <FastForwardIcon />
          </ListItemIcon>
          <ListItemText primary={"Phoenix"} />
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <RocketLaunchIcon />
            </ListItemIcon>
            <ListItemText primary={"Launch Pad"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary={"Clients"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary={"Projects"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <TaskIcon />
            </ListItemIcon>
            <ListItemText primary={"Tasks"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemText primary={"Tools"} />
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <PaidIcon />
            </ListItemIcon>
            <ListItemText primary={"Invoices"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary={"Proposals"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={"Contracts"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <AccessAlarmIcon />
            </ListItemIcon>
            <ListItemText primary={"Time Tracking"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemText primary={"Finances"} />
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ContactlessIcon />
            </ListItemIcon>
            <ListItemText primary={"Payments"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary={"Book Keeping"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
