import React from 'react'

interface ImageProps{
    src: string
    width?: string
    height?: string
    onClick?: any
}

export const MyImages=(props:ImageProps)=>{
  return (
     <img {...props} alt='img not found'/>
  )
}
