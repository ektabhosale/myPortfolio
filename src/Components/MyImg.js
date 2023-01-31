import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import img from '../Asset/EktaPic.jpeg'; 

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);


  return (
   <Box>
    <img style={{margin:"20% 20% 20% -50%"}} src={img} width={"60%"} height={"60%"}/>

   </Box>
  );
}