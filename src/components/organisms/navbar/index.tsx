import { Box, Stack } from '@mui/material'
import React from 'react'
import Logo from '../../molecules/Logo'
import NavItem from '../../molecules/navitem'

interface NavbarProps{
  bgcolor1: string
  bgcolor2: string
  img1: string
  img2: string
  textcolor1: string
  textcolor2:string

}

const Navbar = (props:NavbarProps) => {
  return (
    <Box margin={'4vh'} >
        <Stack gap={8} paddingTop='2vh'>
            <Logo name={'Seeder'} Img={'./Images/Basic/Group.svg'} variant={'h2'} color={'text.primary'}></Logo>
            <Stack height={'72vh'}>
              <NavItem  {...props}/>
            </Stack>
            <Logo name={'Watch How to'} Img={'./Images/Home/flash.svg'} variant={'body2'} color={'text.disabled'} ></Logo>
        </Stack>
        
    </Box>
  )
}

export default Navbar
