import {  render,screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Basic from "."
import React from 'react';

describe('Template renders correctly',()=>{
    it('left pannel  renders correctly',()=>{
        render(<Basic/>)
        const left= screen.getByTestId('leftpannel')
        expect(left).toBeInTheDocument();    
          
    })
    it('right pannel renders correctly',()=>{
        render(<Basic/>)
        const right= screen.getByTestId('rightpannel')
        expect(right).toBeInTheDocument();        
    })
    
})

