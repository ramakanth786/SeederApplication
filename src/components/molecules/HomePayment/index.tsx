import { Stack, Table, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { MyImages } from '../../atoms/Image'
import MyText from '../../atoms/Typography'
 
const HomePayment = () => {
  return (
    <Stack bgcolor={'elevation.color1'} borderRadius={'12px'} height={'40vh'} padding={'4vh'} gap={4}>
                <MyText variant='h2' color={'text.primary'}>Your Payment <MyImages src={'./Images/Home/info.svg'}/></MyText>
                <Table >
                    <TableHead sx={{}}>
                        <TableRow sx={{backgroundColor:'grey.100',height:'2vh'}}>
                            <TableCell align='center'>Due Date</TableCell>
                            <TableCell align='center'>Status</TableCell>
                            <TableCell align='center'>Expected amount</TableCell>
                            <TableCell align='center'>Outstanding</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <MyImages height='60%' src={'./Images/Home/cheque.svg'}/>   
        </Stack>
  )
}

export default HomePayment
