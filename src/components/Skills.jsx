import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import Sajag3 from '../assets/Sajag3.jpeg'
import Sajag4 from '../assets/Sajag4.jpeg'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Skills.css'
import Javascript from '../assets/JavaScript-Logo.png'
import numpy from '../assets/numpy.png'
import pandas from '../assets/pandas.png'
import python from '../assets/python3.png'
import django from '../assets/django.png'
import tensorflow from '../assets/tensorflow.png'
import mongo from '../assets/mongo.png'
import react from '../assets/react.png'
import postgres from '../assets/Postgres.png'
import node from '../assets/node.png'
import ngrok from '../assets/ngrok.png'
import java from '../assets/java.png'
import { useInView } from "react-intersection-observer";
import matplotlib from '../assets/matplotlib.png'
import scikit from '../assets/scikit.png'
import fastapi from '../assets/fastapi.png'
import git from '../assets/git.png'
export default function StandardImageList() {
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
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1,   // Percentage of visibility before triggering
  });
  console.log('Component in view:', inView);
  return (   
<>
<Stack 
  spacing={{ xs: 1, sm: 2 }}
  direction="column"
  useFlexGap
  sx={{ minWidth: 0,flexWrap: 'wrap' }}
>
<Stack sx={{my:2,mx:'auto'}} direction="row">
<Stack sx={{alignItems:'center'}} direction="row" spacing={6}>
  <img  src={Javascript} className="sk" id="s1"/>
  <img  src={numpy} className="sk" id="s1" />
  <img  src={pandas} className="sk" id="s1" />
  <img  src={tensorflow} className="sk" id="s1" />
  
  </Stack>
  
  </Stack>
  <Stack sx={{my:2,mx:'auto'}} direction="row">
<Stack sx={{alignItems:'center'}} direction="row" spacing={6}>
<img className="sk" id="s1" src={django}/>
<img className="sk" id="s1" src={python}/>
<img  src={mongo} className="sk"  id="s1" />
<img  src={postgres} className="sk" id="s1" />
  </Stack>
  
  </Stack>
  <Stack sx={{my:2,mx:'auto'}} direction="row">
<Stack sx={{alignItems:'center'}} direction="row" spacing={6}>
<img className="sk" id="s1" src={react}/>
<img className="sk" id="s1" src={node}/>
<img  src={ngrok} id="s1" className="sk" />
<img  src={java} id="s1"className="sk" />
  </Stack>
  
  </Stack>
  <Stack sx={{my:2,mx:'auto'}} direction="row">
<Stack sx={{alignItems:'center'}} direction="row" spacing={6}>
<img className="sk" id="s1" src={git}/>
<img className="sk" id="s1" src={fastapi}/>
<img  src={scikit} id="s1" className="sk" />
<img  src={matplotlib} id="s1"className="sk" />
  </Stack>
  
  </Stack>
</Stack>

</>
)
}