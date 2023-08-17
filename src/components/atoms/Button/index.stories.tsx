
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button  from '.';

export default {
 
  title: 'Atoms/Button',
  component: Button,
  argTypes:{
    onClick:{action:'clicked'},
    variant:{options:["contained","outlined","text"],control:{type:'select'}}
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
export const SecondaryButton = Template.bind({});

PrimaryButton.args={
  name:"Continue",
  variant:"contained",
  disabled:false,
  color:"primary",
  size:"large",
};
SecondaryButton.args={
  name:"New Cash Kick",
  variant:"outlined",
  disabled:false,
  color:"primary",
  size:"small"
};


