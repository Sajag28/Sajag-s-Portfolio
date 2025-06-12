import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import { createTheme, responsiveFontSizes,ThemeProvider } from '@mui/material/styles'
import { Typography } from '@mui/material';


export default function Lang(){
const theme = createTheme();
    theme.typography.h1 = {
        fontSize: '1.5rem',
        '@media (min-width:600px)': {
          fontSize: '1.8rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '3rem',
        },
      };
return(
<ThemeProvider theme={theme}>
<Stack
  spacing={{ xs: 1, sm: 2 }}
  direction={{xs:'column',sm:'column',md:'row'}}
  useFlexGap
  sx={{ my:5,minWidth: 0,flexWrap: 'wrap' }}
>
       <Stack sx={{my:2,mx:'auto'}} direction="row">
   <Stack sx={{alignItems:'center'}} direction="row" spacing={2}>
  <Typography variant="h1" style={{boxShadow:' 6px 6px 6px 2px #ff5722 ',backgroundColor:'#121212',color:'#ff5722',letterSpacing: '.4rem',fontFamily:'Mogra',border:'2px solid #ff5722',borderRadius:'10px' }}>LANGUAGES I WORK WITH</Typography>
</Stack> 
</Stack>
</Stack>
</ThemeProvider>
)
}