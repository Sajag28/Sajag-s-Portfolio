import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import log from '../assets/Dev_Logo.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import AppleIcon from '@mui/icons-material/Apple';
import foot_img from '../assets/footer4.jpg';
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
    fontSize: '1.5rem',
    '@media (min-width:600px)': {
      fontSize: '1.8rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
  };
theme.typography.h5 = {
    fontSize: '0.8rem',
    '@media (min-width:600px)': {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4rem',
    },
  };
export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{mt:5,border:'0.2px solid #ff5722'}} >
        


<Stack
  direction={{ xs: "column", sm: "row", md : "row" }}
  spacing={2}
  sx={{
    justifyContent: "space-around",
    alignItems: "center",
    mt: 2,
    mb:2
  }}
>
  <img src={log} height="150px" weight="150px"/>
  <img src={foot_img} height="150px" weight="150px" style={{borderRadius:'50%'}}/>
<Stack
  direction="column"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>

<Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
>

  <Typography variant="h4" sx={{color:"#ff5722",letterSpacing:'.2rem'}}>Connect with me</Typography>
<LinkedInIcon sx={{color:"#fafafa"}} fontSize="large" onClick={()=>{window.location.href="https://www.linkedin.com/in/sajag-agrawal-6668a8214/"}}/>
<GitHubIcon  sx={{color:"#fafafa"}} fontSize="large" onClick={()=>{window.location.href="https://github.com/Sajag28"}}/>
<EmailIcon sx={{color:"#fafafa"}} fontSize="large" onClick={()=>{window.location.href="mailto:devbysajag@gmail.com"}}/>
<WhatsAppIcon sx={{color:"#fafafa"}} fontSize="large" onClick={()=>{window.location.href="https://wa.me/919361156481"}}/>
<XIcon sx={{color:"#fafafa"}} fontSize="large" onClick={()=>{window.location.href="https://x.com/agrawalsajag438"}}/>
<AppleIcon sx={{color:"#fafafa"}} fontSize="large" onClick={()=>{window.location.href="https://apps.apple.com/in/app/sajags-portfolio/id1738706260"}}/>
</Stack>
<Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}
> 
<Typography variant="h5" sx={{color:"#ff5722",letterSpacing:'.2rem'}}>Email - devbysajag@gmail.com</Typography>
<Typography variant="h5" sx={{color:"#ff5722",letterSpacing:'.2rem'}}>Contact no +91-9361156481</Typography>

</Stack>
<Typography variant="h5" sx={{color:"#ff5722",letterSpacing:'.2rem'}}>© 2025 Sajag Agrawal</Typography>
</Stack>
</Stack>

<Stack
  direction="row"
  spacing={0}
  sx={{
    justifyContent: "center",
    alignItems: "center",
    mx:'auto',
  }}
>


</Stack>

        
        </Stack> {/* uses flexbox gap by default */}
    </ThemeProvider>
  );
}
