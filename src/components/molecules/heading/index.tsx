import { Box, Stack } from '@mui/material'
import React from 'react'
import Avatar from '../../atoms/Avatar';
import { MyImages } from '../../atoms/Image';
import MyText from '../../atoms/Typography'



interface HeadingProps{
    Title: string
    Text1: string
}

const Heading = (props:HeadingProps) => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} >

        <Stack>
            <MyText variant='title' color={'text.primary'}>
                {props.Title}
            </MyText>
            <MyText variant='h3' color={'text.disabled'}>
                {props.Text1}
            </MyText>    

        </Stack>

        <Stack direction={'row'} justifyContent='center' alignItems={'center'} gap={2} sx={{cursor:'pointer'}}>
            <Avatar data-testid={'avatar'}></Avatar>
            <MyImages src={'./Images/Home/arrow-bottom.svg'} height='15vh' onClick={()=>console.log('logout')}/>
        </Stack>
        
    </Box>
  )
}

export default Heading
