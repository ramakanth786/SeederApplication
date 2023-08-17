import { ThemeProvider } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Heading from '.';
import theme from '../../../themes';

export default {
    title: 'Molecules/Heading',
    component: Heading,
    argTypes:{
    }
}as ComponentMeta <typeof Heading>


const temp: ComponentStory<typeof Heading> = (args) =>(

    <ThemeProvider theme={theme}>
        <Heading {...args}  />
    </ThemeProvider>
        
    
)


export const Primary = temp.bind({});
Primary.args = {
    Title:'Welcome',
    Text1:'this is seeder'
}


