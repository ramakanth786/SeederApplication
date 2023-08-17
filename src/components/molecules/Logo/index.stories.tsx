import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Logo from '.';

export default {
    title: 'Molecules/Logo',
    component: Logo,
    argTypes:{
    }
}as ComponentMeta <typeof Logo>


const temp: ComponentStory<typeof Logo> = (args) =>(
    
        <Logo {...args}  />
    
)


export const Primary = temp.bind({});
Primary.args = {
    name: 'Seeder',
    Img: './Images/Basic/Group.svg'
}


