import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            News
          </Typography>
          <Button color="inherit">
          <Link to={'/admin'}>Home</Link>
          </Button>
          
          <Button color="inherit">
          <Link to={'/admin/add-employee'}>Add Employee</Link>
          </Button>
          <Button color="inherit">
          <Link to={'/admin/edit/:id'}>Edit Employee</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header