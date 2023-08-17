import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../../../themes';
import Navbar from '.';
import { BrowserRouter } from 'react-router-dom';

export default {
    title: 'Organisms/Navbar',
    component: Navbar,
    argTypes:{
    }
}as ComponentMeta <typeof Navbar>


const temp: ComponentStory<typeof Navbar> = (args) =>(
    <BrowserRouter>
        <ThemeProvider theme={theme}><Navbar {...args}  /></ThemeProvider>
        </BrowserRouter>
       
    
)


export const Primary = temp.bind({});
Primary.args = {
}


