import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { getAll } from "../../../services/request";
import { useEffect } from "react";
import { Container, Grid } from "@mui/material";

const ClientEmployees = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll("/employees")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {data &&
          data.map((e) => {
            return (
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={e.image}
                    title={e.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {e.age}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"></Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default ClientEmployees;
