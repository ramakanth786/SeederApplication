import {   render,screen } from "@testing-library/react"
import React from 'react';
import '@testing-library/jest-dom'
import Home1 from ".";

describe('Home1 renders correctly',()=>{
    it('text1 of home1 renders correctly',()=>{
        render(<Home1></Home1>)
        const name= screen.getByText('Congratulations you')
        expect(name).toBeInTheDocument();    
          
    })
    it('button of home1 renders correctly',()=>{
        render(<Home1></Home1>)
        const name= screen.getByRole('button')
        expect(name).toBeInTheDocument();    
          
    })
})

