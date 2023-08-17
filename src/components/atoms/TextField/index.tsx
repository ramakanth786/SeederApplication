import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

interface TextFieldProps{
    variants: "standard" | "outlined" | "filled" 
    icon?: any
    endicon?: any
    placeholder?: string
    name?: string
    helperText?: string
    color?: "error" | "primary" | "secondary" | "info" | "success" | "warning" 
    type?: string 
    click?: any
    onChange?: any
    value?: string
    error?: boolean
    
}

export const MyTextField= (props: TextFieldProps) => {
  
  return (  
    <TextField  
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {props.icon}
            </InputAdornment>
          ),
          endAdornment:(
            <InputAdornment
            position='end'
            onClick={props.click}
            sx={{
              cursor:"pointer"
            }}
            >
              {props.endicon}
            </InputAdornment>
          )
        }}
        sx={{backgroundColor: "grey.100",
                        borderColor: "1px {grey.600}",
                        width: "28vw",
                        borderRadius: "12px",
                        }}
        {...props}
      />
  )
}
