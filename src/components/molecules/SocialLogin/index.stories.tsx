import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import SocialLogin from '.';

export default {
    title: 'Molecules/SocialLogin',
    component: SocialLogin,
    argTypes:{
    }
}as ComponentMeta <typeof SocialLogin>


const temp: ComponentStory<typeof SocialLogin> = (args) =>(
    
        <SocialLogin {...args}  />
    
)


export const Primary = temp.bind({});
Primary.args = {
    img:'./Images/google.svg',
    children:'Google'
}


