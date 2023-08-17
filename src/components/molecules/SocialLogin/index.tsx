import { Box } from '@mui/material'
import React from 'react'
import { MyImages } from '../../atoms/Image'
import MyText from '../../atoms/Typography'

interface SocialLoginProps{
    children?: string
    img: string
    onClick?: any
}
const SocialLogin = (props: SocialLoginProps) => {
  
  
    
  return (
  <>
    <Box 
    onClick={props.onClick}
    sx={{
        textAlign:'center',
        width:'8.66vw',
        height:'15vh',
        paddingBlock:'3.5vh',
        paddingInline:'3vw',
        backgroundColor:'elevation.color1',
        cursor:'pointer',
        borderRadius:'12px'
    }}
    >
       <MyImages src={props.img}/> 
       <MyText variant='body2'>
                {props.children}
        </MyText>
    </Box>

  </>
  )
}

export default SocialLogin
