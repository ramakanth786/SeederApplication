import React from 'react'
import  MuiButton from '@mui/material/Button'

interface ButtonProps{
    variant:"outlined"|"contained"|"text",
    color:"primary"|"secondary",
    size?:"small"|"medium"|"large",
    name?:string,
    disabled?:boolean,
    onClick?:any,
    sx?: any
    children?: React.ReactNode
}

const Button = (props:ButtonProps) => {
  return (
    <>
      <MuiButton {...props}>{props.name}
      {props.children}
      </MuiButton>
    </>
  )
}

export  default Button
