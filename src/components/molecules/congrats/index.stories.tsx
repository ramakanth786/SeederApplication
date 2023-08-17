import { ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Congrats from '.';
import theme from '../../../themes';

export default {
    title: 'Molecules/Congrats',
    component: Congrats,
    argTypes:{
    }
}as ComponentMeta <typeof Congrats>


const temp: ComponentStory<typeof Congrats> = (args) =>(

    <ThemeProvider theme={theme}>
        <Congrats />
    </ThemeProvider>
        
    
)


export const Primary = temp.bind({});
Primary.args = {
    
}


