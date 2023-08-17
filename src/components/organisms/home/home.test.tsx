import {  render,screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import React from 'react';
import Home from ".";
import { BrowserRouter } from "react-router-dom";

describe('Home renders correctly',()=>{
    it('text1 of home1 renders correctly',()=>{
        render(<BrowserRouter><Home/></BrowserRouter> )
        const name= screen.getByText('Congratulations you')
        expect(name).toBeInTheDocument();    
          
    })
    it('button of home1 renders correctly',()=>{
        render(<BrowserRouter><Home/></BrowserRouter>)
        const name= screen.getByRole('table')
        expect(name).toBeInTheDocument();    
          
    })
})

