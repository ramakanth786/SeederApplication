import {   fireEvent, render,screen } from "@testing-library/react"
import React from 'react';
import '@testing-library/jest-dom'
import NavItem from ".";
import { BrowserRouter } from "react-router-dom";

describe('navitem renders correctly',()=>{
    it('navitem of home1 renders correctly',()=>{
        render(<BrowserRouter><NavItem bgcolor1={""} bgcolor2={""} img1={""} img2={""} textcolor1={""} textcolor2={""}/></BrowserRouter> )
        const name= screen.getByTestId('home')
        fireEvent.click(name)
        expect(name).toBeInTheDocument();    
          
    })
    it('navitem1 of home1 renders correctly',()=>{
        render(<BrowserRouter><NavItem bgcolor1={""} bgcolor2={""} img1={""} img2={""} textcolor1={""} textcolor2={""}/></BrowserRouter> )
        const name= screen.getByTestId('cash')
        fireEvent.click(name)
        expect(name).toBeInTheDocument();    
          
    })
})