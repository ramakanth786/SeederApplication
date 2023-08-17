import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import {MyImages} from '.'

export default {
    title: 'Atoms/Image',
    component: MyImages,
    argTypes:{
        width:{
            control: {
                type: 'number'
            }
        },
        height:{
            control: {
                type: 'number'
            }
        },
        alt:{
            control:{
                type: 'text'
            }   
        }
    }    
} as ComponentMeta <typeof MyImages>

const temp: ComponentStory <typeof MyImages> = (args) =>(
        
    <MyImages {...args} />
)


export const Primary = temp.bind({});
Primary.args = {
    src:"./Images/home.svg"
}; 


