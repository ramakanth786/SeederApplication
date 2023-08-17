import {  Grid } from '@mui/material'
import React from 'react'
import { MyImages } from '../../atoms/Image'
import Logo from '../../molecules/Logo'

interface LeftpannelProps{
  img: string
}

const Leftpannel = (props:LeftpannelProps) => {
  return (
    <>
        <Logo name={'Seeder'} Img={'./Images/Basic/Group.svg'} variant={'h2'} color={'text.primary'}></Logo>
        <Grid container  marginTop={'10vh'} marginBottom={'4vh'}>
          <MyImages width={'80%'} height={'50%'} src={props.img} />
        </Grid>

        
    </>
  )
}

export default Leftpannel
