import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';


const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'white', 
  '&:hover': {
    textDecoration: 'none' 
  },
}));

const ClientHeader = () => {
  return (
    <div style={{ zIndex: '999' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" > 
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Client(Side)
            </Typography>
            <Button color="inherit">
              <StyledLink to='/'>Home</StyledLink>
            </Button>
            
            <Button color="inherit">
              <StyledLink to='/clientcountries'>Countries</StyledLink>
            </Button>
            <Button color="inherit">
              <StyledLink to='/about'>About</StyledLink>
            </Button>
            <Button color="inherit">
              <StyledLink to='/contact'>Contact</StyledLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default ClientHeader;
