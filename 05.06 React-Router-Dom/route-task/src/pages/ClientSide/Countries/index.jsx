import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { getAll } from "../../../services/request";
import { Link } from "react-router-dom";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ClientCountries = () => {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [search, setSearh] = useState("");
  const [sortOrder, setSortOrder] = useState('');
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    getAll("/countries")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const filteredData=data.filter(country=>country.name.toLowerCase().includes(search.toLocaleLowerCase()));
  const handleSearch=(e)=>{
    setSearh(e.target.value);
  }
  const handleSort=(e)=>{
    setSortOrder(e.target.value);
    if(e.target.value ==='asc'){
      setData([...data].sort((a,b)=>a.name.localeCompare(b.name)));
    }else if(e.target.value ==='desc'){
      setData([...data].sort((a,b)=>b.name.localeCompare(a.name)));

    }
  }
  return (
    <Container style={{ padding: "30px" }}>
       <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search Countries"
            variant="outlined"
            value={search}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="sort-label">Sort By Name</InputLabel>
            <Select
              labelId="sort-label"
              id="sort-select"
              value={sortOrder}
              label="Sort By Name"
              onChange={handleSort}
            >
              <MenuItem value="asc">A-Z</MenuItem>
              <MenuItem value="desc">Z-A</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {filteredData.map((e) => {
            return (
              <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader title={e.name} subheader={e.capital} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={e.flagImg}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {e.population}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <Button size="small">
                      <Link to={`/countries/${e.id}`}>Detail</Link>
                    </Button>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>{e.description}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default ClientCountries;
