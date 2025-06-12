import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});
theme.typography.h1 = {
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.2rem',
    },
  };

export default function Reach() {
  const [c1,setc1]=useState('#ff5722')
  const [c2,setc2]=useState('#121212')
  useEffect(
    ()=>{
     const interval=setInterval(()=>{
        setc1((c1)=>(c1==='#ff5722' ? '#121212' : '#ff5722'))
        setc2((c2)=>(c2==='#121212' ? '#ff5722' : '#121212'))
    },1000)
     return () => clearInterval(interval);
    },[]
  )
  return (
    <div>
    <ThemeProvider theme={theme}>
      <Stack>
      <Stack
  direction="row"
  spacing={4}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    mx:'auto',
    width:'80%',
  }}

>

<Typography variant="h1" style={{color:'#ff5722',fontFamily:'Akronim',textAlign:'center',boxShadow: '0 0 50px #ff5722',border:'2px solid #ff5722',letterSpacing:'.4rem',borderRadius:'20px'}}>REACH OUT TO ME </Typography>
<div>

<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>    
    <div style={{backgroundColor:`${c1}`,width:'100%',borderRadius:'40px'}}>
    <Typography variant="h1" style={{color:`${c2}`,textAlign:'center',fontFamily:'Akronim'}}>WEBSITE DEVELOPMENT</Typography>
    </div>
    <div style={{backgroundColor:`${c2}`,width:'100%',borderRadius:'40px'}}>
    <Typography variant="h1" style={{color:`${c1}`,textAlign:'center',fontFamily:'Akronim'}}>MACHINE LEARNING AND AI PROJECTS</Typography>
    </div>
    <div style={{backgroundColor:`${c1}`,width:'100%',borderRadius:'40px'}}>
    <Typography variant="h1" style={{color:`${c2}`,textAlign:'center',fontFamily:'Akronim'}}>LLM APPLICATION PROJECTS</Typography>
    </div>
    <div style={{backgroundColor:`${c2}`,width:'100%',borderRadius:'40px'}}>
    <Typography variant="h1" style={{color:`${c1}`,textAlign:'center',fontFamily:'Akronim'}}>TECHNICAL BLOGGING AND CONTENT WRITING</Typography>
    </div>
</Stack>
</div>
    </Stack>
        </Stack> {/* uses flexbox gap by default */}
    </ThemeProvider>
    </div>
  );
}