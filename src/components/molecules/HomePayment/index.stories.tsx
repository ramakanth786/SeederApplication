import { ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import HomePayment from '.';
import theme from '../../../themes';

export default {
    title: 'Molecules/HomePayment',
    component: HomePayment,
    argTypes:{
    }
}as ComponentMeta <typeof HomePayment>


const temp: ComponentStory<typeof HomePayment> = (args) =>(

    <ThemeProvider theme={theme}>
        <HomePayment  />
    </ThemeProvider>
        
    
)


export const Primary = temp.bind({});
Primary.args = {
    
}


