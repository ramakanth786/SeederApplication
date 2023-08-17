import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import {MyChip} from '.'

export default {
    title: 'Atoms/Chip',
    component: MyChip,
    argTypes:{
        label:{
            control: {type:'text'}
        },
        variant:{
            control:{type: 'radio',
                    options: ['outlined','filled',undefined]            
                }
        },
        clickable:{
            control:{type:'boolean'}
        },
        color:{
            control:{type:'select',options:[ "default" , "primary" , "secondary" , "error" , "info" , "success" , "warning" , undefined]}
        },
        size:{
            control:{type: 'radio',options:['small','medium']}
        }
    }    
} as ComponentMeta <typeof MyChip>
const temp: ComponentStory <typeof MyChip> = (args) =>(
        
    <MyChip {...args} />
)
export const Primary = temp.bind({});
Primary.args = {}; 