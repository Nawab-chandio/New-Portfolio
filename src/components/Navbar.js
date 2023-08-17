import { Grid, Typography } from "@mui/material";
import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const style = {
  color: "white",
  fontFamily: "arial",
  fontSize: "26px",
  padding: "10px",
};

const Contacts = {
  color: "white",
  fontFamily: "Lexend",
  textDecoration: "none",
};

function Navbar() {
  return (
    <Grid style={{ backgroundColor: "#0C1A35" }}>
      <Grid container className="" >
        <Grid item xs={5}>
          <Typography style={style}>
            Nawab Ali | React JS Developer{" "}
            <Typography style={{ color: "gray", fontStyle: "italic" }}>
              January 2023 - Present
            </Typography>
          </Typography>
        </Grid>

        <Grid container item xs={7} justifyContent={"right"} >
          <Typography
            style={{
              textAlign: "right",
              flexDirection: "column",
              alignItems: "flex-end",
              padding: "5px 5px"
            }}
          >
            <a
              href="tel:+923440004181"
              style={{ ...Contacts, display: "flex", paddingBottom: '10px' }}
            >
              <PhoneIphoneIcon style={{ marginRight: "5px" }} />
              +92 344 0004181
            </a>
            {/* <br /> */}
            <a
              href="mailto:nawaab.subhan@gmail.com"
              style={{ ...Contacts, display: "flex", paddingBottom: '10px' }}
            >
              <EmailIcon style={{ marginRight: "5px" }} />
              nawaab.subhan@gmail.com
            </a>
            {/* <br /> */}
            <a
              href="https://www.linkedin.com/in/nawab-chandio-429958159/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...Contacts, display: "flex", alignItems: "center" }}
            >
              <LinkedInIcon style={{ marginRight: "5px" }} />
              www.linkedin.com/nawab-chandio
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Navbar;
