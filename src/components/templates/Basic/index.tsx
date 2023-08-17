import { Grid } from '@mui/material'
import React from 'react'

interface BasicProps{
    leftChildren?: React.ReactNode
    rightChildren?: React.ReactNode
}

const Basic = (props: BasicProps) => {
  return (
    <Grid container height={'100vh'}>
      <Grid data-testid={'leftpannel'}item paddingLeft={'4vw'} paddingTop={'5.7vh'} xs={5.04} sx={{ backgroundColor:'primary.600'}}>
            {props.leftChildren}    
      </Grid>
      
      <Grid data-testid={'rightpannel'} item xs={6.96}>
        {props.rightChildren}   
      </Grid>
      
    </Grid>
  )
}

export default Basic
