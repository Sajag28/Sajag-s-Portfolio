import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import back from './Mainbackground.png'
import { createTheme, responsiveFontSizes,ThemeProvider } from '@mui/material/styles'
import { Typography } from '@mui/material';
import Sajag from '../assets/SajagPhoto.jpeg'
import Sajag2 from '../assets/Cap5.jpeg'
import Sajag3 from '../assets/Sajag3.jpeg'
import Sajag4 from '../assets/Sajag4.jpeg'
import Sajag5 from '../assets/sajag5.jpeg'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import SouthSharpIcon from '@mui/icons-material/SouthSharp';
import {useEffect,useState} from 'react';
import './image.css';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fafafa',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#121212',
  }),
}));

export default function DirectionStack() {
  var theme = createTheme();

theme.typography.h1 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.2rem',
  },
};
var [ht, setHt] = useState(10);
var [shad,setShad]=useState('#ff5722')
var col=['#f57c00','#ef6c00','#ff6d00','']
useEffect(() => {
  const interval=setInterval(() => {
    setHt((ht) => (ht === 10 ? -50 : 10)); // Update state correctly
  }, 600);
  return () => clearInterval(interval);
   // Clean up interval on unmount
},[]);
  return (
    
    <>
      <div style={{marginTop:'0px'}}>
      <Stack direction="row" spacing={0}>
        
      <div style={{
        backgroundImage: `url(${back})`,
        backgroundSize: 'contain',
        backgroundPosition: '50% 0%',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
      }}>
        <Stack
  spacing={{ xs: 1, sm: 2 }}
  direction="row"
  useFlexGap
  sx={{ minWidth: 0,flexWrap: 'wrap' }}
>
<ThemeProvider theme={theme}>
  <Stack
  direction={{ xs: 'row', sm: 'row' }}
  spacing={{ xs: 0, sm: 3, md: 2 }}
  sx={{my:10,alignItems: 'center',justifyContent:'center',width:"80%",mx:'auto'}}
>
<Slide direction="right" in="true" mountOnEnter unmountOnExit>
  <div>
  <Stack
  direction={{ xs: 'column', sm: 'column' }}
  // divider={<Divider orientation="vertical" flexItem />}
  
  spacing={0}
>
  <Typography  variant="h1" style={{
    opacity:1.2,

    color:'#fafafa',
    fontFamily:'Mogra',
    
  }}>Hi, I'm</Typography>
  <Typography variant="h1" style={{
    opacity:1.2,
    display:'block',
    width:'24rem',
    backgroundColor:'#212121',
    color:'#ff5722',
    fontFamily:'Mogra',
    
  }}>Sajag Agrawal</Typography>
  <Typography variant="h1" style={{
    opacity:1.2,
    
    color:'#fafafa',
    fontFamily:'Mogra',
    
  }}>A Passionate Developer + Creative Geek</Typography>
</Stack>
  </div>
</Slide>
<Slide direction="left" in="true" mountOnEnter unmountOnExit>
  <div>
    <img src={Sajag2} className="image"/>
  </div>
  </Slide>
</Stack>
 </ThemeProvider> 
</Stack>
          {/* <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
  <Item>Item 3</Item>
</Stack> */}
       
       {/* <Stack sx={{mx:'auto',alignItems: 'center'}} direction="row" spacing={2}>
  <Item>Item 1</Item>
  <Item>Item 2</Item>
</Stack> */}
<Stack
  spacing={{ xs: 1, sm: 2 }}
  direction="row"
  useFlexGap
  sx={{ minWidth: 0,flexWrap: 'wrap' }}
>
       <Stack sx={{my:`${ht}px`,mx:'auto'}} direction="row">
   <Stack sx={{alignItems:'center'}} direction="row" spacing={2}>
   <Button variant="contained" sx={{backgroundColor:'#121212',color:'#ff5722',height:'3rem',fontFamily:'Mogra',fontWeight:700,fontSize:'1.5rem'}} endIcon={<SouthSharpIcon />}>
        Scroll Down
      </Button>
  
</Stack> 
</Stack>
</Stack>
       </div> 
      </Stack>
    </div>
    </>
  );
}
