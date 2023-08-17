import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { MyTextField } from '.';

export default {
    title: 'Atoms/TextField',
    component: MyTextField,
    argTypes:{
        variants:{
            options: ["standard" , "outlined" , "filled" ],
            control: {type:'select'}
        },
        helperText:{
            control: {
                type:'text'
            }
        },
        placeholder:{
            control:'text',
        },
        type:{
            options:['text','number','password'],
            control: 'radio'
        }

    }
}as ComponentMeta <typeof MyTextField>


const temp: ComponentStory<typeof MyTextField> = (args) =>(
    
        <MyTextField {...args} />
    
)


export const Primary = temp.bind({});
Primary.args = {
    variants: 'outlined',
    placeholder: 'Placeholder',
    type: 'text',
    helperText: 'helperText'
}


