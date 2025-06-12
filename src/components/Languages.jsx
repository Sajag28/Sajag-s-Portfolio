import {useState} from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import c from '../assets/C++.png'
import java from '../assets/Java.png'
import python from '../assets/python3.png'
import './language.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const theme = createTheme({
    components: {
      MuiStack: {
        defaultProps: {
          useFlexGap: true,
        },
      },
    },
  });

export default function DirectionStack() {
  return (
    <div>
      <Stack sx={{my:10,width:"70%",mx:'auto'}}direction="column" spacing={2}>
         <ThemeProvider theme={theme}>
         <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-start",
    alignItems: "center"
  }}
>
    <img src={c} className="lang"/>
    <Box sx={{ '& > legend': { mt: 2 } }}>
    <Typography component="legend" style={{color:'#ff5722',fontSize:'1.5rem',fontFamily:'Mogra'}}>Profiency I have in C++</Typography>
    
    <Rating name="read-only" value={4} readOnly />
    </Box>
    </Stack>
         </ThemeProvider>
         <ThemeProvider theme={theme}>
         <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center"
  }}
>
     <img src={python} className="lang"/>
    <Box sx={{ '& > legend': { mt: 2 } }}>
    <Typography component="legend" style={{color:'#ff5722',fontSize:'1.5rem',fontFamily:'Mogra'}}>Profiency I have in Python </Typography>
    
    
    <Rating name="read-only" value={4} readOnly />
    </Box>
    
    </Stack>
         </ThemeProvider>
        <ThemeProvider theme={theme}>
         <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "flex-end",
    alignItems: "center"
  
  }}
>
    <img src={java} className="lang"/>
    <Box sx={{ '& > legend': { mt: 2 } }}>
    <Typography component="legend" style={{color:'#ff5722',fontSize:'1.5rem',fontFamily:'Mogra'}}>Profiency I have in Java </Typography>
    
    <Rating name="read-only" value={3} readOnly />
    </Box>
    </Stack>
         </ThemeProvider>
      </Stack>
    </div>
  );
}