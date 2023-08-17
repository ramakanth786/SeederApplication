import { Stack, Button } from '@mui/material'
import React from 'react'
import MyText from '../../atoms/Typography'

const Congrats = () => {
  return (
    <Stack direction={'column'} paddingLeft={'2.3vw'} paddingTop={'5vh'} width='54.45vw' sx={{backgroundImage:`url(${'./Images/Home/i69.svg'})`,backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',height:'inherit'}} borderRadius={'12px'} gap={4}>
                    <Stack direction={'column'}>
                        <MyText variant='h2' color={'grey.400'}>
                            Congratulations you
                        </MyText>
                        <MyText variant='h2' color={'grey.400'}>
                            are ready to start!
                        </MyText>
                        
                    </Stack>
                    <Stack direction={'column'}>
                        <MyText variant='body1' color={'text.primary'}>
                            You are approved for funding. We are 
                        </MyText>
                        <MyText variant='body1' color={'text.primary'}>
                            ready to advance you upto <b style={{color:'#E8E7F0'}}>&nbsp;$8.8M</b> 
                        </MyText>
                    </Stack>
                    <Button variant={'outlined'} color={'secondary'} sx={{width:'10.5vw',color:'grey.500',borderColor:'grey.500',borderRadius:'12px',textTransform:'none',height:'8vh'}}>Learn More</Button>
            </Stack>
  )
}
export default Congrats
