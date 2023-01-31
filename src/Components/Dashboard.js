import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sider from "./Slider"
import MyImg from "./MyImg"
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    
      <Grid container>
        <Grid height={"100%"} item xs={9} md={9}  >
          <Box style={{backgroundColor:"#4730d3"}}><Typography  sx={{color:"#CBF280",padding:4}} variant="h3" component="h4">
          {"Frontend"}<br/> {"Developer"}
</Typography><Typography sx={{color:"white"}} gutterBottom  mt={2} variant="body1">{"I love to create beautiful and performant"}<br/>
 {"products with delightful user experiences."}</Typography><Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
            margin:"20%"
          }}
        >
          <Grid container>
          <Grid item md={6}>
          <Typography variant="body1" sx={{color:"white"}}  color="initial">
            Highly skilled at progressive enhancement, design systems & UI engineering
          </Typography>
          </Grid>
          <Grid item md={6}>
          <Typography variant="body1" sx={{color:"white"}}  color="initial">
            4+ years of experience building products for clients across several countries
          </Typography>
          </Grid>
          </Grid>
        </Box></Box>
 
        </Grid>
        <Grid item xs={3} md={3}>
        <Box style={{backgroundColor:"#CBF280"}}><MyImg/></Box>
        </Grid>
      </Grid>

  );
}