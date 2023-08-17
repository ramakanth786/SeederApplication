import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Login  from '.';

import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../../../themes';

export default {
 
  title: 'organisms/Login',
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <ThemeProvider theme={theme}><BrowserRouter><Login /></BrowserRouter></ThemeProvider>;

export const PrimaryLogin = Template.bind({});
PrimaryLogin.args={
};
