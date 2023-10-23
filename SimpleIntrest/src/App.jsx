import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import { margin } from "@mui/system";
import { useState } from "react";

function App() {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState(0);

  const calculateIntrest = () => {
    setSi((p * t * r) / 100);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SimpleIntrest
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        onChange={(e) => setP(e.target.value)}
        id="filled-basic"
        label="Enter principle"
        variant="filled"
        style={{ margin: 40, width: 500 }}
      />
      <TextField
        onChange={(e) => setT(e.target.value)}
        id="filled-basic"
        label="Enter Time"
        variant="filled"
        style={{ margin: 40, width: 500 }}
      />
      <TextField
        onChange={(e) => setR(e.target.value)}
        id="filled-basic"
        label="Enter rate"
        variant="filled"
        style={{ margin: 40, width: 500 }}
      />
      <br></br>
      <Button variant="outlined" className="btn" onClick={calculateIntrest}>
        Calculate
      </Button>
      <br></br>
      <Typography variant="h6" gutterBottom>
        The SimpleIntrest is : {si}
      </Typography>
    </Box>
  );
}

export default App;
