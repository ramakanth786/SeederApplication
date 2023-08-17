import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MyImages } from '../../atoms/Image'
import MyText from '../../atoms/Typography'

interface NavItemProps{
    bgcolor1: string
    bgcolor2: string
    img1: string
    img2: string
    textcolor1: string
    textcolor2: string


}


const NavItem = (props:NavItemProps) => {
    const Navigate=useNavigate()
   
  return (
    <List>
        <ListItem disablePadding  sx={{paddingBottom:'1vh'}}>
                <ListItemButton data-testid={'home'} sx={{borderRadius:'12px',height:'7vh',backgroundColor:props.bgcolor1}} onClick={()=>{Navigate('/home')}}>
                    <ListItemIcon>
                        <MyImages src={props.img1}></MyImages>
                    </ListItemIcon>
                    <ListItemText primary={<MyText variant='body2' color={props.textcolor1}>Home</MyText>} />
                </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
                <ListItemButton data-testid={'cash'} sx={{borderRadius:'12px',height:'7vh',backgroundColor:props.bgcolor2}}  onClick={()=>{Navigate('/cashacceleration')}}>
                    <ListItemIcon>
                    <MyImages src={props.img2}></MyImages>
                    </ListItemIcon>
                    <ListItemText primary={<MyText variant='body2' color={props.textcolor2}>Cash Accelration</MyText>} />
                </ListItemButton>
        </ListItem>
        

    </List>
  )
}

export default NavItem
