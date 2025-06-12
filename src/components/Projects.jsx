import project from '../assets/project2.jpg'
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
import img1 from '../assets/Cap1.jpeg'
import img2 from '../assets/Cap2.jpeg'
import img3 from '../assets/Cap3.jpeg'
import img4 from '../assets/Cap4.jpeg'
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

 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:2}}>Doctor Connect Portal</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa'}}>Patient's Records Manager</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa'}}>Plus Doctor Appointment Manager</Typography> 
 <Accordion >
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#121212',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}>CLICK HERE FOR PROJECT DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" sx={{fontFamily:'Poppins',color:'#121212',mt:0,borderRadius:'15px',overflow:'scroll'}} style={{textAlign:'center'}}>
          The platform provides a secure patient portal for user authentication, profile management, appointment
booking, and access to electronic health records (EHR). Doctors can manage availability, view scheduled
appointments, and update patient records. The appointment system supports booking, rescheduling, and
cancellation with concurrency handling to prevent double bookings. Automated email notifications ensure
patients receive timely reminders and confirmations. The system ensures data security with JWT
authentication and utilizes an intuitive, responsive UI for a seamless experience. The project is built with React.js, React Router-Dom, and Material UI for the frontend, while the backend
uses Django Rest Framework (DRF) with Django ORM and MongoDB Atlas/PostgreSQL for secure data
handling. Celery + Redis handles background tasks such as email notifications and async processing. JWT
authentication ensures secure user access.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Button  variant="contained" sx={{height:'5rem',backgroundColor:'#ff5722'}}><Typography variant="h3" component="div"  sx={{fontFamily:'Mogra',color:'#fafafa',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}} onClick={()=>{window.location.href="https://github.com/Sajag28/Doctor_Connect_Frontend.git"}}>Github Frontend</Typography></Button>
<Button  variant="contained" sx={{height:'5rem',backgroundColor:'#ff5722'}}><Typography variant="h3" component="div"  sx={{fontFamily:'Mogra',color:'#fafafa',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}} onClick={()=>{window.location.href="https://github.com/Sajag28/Doctor_Connect_Backend.git"}}>Github Backend</Typography></Button>
</Stack>
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

 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:2}}>AIMED Website + Chatbot</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa'}}>1st Position IEEE EDS Electra</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa'}}>VIT VELLORE</Typography>
 <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#121212',mt:0,letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}>CLICK HERE FOR PROJECT DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" sx={{fontFamily:'Poppins',color:'#121212',mt:0,borderRadius:'15px'}} style={{textAlign:'center'}}>
          Developed AIMED, a feature-rich medical website (reached the semi-finals at ISTE VIT VELLORE, TECHNICA Hackathon) built with React JS, DaisyUI, Appwrite (Backend-as-a-Service), and Tailwind CSS. The user-friendly interface empowers patients to schedule doctor appointments, purchase medications
through an e-commerce store, and stay informed with a blog section featuring daily posts from doctors. Additionally, secure login and signup functionalities ensure user privacy and manage account information. To complement AIMED functionalities, an interactive chatbot was implemented using Google Dialog flow, Django Backend, Pandas, Decision Trees Classification algorithm, and Ngrok Tunneling. This chatbot
diagnoses patients requiring immediate attention when ambulance response time might be critical. By
considering age, gender, medical history, and symptoms related to heart, lungs, abdomen, and skin, the
chatbot assesses the severity of the problem and suggests appropriate remedies. This integration
enhances accessibility to basic medical guidance in urgent situations.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Button  variant="contained" sx={{height:'5rem',backgroundColor:'#ff5722'}}><Typography variant="h3" component="div"  sx={{fontFamily:'Mogra',color:'#fafafa',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}} onClick={()=>{window.location.href="https://github.com/Akshat-Kumar-X/EasyDoc.git"}}>Github Frontend</Typography></Button>
<Button  variant="contained" sx={{height:'5rem',backgroundColor:'#ff5722'}}><Typography variant="h3" component="div"  sx={{fontFamily:'Mogra',color:'#fafafa',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}} onClick={()=>{window.location.href="https://github.com/Sajag28/try.git"}}>Github Backend</Typography></Button>
</Stack>
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

 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:2}}>Backend Django Based Model</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa'}}>For Confidence Assessment</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa'}}>GDSC VIT Vellore Hackathon</Typography>
 
 <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#121212',mt:0,letterSpacing:'.2rem',borderRadius:'15px',textAlign:'center'}}>CLICK HERE FOR PROJECT DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" sx={{fontFamily:'Poppins',color:'#121212',mt:0,borderRadius:'15px'}} style={{textAlign:'center'}}>
          Developed the Django-based backend for a confidence assessment and mentorship allocation system (final
round, GDSC Women in Tech Hackathon - Top 8 out of 60 teams). The system integrates with a Google
Dialog flow bot for user interaction and connects to an NLP module for analyzing student responses and
generating confidence scores. Furthermore, it leverages a mentor pool and email notification system
(utilizing SMTP) to assign mentors to students requiring additional support for re-exams. This project
showcases expertise in Django development, NLP integration, and API creation for chatbot interaction
within a confidence assessment portal.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Button  variant="contained" sx={{height:'5rem',backgroundColor:'#ff5722'}}><Typography variant="h3" component="div"  sx={{fontFamily:'Mogra',color:'#fafafa',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}onClick={()=>{window.location.href="https://github.com/Sajag28/alley_vate_backend.git"}}>Github</Typography></Button>

</Stack>
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

 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:2}}>Store Item Gnenerator</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa'}}>Using Langchain</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa'}}>And LLM</Typography>

 <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#121212',mt:0,letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}>CLICK HERE FOR PROJECT DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" sx={{fontFamily:'Poppins',color:'#121212',mt:0,borderRadius:'15px'}} style={{textAlign:'center'}}>
          This project showcases a web application that combines the strengths of Streamlit for a user-friendly interface and LangChain for powerful LLM (Large Language Model) interactions with OpenAI's GPT-3.5 Turbo model. It allows users to easily provide prompts and receive tailored generative text responses.
What You'll Find:
Frontend: A clean and intuitive web interface built with Streamlit, offering input fields, buttons, and other UI elements for user interaction. Backend: A LangChain application connected to OpenAI's GPT-3.5 Turbo model, handling prompt processing, LLM execution, and result retrieval. Flexibility: Potential for customization to different applications and prompt types. Collaboration: Ability to share the app easily with others. Getting Started:
Prerequisites:
Python 3.x Streamlit LangChain OpenAI API key Install dependencies:
Technical Overview:
Streamlit: Handles user input, displays results, and manages the front-end interaction. LangChain: Orchestrates the LLM pipeline, including prompt construction, API calls, and response processing. OpenAI API: Grants access to the GPT-3.5 Turbo model for generating text based on prompts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Button  variant="contained" sx={{height:'5rem',backgroundColor:'#ff5722'}}><Typography variant="h3" component="div"  sx={{fontFamily:'Mogra',color:'#fafafa',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}onClick={()=>{window.location.href="https://github.com/Sajag28/Store-Item-Generator-Using-LLM.git"}}>Github</Typography></Button>

</Stack>
</Stack>
      </CardContent>
    </React.Fragment>
  );
const card4 = (
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

 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa',mt:2}}>Smart Airport Security & Ticketing System </Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa'}}>with AI, IoT</Typography>
 <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#fafafa'}}>QR-Based Access Control</Typography>

 <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3" sx={{fontFamily:'Poppins',color:'#121212',mt:0,letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}>CLICK HERE FOR PROJECT DETAILS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h4" sx={{fontFamily:'Poppins',color:'#121212',mt:0,borderRadius:'15px'}} style={{textAlign:'center'}}>
          Developed an AI and IoT-powered airport/train station security system using Python, Django, React.js, MongoDB Atlas, and ESP32 with RC522 RFID, focused on enhancing identity verification and crowd safety. The system includes RFID-based entry/exit logging, a Decision Tree ML model for real-time crowd monitoring and stampede prediction, and ML-based filtering to detect fake names and emails. It verifies geolocation using IP checks via Geocoder, and restricts access if discrepancies are found, followed by a multi-layered security process involving QR scanning, security questions, and fingerprint authentication for staff. Features also include ticket booking, rescheduling, and cancellation with OTP verification via Brevo, downloadable travel PDFs, unauthorized access alerts, and real-time WhatsApp support. The React + Material UI frontend ensures a responsive user experience while backend logic integrates safety, access control, and communication seamlessly.
          </Typography>
        </AccordionDetails>
      </Accordion>

<Stack
  direction={{xs:'column',sm:'column',md:'row'}}
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>

<img src={img1} height="150px" width="250px"/>
<img src={img2} height="150px" width="250px"/>


</Stack>
<Stack
  direction={{xs:'column',sm:'column',md:'row'}}
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <img src={img3} height="150px" width="250px"/>
<img src={img4} height="150px" width="220px"/>
</Stack>
      <Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>
<Button  variant="contained" sx={{height:'5rem',backgroundColor:'#ff5722'}}><Typography variant="h3" component="div"  sx={{fontFamily:'Mogra',color:'#fafafa',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}} onClick={()=>{window.location.href="https://github.com/Sajag28/SafeFlight_Frontend.git"}}>Github Frontend</Typography></Button>
<Button  variant="contained" sx={{height:'5rem',backgroundColor:'#ff5722'}}><Typography variant="h3" component="div"  sx={{fontFamily:'Mogra',color:'#fafafa',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}onClick={()=>{window.location.href="https://github.com/Sajag28/FlightPortal_backend.git"}}>Github Backend</Typography></Button>
<Button  variant="contained" sx={{height:'5rem',backgroundColor:'#ff5722'}}><Typography variant="h3" component="div"  sx={{fontFamily:'Mogra',color:'#fafafa',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}} onClick={()=>{window.location.href="https://uploadnow.io/en/share?utm_source=CkMsvQm"}}>IOT Video Demo</Typography></Button>

</Stack>
</Stack>
      </CardContent>
    </React.Fragment>
  );
export default function Experience(){
    const targetRef = useRef(null);
    var [ht,setHt]=useState(30)
    const [checked, setChecked] = useState(false);
    const [view,setView]=useState(false);
    const handleScroll = () => {
      targetRef.current?.scrollIntoView({ behavior: "smooth" });
      setChecked((prev) => !prev);
    };
  
    useEffect(() => {
      setTimeout(()=>{setView(true)},500)
      const height=setInterval(()=>{setHt(ht=>(ht===30? 70 : 30))},500)
      return () => {
        clearInterval(height)
      }
    },[])
    return(
        <>
        <Navbar />
        <div style={{
                backgroundImage: `url(${project})`,
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
<Slide direction="right" in="true" mountOnEnter unmountOnExit>
<Typography variant="h1" component="div" sx={{fontFamily:'Mogra',color:'#fafafa',mt:10,letterSpacing:'.8rem',borderRadius:'15px',backgroundColor:'#121212'}} style={{textAlign:'center'}}>MY PROJECTS WORK</Typography>

</Slide>
<Stack direction="column"
  spacing={2}
  sx={{
    mt:15,
    justifyContent: "center",
    alignItems: "center",
  }}>
<Zoom in={view}><Button onClick={handleScroll} variant="contained" sx={{height:'5rem',backgroundColor:'#121212'}}><Typography variant="h3" component="div" onClick={handleScroll} sx={{fontFamily:'Mogra',color:'#fafafa',letterSpacing:'.2rem',borderRadius:'15px'}} style={{textAlign:'center'}}>Click Here & Scroll Down</Typography></Button>
</Zoom>
<img style={{marginTop:`${ht}px`}} src={`${down}`} height="100px" width="100px"/>

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
  <Stack direction={{xs:'column',sm:'column',md:'row'}} spacing={2}>
  <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined" sx={{backgroundColor:'#121212',height:'28rem',width:'100%',border:'2px solid #ff5722',borderRadius:'15px',overflow:'scroll'}}>{card}</Card>
    </Box>
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined" sx={{backgroundColor:'#121212',height:'28rem',width:'100%',border:'2px solid #ff5722',borderRadius:'15px',overflow:'scroll'}}>{card1}</Card>
    </Box>
    </Stack>
    <Stack direction={{xs:'column',sm:'column',md:'row'}} spacing={2}>
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined" sx={{backgroundColor:'#121212',height:'28rem',width:'100%',border:'2px solid #ff5722',borderRadius:'15px',overflow:'scroll'}}>{card2}</Card>
    </Box>
    <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined" sx={{backgroundColor:'#121212',height:'28rem',width:'100%',border:'2px solid #ff5722',borderRadius:'15px',overflow:'scroll'}}>{card3}</Card>
    </Box>
    
    </Stack>
    <Stack direction={{xs:'column',sm:'column',md:'row'}} spacing={2}>
       <Box sx={{ minWidth: 500 }}>
      <Card variant="outlined" sx={{backgroundColor:'#121212',height:'28rem',width:'100%',border:'2px solid #ff5722',borderRadius:'15px',overflow:'scroll'}}>{card4}</Card>
    </Box>
    </Stack>
  </Stack>
  </Slide>
  </Stack>
        </Stack>
        </ThemeProvider>
        <Footer/>
        </>
    )
    
}