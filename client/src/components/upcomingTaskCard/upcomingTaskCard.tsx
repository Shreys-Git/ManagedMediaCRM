import {
  Card,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
export const UpcomingTaskCard = () => {
  return (
    <Card sx={{ p: 2, mt: 2, maxWidth: "35%" }}>
      <Stack direction="row" spacing={2}>
        <Typography variant="h5" fontWeight={"bold"}>
          Upcoming and Overdue Tasks
        </Typography>
        <Button>
          <AddIcon />
        </Button>
      </Stack>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="Task - 1: Here comes a brief description"
        />
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="Task - 2: Here comes a brief description"
        />
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="Task - 3: Here comes a brief description"
        />
        <FormControlLabel
          control={<Checkbox color="success" />}
          label="Task - 4: Here comes a brief description"
        />
      </FormGroup>
    </Card>
  );
};
