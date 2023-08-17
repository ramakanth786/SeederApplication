
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import  CheckBox  from '.';

export default {
 
  title: 'Atoms/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args}/>

export const  PrimaryCheckbox = Template.bind({})
export const SecondaryCheckbox = Template.bind({})

PrimaryCheckbox.args={
    color:"primary",
    size:"small",
    checked:true,
};

SecondaryCheckbox.args={
    color:"primary",
    size:"medium",
    checked:false,
}
