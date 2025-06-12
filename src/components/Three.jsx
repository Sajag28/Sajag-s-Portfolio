import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import dev1 from '../assets/dev1.png'
import dev2 from '../assets/dev2.png'
import dev3 from '../assets/dev3.png'
import './Three.css'
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
export default function Three() {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{my:10}}>
        
<Stack
  direction="row"
  spacing={2}
  sx={{
    justifyContent: "space-evenly",
    alignItems: "center",
    width:"80%",
    mx:'auto'
  }}
>
    <img src={dev1} className="dev1" alt="dev1" />
    <Typography variant="h1" style={{color:'#ff5722',fontFamily:'Akronim',textAlign:'center',letterSpacing:'.4rem',}}>CRAFTING INNOVATIVE SOLUTIONS, ONE LINE OF CODE AT A TIME </Typography>
    {/* <img src={dev2} className="dev1" alt="dev2" />
    <img src={dev3} className="dev1" alt="dev3" /> */}
</Stack>
        </Stack> {/* uses flexbox gap by default */}
    </ThemeProvider>
  );
}
