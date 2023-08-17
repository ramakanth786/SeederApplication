import React from 'react'
import MuiCheckBox from '@mui/material/Checkbox'

interface CheckBoxProps{
    checked:boolean,
    color?:"primary",
    size?:"medium"|"small",
}

const CheckBox = (props:CheckBoxProps) => {
  return (
    <>
      <MuiCheckBox {...props}/>
    </>
  )
}

export default CheckBox
