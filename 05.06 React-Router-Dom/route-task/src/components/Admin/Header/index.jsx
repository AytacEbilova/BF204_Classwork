import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const AdminHeader = () => {
  return (
    <div >
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{background: 'linear-gradient(90deg, rgba(236,132,132,1) 11%, rgba(213,30,30,1) 57%, rgba(125,1,1,1) 90%) '}}>
        <Toolbar  >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Admin
          </Typography>
          <Button color="inherit">
          <Link to={'/admin'} style={{textDecoration:'none',color:'white'}}>Home</Link>
          </Button>
          
          <Button color="inherit">
          <Link to={'/admin/countries'} style={{textDecoration:'none',color:'white'}}>Countries</Link>
          </Button>

          <Button color="inherit">
          <Link to={'/admin/message'} style={{textDecoration:'none',color:'white'}}>Message</Link>
          </Button>
          <Button color="inherit">
          <Link to={'/admin/add-country'} style={{textDecoration:'none',color:'white'}}>Add Country</Link>
          </Button>
  
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default AdminHeader