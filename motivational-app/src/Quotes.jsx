import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Quotes({ text, from }) {
  return (
    <Box sx={{ width: "100%" }} style={{ backgroundColor: "aliceblue" }}>
      <Stack spacing={3}>
        <Item style={{ margin: 50, fontSize: 30 }}>
          {text}
          <p>Author:({from})</p>
        </Item>
      </Stack>
    </Box>
  );
}

export default Quotes;
