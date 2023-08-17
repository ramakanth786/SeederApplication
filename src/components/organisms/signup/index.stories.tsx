import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import SignUp from '.';
import theme from '../../../themes';

export default {
    title: 'Organisms/SignUp',
    component: SignUp,
    argTypes:{
    }
}as ComponentMeta <typeof SignUp>


const temp: ComponentStory<typeof SignUp> = (args) =>(
      <ThemeProvider theme={theme}>  <BrowserRouter><SignUp  /></BrowserRouter></ThemeProvider>
    
)


export const Primary = temp.bind({});
Primary.args = {

}


