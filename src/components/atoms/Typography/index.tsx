import React from 'react';
import { Typography, TypographyProps } from '@mui/material'

interface MyTextProps extends TypographyProps {
  children?: React.ReactNode
}

const MyText = (props:MyTextProps) => {
  const {
    children,
    variant,
    align,
    color,
    ...rest
  } = props
  return (
    
      <Typography
        variant={variant}
        align={align}
        color={color}
        {...rest}
      >
        {children}
      </Typography>
  )
}

export default MyText