import { Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../atoms/Button'
import MyText from '../../atoms/Typography'

const NewCashKick = () => {
    const Navigate=useNavigate()
  return (
    <Stack textOverflow={'ellipsis'} bgcolor={'elevation.color1'} borderRadius='12px' padding='5vh' gap={4} height='38vh'width='22.5vw'>
        <Stack direction={'column'} >
            <MyText variant='h2' color={'text.primary'}>Launch a new</MyText>
            <MyText variant='h2' color={'text.primary'}>Cash Kick</MyText>
            
        </Stack>
        <Stack >
            <MyText variant='body1' color={'text.disabled'}>
            You have upto<b style={{color:'#E8E7F0'}}>&nbsp;$880,000.00 </b>
            
            </MyText>
            <MyText variant='body1' color={'text.disabled'}>
                available for a new cash advance
            </MyText>    
        </Stack>
        
        <Stack paddingTop={'1vh'}>
            <Button variant={'contained'} color={'primary'} name='New Cash Kick' sx={{color:'grey.500',variant:'button',height:'7vh',textTransform:'none',borderRadius:'12px'}} onClick={()=>Navigate('/newcashkick')}></Button>
        </Stack>
    </Stack>
  )
}

export default NewCashKick
