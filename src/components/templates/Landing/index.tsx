import { Grid } from '@mui/material'
import React from 'react'

interface LandingProps{
  leftChildren: React.ReactNode
  RightChildren: React.ReactNode
  Heading: React.ReactNode
}

const Landing = (props: LandingProps) => {
  return (
    <Grid container height={'100vh'} >
        <Grid data-testid={'navbar'}item sx={{ backgroundColor:'elevation.color1',borderColor:'elevation.color3'}} height='auto' xs={2.3}>
            {props.leftChildren}
        </Grid>
        <Grid item xs={9.7}>
            <Grid data-testid={'heading'}item marginTop={8} marginLeft={6} marginRight={6}>
            {props.Heading}
            </Grid>
            <Grid data-testid={'home'} item marginTop={8} marginLeft={6} marginRight={6}>
              {props.RightChildren}
            </Grid>
        </Grid>
    
    </Grid>
  )
}

export default Landing
