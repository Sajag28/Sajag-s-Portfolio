import exper from '../assets/exper3.jpg'
import Navbar from './Navbar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Zoom from '@mui/material/Zoom';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import down from '../assets/downar.png'
import * as React from 'react';
import {useState,useEffect,useRef} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import exper1 from '../assets/exper1.jpg'
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Footer from './Footer.jsx';
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
    '@media (max-width:600px)': {
      fontSize: '0.7rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
    
  };
  theme.typography.h3 = {
    fontSize: '1.0rem',
    '@media (min-width:600px)': {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
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
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  const card1 = (
    <React.Fragment>
      <CardContent>
       
<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>

 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>IT TRAINING INTERN</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>VEHICLE FACTORY JABALPUR</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>AVNL, MINISTRY OF DEFENCE</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>JUN 2024-JULY 2024</Typography>
 <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#121212',mt:0,letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}>DESCRIPTION OF THE WORK</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" sx={{fontFamily:'Poppins',color:'#121212',mt:0,borderRadius:'15px'}} style={{textAlign:'center'}}>
            I worked as a IT training intern at Vehicle Factory Jabalpur. I worked on various projects focusing on the IT infrastructure of the factory. I have worked on various technologies including HTML,CSS, Javascript, PHP,SQL Database to make temporary deputation of employees for confidential work for security reasons.
          </Typography>
        </AccordionDetails>
      </Accordion>

</Stack>
      </CardContent>
    </React.Fragment>
  );
  const card = (
    <React.Fragment>
      <CardContent>
       
<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>

 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>BACKEND DEVELOPER INTERN</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>SOWTECH</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>MAR 2024-SEP 2024</Typography>
 <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#121212',mt:0,letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}>DESCRIPTION OF THE WORK</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" sx={{fontFamily:'Poppins',color:'#121212',mt:0,borderRadius:'15px'}} style={{textAlign:'center'}}>
          At Sowtech I worked as a Backend Developer Intern . My role was to assist the team in developing and maintaining the backend of the company's web application plus I worked majorly on outsource project where I worked on backend part of the project based on creating an automated call server using Twilio, Speech-to-text and Text-to-speech API's , primarily Whisper AI and Eleven Labs, used Open AI-GPT4 model, also leveraged Document based processing to toggle between automated mode of answer delivery and human mode of answer delivery to connect further.
          </Typography>
        </AccordionDetails>
      </Accordion>

</Stack>
      </CardContent>
    </React.Fragment>
  );
  const card2 = (
    <React.Fragment>
      <CardContent>
       
<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>

 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>GLOBAL INVESTORS FORUM</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>TECHNICAL CONTENT WRITER</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>MAY 2024-JUL 2024</Typography>
 <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#121212',mt:0,letterSpacing:'.2rem',borderRadius:'15px'}}>DESCRIPTION OF THE WORK</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" sx={{fontFamily:'Poppins',color:'#121212',mt:0,borderRadius:'15px'}} style={{textAlign:'center'}}>
           Worked on development of the content of the different companies to extract the relevant info related to their work and their application of AI/ML,IOT into their project tech stack for short listing them for AI Summit.
          </Typography>
        </AccordionDetails>
      </Accordion>

</Stack>
      </CardContent>
    </React.Fragment>
  );
  
  const card3 = (
    <React.Fragment>
      <CardContent>
       
<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>

 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>GPT INNOVATIONS</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>FULL STACK DEVELOPER INTERN</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:0,letterSpacing:'.4rem'}}>AUG 2023-OCT 2023</Typography>
 <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#121212',mt:0,letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}>DESCRIPTION OF THE WORK</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" sx={{fontFamily:'Poppins',color:'#121212',mt:0,borderRadius:'15px'}} style={{textAlign:'center'}}>
            Worked over Full Stack project based upon the usage of React Js, Firebase and Django for creating company's outsource projects.
          </Typography>
        </AccordionDetails>
      </Accordion>

</Stack>
      </CardContent>
    </React.Fragment>
  );
  
export default function Experience(){
    const targetRef = useRef(null);
    var [ht,setHt]=useState(60)
    const [checked, setChecked] = useState(false);
    const handleScroll = () => {
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
      setChecked((prev) => !prev);
    };
  
    useEffect(() => {
      const height=setInterval(()=>{setHt(ht=>(ht===60? 100 : 60))},500)
      return () => {
        clearInterval(height)
      }
    },[])
    return(
        <>
        <Navbar />
        <div style={{
                backgroundImage: `url(${exper})`,
                backgroundSize: 'contain',
                backgroundPosition: '50% 0%',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                width: '100%',
              }} >
       <ThemeProvider theme={theme}>
      <Stack>
        
<Stack
  direction="column"
  spacing={6}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Slide direction="up" in="true" mountOnEnter unmountOnExit>
<Typography variant="h1" component="div" sx={{fontFamily:'Mogra',color:'#fafafa',mt:10,letterSpacing:'.8rem',borderRadius:'15px'}} style={{textAlign:'center'}}>MY DEV EXPERIENCE</Typography>

</Slide>
<Stack direction="column"
  spacing={2}
  sx={{
    mt:10,
    justifyContent: "center",
    alignItems: "center",
  }}>
<Zoom in="true"><Button onClick={handleScroll} variant="contained" sx={{height:'5rem'}}><Typography variant="h3" component="div" onClick={handleScroll} sx={{fontFamily:'Mogra',color:'#fafafa',borderRadius:'15px'}} style={{textAlign:'center'}}>CLICK HERE AND SCROLL DOWN</Typography></Button>
</Zoom>
<img style={{marginTop:`${ht}px`}}src={`${down}`} height="100px" width="100px"/>
</Stack>

</Stack>
        </Stack>
        
  <Stack>
    </Stack> {/* uses flexbox gap by default */}
    </ThemeProvider>
    
        </div> 
        <ThemeProvider theme={theme}>
        <Stack ref={targetRef}>
        <Stack
  direction={{xs:'row',sm:'row',md:'row'}}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    width:"60%",
    my:10,
    mx:'auto'
  }}
  spacing={4}
>

<Slide direction="left" in={checked} mountOnEnter unmountOnExit>
  <Stack direction="column" spacing={4}>
  
  <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined" sx={{backgroundColor:'#121212',height:'32rem',width:'100%',border:'2px solid #ff5722',borderRadius:'15px'}}>{card}</Card>
    </Box>
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined" sx={{backgroundColor:'#121212',height:'30rem',width:'100%',border:'2px solid #ff5722',borderRadius:'15px'}}>{card1}</Card>
    </Box>
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined" sx={{backgroundColor:'#121212',height:'25rem',width:'100%',border:'2px solid #ff5722',borderRadius:'15px'}}>{card2}</Card>
    </Box>
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined" sx={{backgroundColor:'#121212',height:'25rem',width:'100%',border:'2px solid #ff5722',borderRadius:'15px'}}>{card3}</Card>
    </Box>
  </Stack>
  </Slide>
  </Stack>
        </Stack>
        </ThemeProvider>
        <Footer />
        </>
    )
    
}