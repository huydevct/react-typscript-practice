import React, { ChangeEvent, useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import WelcomeMessage from "./WelcomeMessage";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  const [position, setPosition] = useState<string>("Full-stack");

  const classes = useStyles();

  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000)
    return () => clearInterval(timer)
  }, [])

  const onPositionChange = (
    event: ChangeEvent<{
      value: unknown;
    }>
  ) => setPosition(event.target.value as string);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My Movies</Typography>

          <Box textAlign="center">
            <WelcomeMessage position={position} />

            <Box mt={1}>
              <FormControl>
                <Select
                  value={position}
                  onChange={onPositionChange}
                  className={classes.positionSelect}
                >
                  <MenuItem value="Full-stack">Full-stack</MenuItem>
                  <MenuItem value="Front-end">Front-end</MenuItem>
                  <MenuItem value="Back-end">Back-end</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box textAlign="center">
            <Box my={1}>
                <Typography variant="h6">{time.toUTCString()}</Typography>
            </Box>

            <Button variant="contained">
                Login
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
