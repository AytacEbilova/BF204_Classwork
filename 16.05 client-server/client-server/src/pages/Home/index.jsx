import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useGetAllMenuQuery, useDeleteMenuByIdMutation, usePostMenuMutation } from '../../services/menuApi';
import { useState } from 'react';

const Home = () => {
  const { data: menu, isLoading, refetch } = useGetAllMenuQuery();
  const [deleteMenuById] = useDeleteMenuByIdMutation();

 
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div style={{ padding: 100 }}>
      {menu && menu.data.map((m) => (
        <Card sx={{ maxWidth: 345 }} key={m.id}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <img src={m.src} alt="" />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={m.title}
            subheader={m.price}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {m.bio}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Button
              style={{ color: 'black' }}
              onClick={async () => {
                await deleteMenuById(m._id);
                refetch();
              }}
            >
              <DeleteIcon />
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
    </>
  
  );
};

export default Home;
