import { ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import NavItem from '.';
import theme from '../../../themes';

export default {
    title: 'Molecules/NavItem',
    component: NavItem,
    argTypes:{
    }
}as ComponentMeta <typeof NavItem>


const temp: ComponentStory<typeof NavItem> = (args) =>(

    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <NavItem {...args}  />
        </BrowserRouter>
    </ThemeProvider>
        
    
)


export const Primary = temp.bind({});
Primary.args = {
    
}


