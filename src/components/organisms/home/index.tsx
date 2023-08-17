import {  Stack } from '@mui/material'
import React from 'react'
import Congrats from '../../molecules/congrats'
import HomePayment from '../../molecules/HomePayment'
import NewCashKick from '../../molecules/newcashkick'

const Home = () => {
  return (
    <Stack gap={5} >
       <Stack direction={'row'} gap={5} height='38vh'>
            <Congrats/>
            <NewCashKick></NewCashKick>     
        </Stack>
        <HomePayment/>
        
    </Stack>
    
  )
}

export default Home
