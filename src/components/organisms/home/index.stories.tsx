import { ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Home from '.';
import theme from '../../../themes';

export default {
    title: 'Organisms/Home',
    component: Home,
    argTypes:{
    }
}as ComponentMeta <typeof Home>


const temp: ComponentStory<typeof Home> = (args) =>(

    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Home  />
        </BrowserRouter>
    </ThemeProvider>
        
    
)


export const Primary = temp.bind({});
Primary.args = {
    
}


