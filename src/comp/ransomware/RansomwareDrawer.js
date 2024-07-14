import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';


const CustomLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

const RansomwareDrawer = ({drawerSharedState, onDrawerSharedStateChange, onViewChange}) => {

  const toggleDrawer = (newOpen) => () => {
    onDrawerSharedStateChange(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>

        
          <ListItem key="Home" disablePadding component={CustomLink} to="/home" onClick={toggleDrawer(false)}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem key="Search" disablePadding component={CustomLink} to="/search" onClick={toggleDrawer(false)}>
            <ListItemButton>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
          </ListItem>

          <ListItem key="Add" disablePadding component={CustomLink} to="/add" onClick={toggleDrawer(false)}>
            <ListItemButton>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Add" />
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={drawerSharedState} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default RansomwareDrawer;


