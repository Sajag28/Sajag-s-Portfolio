import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey,deepOrange } from '@mui/material/colors';
import {useNavigate} from 'react-router-dom';
const pages = ['Home','Education', 'Experience', 'Projects', 'Resume'];


function ResponsiveAppBar() {
    const theme = createTheme({
        palette: {
          primary: {
            light:grey[900],
            main: grey[900],
          },
          secondary: {
            main: grey[900],
          },
        },
      });
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 const or=deepOrange[500]
 const navigate=useNavigate()
  return (
    
    <AppBar position="static" color="#121212"sx={{mt:-1,ml:0 }}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 0 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: -14,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Poppins',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="warning"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              
              sx={{display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem sx={{backgroundColor:'#121212'}} key={page} onClick={()=>(page==='Resume'? window.location.href="https://drive.google.com/file/d/1ccyuzhzslBA23q0KkqBZVvMyB4oYuvds/view?usp=share_link" : navigate(`/${page}`))}>
                  <Typography sx={{fontWeight:600,color:"#ff5722",fontFamily:'Poppins', textAlign: 'end' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 400,
              letterSpacing: '.3rem',
              color: '#ff5722',
              textDecoration: 'none',
            }}
          >
            SAJAG'S PORTFOLIO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>(page==='Resume' ? window.location.href="https://drive.google.com/file/d/1amjJoBX8Dy8LkjtL4jr3KNe1SyXSmhFN/view?usp=sharing" : page==='Home' ? navigate('/') : navigate(`/${page}`))}
                sx={{ mr:10, my: 3, color: '#ff5722', letterSpacing: '.4rem', fontSize: '1.2rem',fontFamily: 'Poppins', display: 'block' ,fontWeight:700}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   
    
  );
}
export default ResponsiveAppBar;
