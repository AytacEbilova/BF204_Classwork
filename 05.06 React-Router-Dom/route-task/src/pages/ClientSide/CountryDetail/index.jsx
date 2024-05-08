import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom'; 
import { getOne } from '../../../services/request';

const CountryDetail = () => { 
  const [country, setCountry] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      getOne('/countries', id)
        .then((response) => {
          setCountry(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }, [id]);

  if (!country) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={country.flagImg} 
          alt={`Flag of ${country.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color:'red'}}>
            {country.capital}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {country.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => navigate(-1)}>Go Back</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CountryDetail;
