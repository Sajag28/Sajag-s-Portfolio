import * as React from 'react';
import Navbar from './Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import HighSchool from '../assets/high-school.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import gov from '../assets/government.png'
import jsss2 from '../assets/jsss2.png'
import vit from '../assets/vit.png'
import './Education.css'
import edu from '../assets/edu3.jpg'
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import Collapse from '@mui/material/Collapse';
import Footer from './Footer.jsx';
const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
      <svg>
        <Box
          component="polygon"
          points="0,100 50,00, 100,100"
          sx={(theme) => ({
            fill: theme.palette.common.white,
            stroke: theme.palette.divider,
            strokeWidth: 1,
          })}
        />
      </svg>
    </Paper>
  );
  
const theme = createTheme({
    components: {
      MuiStack: {
        defaultProps: {
          useFlexGap: true,
        },
      },
    },
    
  });
  theme.typography.h4 = {
    fontSize: '1.0rem',
    '@media (min-width:600px)': {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.0rem',
    },
  };
  theme.typography.h1 = {
    fontSize: '1.7rem',
    '@media (min-width:600px)': {
      fontSize: '1.7rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3.5rem',
    },
  };
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx:10, transform: 'scale(0.8)',backgroundColor:'#fafafa' } }
    >
      •
    </Box>
  );
  const card = (
    <React.Fragment  >
      <CardContent>
      <ThemeProvider theme={theme}><Stack>
    <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
> <img src={vit} height="100px" width="100px"/>

<Stack direction="column" spacing={2}>
        <Typography variant="h4" component="div" sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>
          VELLORE INSTITUTE OF TECHNOLOGY
        </Typography>
        <Typography variant="h4" component="div"  sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>
          B.Tech CSE Spec. in IOT
        </Typography>
        <Typography variant="h4" component="div"  sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>JUL 2021 - JULY 2025</Typography>
        <Typography variant="h4" component="div"  sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>
          CGPA:8.74/10.00
        </Typography>
        </Stack>
        </Stack>
        </Stack>
        </ThemeProvider>
      </CardContent>
    </React.Fragment>
  );
  const card1 = (
    <React.Fragment  >
      <CardContent>
      <ThemeProvider theme={theme}><Stack>
    <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
> <img src={jsss2} height="100px" width="100px"/>
<Stack direction="column" spacing={2}>
        <Typography variant="h4" component="div" sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>
          JOY SENIOR SECONDARY SCHOOL
        </Typography>
        <Typography variant="h4" component="div" sx={{fontFamily:'Mogra'}}  style={{textAlign:'center'}}>
          CBSE XII PCM
        </Typography>
        <Typography variant="h4" component="div" sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>MAR 2020 - MAY 2021</Typography>
        <Typography variant="h4" component="div" sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>
          PERCENTAGE:86.8%
        </Typography>
        </Stack>
        </Stack>
        </Stack>
        </ThemeProvider>
      </CardContent>
    </React.Fragment>
  );
  const card2 = (
    <React.Fragment  >
    <CardContent>
    <ThemeProvider theme={theme}><Stack>
  <Stack
direction="row"
spacing={2}
sx={{
  justifyContent: "center",
  alignItems: "center",
}}
> <img src={jsss2} height="100px" width="100px"/>
<Stack direction="column" spacing={2}>
      <Typography variant="h4" component="div" sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>
        JOY SENIOR SECONDARY SCHOOL
      </Typography>
      <Typography variant="h4" component="div" sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>
        CBSE X
      </Typography>
      <Typography variant="h4" component="div" sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>MAR 2018- MAY 2019</Typography>
      <Typography variant="h4" component="div" sx={{fontFamily:'Mogra'}} style={{textAlign:'center'}}>
        PERCENTAGE: 89.4%
      </Typography>
      </Stack>
      </Stack>
      </Stack>
      </ThemeProvider>
    </CardContent>
  </React.Fragment>
  );


export default function Education() {
    const [checked, setChecked] = React.useState(false);

    React.useEffect(()=>{
        setChecked(true);
        console.log("Checked is: ", checked);
    }

    )
  return (
    <>
    <Navbar/>
    <div>
    <ThemeProvider theme={theme}>
    <Stack>
    <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Slide direction="down" in="true" mountOnEnter unmountOnExit>
<Typography variant="h1" component="div" sx={{fontFamily:'Mogra',color:'#ff5722',mt:10,letterSpacing:'.8rem',boxShadow: '0 0 50px #ff5722',border:'2px solid #ff5722',borderRadius:'15px'}} style={{textAlign:'center'}}>MY EDUCATION BACKGROUND</Typography>
</Slide>
  </Stack>
    </Stack>
      </ThemeProvider>
    <ThemeProvider theme={theme}>
      <Stack sx={{mt:15,width:"100%",mx:'auto'}}>
        
<Stack
  direction={{xs:'row',sm:'',md:'row'}}
  spacing={6}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
<img src={HighSchool} className="im" height='400px' width='400px'/> 
<Slide direction="up" in="true" mountOnEnter unmountOnExit>
<Stack
        direction="column"
        spacing={4}
        className="scrollable-container"
      >
        
        <Box sx={{ minWidth: 200 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
    <Box sx={{ minWidth: 200}}>
      <Card variant="outlined">{card1}</Card>
    </Box>
    <Box sx={{ minWidth: 200 }}>
      <Card variant="outlined">{card2}</Card>
    </Box>
      </Stack>
</Slide>
</Stack>
        </Stack> {/* uses flexbox gap by default */}
    </ThemeProvider>

    </div>
    <Footer/>
    {/* <Box sx={{ height: 180, width: 130, position: 'relative', zIndex: 1 }}>
     <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
     {icon}
   </Slide>
    </Box> */}
    </>
  );
}
