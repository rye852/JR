import MenuIcon from '@mui/icons-material/Menu';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeOptions } from '@mui/material/styles/createTheme';
import {
  Tooltip,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
} from '@mui/material';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.tsx';
import { useTheme } from '@emotion/react';
import { GitHubBtn } from './';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { inLoad, outLoad } from '../store';

type Props = {
  window?: () => Window;
  handleToogle: () => void;
};

export default function DrawerAppBar({ window, handleToogle }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const theme: ThemeOptions = useTheme();
  const dispatch = useDispatch();
  const handleClick = () => {
    return dispatch(inLoad());
  };

  useEffect(() => {
    dispatch(outLoad());
  }, [dispatch]);
  const iconsButton = (color: string) => (
    <ListItem disablePadding>
      <ListItemButton
        color={'#f00'}
        onClick={handleToogle}
        sx={{ textAlign: 'center' }}>
        <Tooltip title="Dark/Light Mode">
          <IconButton sx={{ p: 0, margin: 'auto' }}>
            {theme.palette?.mode === 'dark' ? (
              <Brightness7Icon sx={{ color: color }} />
            ) : (
              <Brightness4Icon sx={{ color: color }} />
            )}
          </IconButton>
        </Tooltip>
      </ListItemButton>
      <a
        target="_blank"
        style={{
          margin: 'auto',
          color: 'inherit',
          textDecoration: 'none',
          width: '50%',
        }}
        href="https://github.com/rye852">
        <ListItemButton sx={{ textAlign: 'center' }}>
          <GitHubBtn color={color} />
        </ListItemButton>
      </a>
    </ListItem>
  );

  const drawer = (
    <Box
      color={theme.text?.navColor}
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', mt: 1 }}>
      <Link onClick={() => handleClick()} to={'/'}>
        <IconButton sx={{ p: 1 }}>
          {/*Logo*/}
          <Logo fontSize="30px" color={theme.text?.navColor || 'black'} />
        </IconButton>
      </Link>
      <Divider />
      <List>
        <Link
          onClick={() => handleClick()}
          style={{
            margin: 'auto',
            color: 'inherit',
            textDecoration: 'none',
          }}
          to="exercises/all/all">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={'Exercises'} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          onClick={() => handleClick()}
          style={{
            margin: 'auto',
            color: 'inherit',
            textDecoration: 'none',
          }}
          to="/exercises/equipment/body weight">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={'Body Weight'} />
            </ListItemButton>
          </ListItem>
          <Divider />
        </Link>
        <Box mt="10px">{iconsButton(theme.text?.navColor || 'inherit')}</Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar sx={{ backgroundColor: theme.text?.nav }} component="nav">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}>
            <Link onClick={() => handleClick()} to={'/'}>
              <IconButton sx={{ p: 1 }}>
                <Logo fontSize="30px" color="white" />
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link
              onClick={() => handleClick()}
              to="exercises/all/all"
              style={{
                margin: 'auto',
                color: 'inherit',
                textDecoration: 'none',
                marginBottom: 'auto',
              }}>
              <Button sx={{ color: '#fff' }}>Exercises</Button>
            </Link>

            <Link
              onClick={() => handleClick()}
              to="/exercises/equipment/body weight"
              style={{
                margin: 'auto',
                color: 'inherit',
                textDecoration: 'none',
                marginBottom: 'auto',
              }}>
              <Button sx={{ color: '#fff' }}>Body Weight</Button>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}>
            {iconsButton('#fff' || 'inherit')}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClick={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '240px',
              maxWidth: '100%',
              background: theme.text?.bgColor,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
