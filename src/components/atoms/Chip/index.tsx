import { Chip } from '@mui/material'
import React from 'react'

interface ChipProps{
    onDelete?: any
    label?: React.ReactNode
    variant: "outlined" | "filled" | undefined
    clickable?: boolean | undefined
    onClick?: any
    color?: any
    size?: "small" | "medium" | undefined
}

export const MyChip=(props:ChipProps)=>{
  return (
    <Chip  data-testid='custom-chip' {...props}/>
  )
}
