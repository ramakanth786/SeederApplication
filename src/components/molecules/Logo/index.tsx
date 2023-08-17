import { Grid } from '@mui/material'
import React from 'react'
import { MyImages } from '../../atoms/Image'
import MyText from '../../atoms/Typography'

interface LogoProps{
  name: string
  Img: string
  color: any
  variant: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "title" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | undefined
}

const Logo = (props: LogoProps) => {
  return (
    <Grid data-testid='Logo' container gap={6}>
            <MyImages src={props.Img}/>
            <MyText variant={props.variant} color={props.color}>
                  {props.name}
            </MyText>

        </Grid>

  )
}

export default Logo
