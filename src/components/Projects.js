import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import todo from "./../pics/todo.jpg";
import portfolio from "./../pics/portfolio.jpg";
import baker from "./../pics/baker.jpg";
import library from "./../pics/Library.webp";
import shopping from "./../pics/shopping.jpg"

const ProjectsName = [
  {
    name: "Digital Library",
    color: "#5c7d96",
    path: "https://github.com/Nawab-chandio/digital-library", 
    BgImage: library
  },
  {
    name: "Portfolio",
    color: "#5c7d96",
    path: "https://github.com/Nawab-chandio/portfolio", 
    BgImage: portfolio
  },
  {
    name: "Bakery",
    color: "#5c7d96",
    path: "https://github.com/Nawab-chandio/bakery", 
    BgImage: baker
  },
  {
    name: "To Do List",
    color: "#5c7d96",
    path: "https://github.com/Nawab-chandio/todo-list", 
    BgImage: todo
  },
  {
    name: "Base Apparel Coming",
    color: "#5c7d96",
    path: "https://github.com/Nawab-chandio/base-apparel-coming", 
    BgImage: shopping
  },
];

const heading ={
  justifyContent: 'center',
  backgroundColor: "#0C1A35", 
  padding: '10px',
}

const h3Style = {
  ...heading, 
  fontSize: '1.5rem',
  fontWeight: 'bold', 
  color: "white",
  textAlign: "center",
  borderRadius: '15px'
};

function Projects() {
  const handleCardClick = (path) => {
    window.location.href = path;
  };

  return (
    <Grid container pl={'10px'} >
      <Grid container justifyContent={'center'}>
      <Grid item xs={11} style={h3Style}>
       <Typography style={h3Style} >  My Projects </Typography>
       </Grid>
       </Grid>
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
              backgroundImage: `url(${project.BgImage})`,
              backgroundSize: 'cover', 
              width: "100%",
              height: 280,
              transition: "box-shadow 0.3s",
              "&:hover": {
                boxShadow: "0px 4px 10px rgba(0,0,0,0.7)",
                cursor: "pointer",
              },
            }}
          > 
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;
