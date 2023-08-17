import React from "react";
import Link from "@mui/material/Link";
import { Box, Grid, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <Grid
      sx={{
        backgroundColor: "#2c405e",
        p: 4,
      }}
      component="footer"
      width={"100%"}
    >
      <Grid container>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontFamily: "lexend",
            }}
            variant= "h5" 
          >
            Social Media Contacts
          </Typography>
          <Link href="#" style={{ color: "white" }}>
            <FacebookIcon />
          </Link>
          <Link href="#" style={{ color: "white" }}>
            <InstagramIcon />
          </Link>
          <Link href="#" style={{ color: "white" }}>
            <LinkedInIcon />
          </Link>
          <Link href="#" style={{ color: "white" }}>
            <TwitterIcon />
          </Link>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body2" color="white" align="end">
            {"Copyright © "}
            <Link color="inherit" href="#">
              Your Website
            </Link>{" "}
            {new Date().toLocaleString("en-US", {
              year: "numeric",
              month: "long",
            })}
            {"."}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
