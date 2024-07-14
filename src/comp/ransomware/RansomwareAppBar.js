import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const RansomewareAppBar = ({drawerSharedState, onDrawerSharedStateChange}) => {
    const toggleDrawerState = () => {
        onDrawerSharedStateChange(!drawerSharedState)
    }

   return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            { drawerSharedState ?
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawerState}
                >
                <CloseIcon />
                </IconButton>
                :
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="close drawer"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawerState}
                >
                <MenuIcon />
                </IconButton>
            }

<Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CYBER SECURITY ATTACKS - RANSOMWARE 
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CYBER SECURITY ATTACKS - RANSOMWARE 
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          </Box>    


            </Toolbar>
        </AppBar>
        </Box>
  );
};

export default RansomewareAppBar;
