import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Leftpannel from '.';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../../../themes';

export default {
    title: 'Organisms/LeftPannel',
    component: Leftpannel,
    argTypes:{
    }
}as ComponentMeta <typeof Leftpannel>


const temp: ComponentStory<typeof Leftpannel> = (args) =>(
    
        <ThemeProvider theme={theme}><Leftpannel {...args}  /></ThemeProvider>
       
    
)


export const Primary = temp.bind({});
export const Secondary = temp.bind({});
Primary.args = {
    img:'./Images/Basic/login.svg'
}
Secondary.args = {

    img:'./Images/Basic/Signup.svg'
}


