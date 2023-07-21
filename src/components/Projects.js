import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import CSS from "./../pics/CSS.png";


const ProjectsName = [
  {
    name: "Digital Library",
    color: "#5c7d96",
    path: "https://github.com/Nawab-chandio/digital-library", 
  },
  {
    name: "Portfolio",
    color: "#5c7d96",
    path: "https://github.com/Nawab-chandio/portfolio", 
  },
  {
    name: "Bakery",
    color: "#5c7d96",
    path: "https://github.com/Nawab-chandio/bakery", 
  },
  {
    name: "To Do List",
    color: "#5c7d96",
    path: "https://github.com/Nawab-chandio/todo-list", 
  },
  {
    name: "Base Apparel Coming",
    color: "#5c7d96",
    path: "https://github.com/Nawab-chandio/base-apparel-coming", 
  },
  
];
 

function Projects() {
  const handleCardClick = (path) => {
    window.location.href = path;
  };

  return (
    <Grid container pl={'10px'}>
      {ProjectsName.map((project, index) => (
        <Grid container item xs={12} sm={4} key={index} justifyContent={"space-between"}>
          <Card
            onClick={() => handleCardClick(project.path)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "rgba(0,0,0,0.2)",
              borderRadius: 2,
              margin: 1.5,
              backgroundColor: project.color,
              width: "100%",
              height: 100,
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0px 4px 10px rgba(0,0,0,0.7)",
                cursor: "pointer",
              },
            }}
          > 
            <Typography style={{ color: 'white', textAlign: 'center'}}>{project.name}</Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;
