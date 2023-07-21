import { Button, Grid, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

const style = {
  color: "white",
  fontFamily: "arial",
  fontSize: "26px",
  padding: "10px",
};

const list = {
  color: "white",
  fontFamily: "Lexend",
  fontSize: "16px",
  padding: "15px",
  justifyContent: "right",
};

function Navbar() {
  return (
    <div style={{ backgroundColor: "#0C1A35" }}>
      <Grid container className="" spacing={2}>
        <Grid item xs={5}>
          <Typography style={style}>
            Nawab Ali | React JS Developer{" "}
            <Typography style={{ color: "gray", fontStyle: "italic" }}>
              January 2023 - Present
            </Typography>
          </Typography>
        </Grid>

        <Grid container item xs={7} justifyContent={"right"}>
          <Typography
            style={{
              color: "skyblue",
              fontSize: "14px",
              textAlign: "right",
              paddingTop: "10px",
            }}
          >
            Tel: +92 344 0004181 <br /> Email:{" "}
            <a href="mailto:nawaab.subhan@gmail.com">nawaab.subhan@gmail.com</a>{" "}
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/nawab-chandio-429958159/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/nawab-chandio-429958159/
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Navbar;
