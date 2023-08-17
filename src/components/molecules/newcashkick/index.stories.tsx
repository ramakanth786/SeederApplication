import { ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import NewCashKick from '.';
import theme from '../../../themes';

export default {
    title: 'Molecules/NewCashKick',
    component: NewCashKick,
    argTypes:{
    }
}as ComponentMeta <typeof NewCashKick>


const temp: ComponentStory<typeof NewCashKick> = (args) =>(

    <ThemeProvider theme={theme}>
        <BrowserRouter>
        <NewCashKick  />
        </BrowserRouter>
    </ThemeProvider>
        
    
)


export const Primary = temp.bind({});
Primary.args = {
    
}


