import {  render,screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from ".";

describe('Home renders correctly',()=>{
    it('text1 of home1 renders correctly',()=>{
        render(<BrowserRouter><Navbar bgcolor1={""} bgcolor2={""} img1={""} img2={""} textcolor1={""} textcolor2={""}/></BrowserRouter> )
        const name= screen.getByText('Home')
        expect(name).toBeInTheDocument();    
          
    })
})

