import { Grid, Typography, Card } from "@mui/material";
import React from "react";
import Nawab from "./../pics/Nawab.jpeg";
import Projects from "./Projects";
import Skills from "./Skills";



function MainBody() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card
          sx={{
            display: "inline-block",
            boxShadow: "rgba(0,0,0,0.2)",
            borderRadius: 2,
            margin: 1.5,
            backgroundColor: "#2c405e",
            width: "100%",
            transition: "box-shadow 0.3s",
            "&:hover": {
              boxShadow: "0px 4px 10px rgba(0,0,0,0.7)",
            },
          }}
        >
          <Typography
            style={{
              color: "white",
              fontFamily: "lexend",
              padding: "6px",
              fontSize: "20px",
              "@media (maxWidth: 600px)": {
                fontSize: "14px",
              },
            }}
          >
            {"I'm a front-end developer at "}
            <span style={{ color: "brown", fontStyle: "italic" }}>
              Growth arbor Pvt
            </span>
            {
              ", contributing to an exciting project. As part of the development team, I play a key role in creating user-friendly websites and applications using technologies such as HTML, CSS, JavaScript, React JS, and MUI (Material-UI). I am passionate about continuously improving my skills and keeping up-to-date with the latest web technologies by reading web tech articles on various online platforms. Through my dedication and expertise, I aim to contribute to the project's success and create impactful solutions for our users."
            }
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} sm={5} pl={{ xs: "0", sm: "50px" }}>
        <Card
          sx={{
            display: "inline-block",
            boxShadow: "rgba(0,0,0,0.2)",
            borderRadius: 2,
            margin: 1.5,
            backgroundColor: "#2c405e",
            width: "100%",
            height: 350,
            transition: "box-shadow 0.3s",
            "&:hover": {
              boxShadow: "0px 4px 10px rgba(0,0,0,0.7)",
              cursor: "pointer",
            },
          }}
        >
          <Typography>
            <Skills />
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3} sx={{ display: "flex", alignItems: "center" }}>
        <Card
          sx={{
            display: "inline-block",
            boxShadow: "rgba(0,0,0,0.2)",
            borderRadius: 10,
            margin: 1.5,
            backgroundColor: "#2c405e",
            width: "100%",
            height: 350,
            transition: "box-shadow 0.3s",
            "&:hover": {
              boxShadow: "0px 4px 10px rgba(0,0,0,0.7)",
              cursor: "pointer",
            },
          }}
        >
          <img
            src={Nawab}
            alt="Picture"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Card>
      </Grid>

<Grid container mt={'40px'}>
      <Projects />
      </Grid>
    </Grid>
  );
}

export default MainBody;
