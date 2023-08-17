import {  render,screen } from "@testing-library/react"

import '@testing-library/jest-dom'
import SocialLogin from "."
import React from 'react';

describe('SocialLogin renders correctly',()=>{
    it('Image of SocialLogin renders correctly',()=>{
        render(<SocialLogin img={"'./Images/google.svg'"} children={'Google'}/>)
        const Image= screen.getByRole('img')
        expect(Image).toBeInTheDocument();    
          
    })
    it('Name of SocialLogin renders correctly',()=>{
        render(<SocialLogin img={"'./Images/google.svg'"} children={'Google'}/>)
        const nameElement= screen.getByText('Google')
        expect(nameElement).toBeInTheDocument();        
    })
    
})

