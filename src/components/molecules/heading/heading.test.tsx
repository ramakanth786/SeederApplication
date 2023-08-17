import {  fireEvent, render,screen } from "@testing-library/react"
import React from 'react';
import '@testing-library/jest-dom'
import Heading from ".";

describe('Heading renders correctly',()=>{
    it('title of heading renders correctly',()=>{
        render(<Heading Title={"good morning"} Text1={"hello"}></Heading>)
        const name= screen.getByText('good morning')
        expect(name).toBeInTheDocument();    
          
    })
    it('body of heading renders correctly',()=>{
        render(<Heading Title={"good morning"} Text1={"hello"}></Heading>)
        const name= screen.getByText('hello')
        expect(name).toBeInTheDocument();    
    })
    it('img of heading renders correctly',()=>{
        render(<Heading Title={"good morning"} Text1={"hello"}></Heading>)
        const name= screen.getByRole('img')
        fireEvent.click(name)
        expect(name).toBeInTheDocument();    
    })
    it('avatar of heading renders correctly',()=>{
        render(<Heading Title={"good morning"} Text1={"hello"}></Heading>)
        const name= screen.getByTestId('avatar')
        expect(name).toBeInTheDocument();    
    })
    
})

