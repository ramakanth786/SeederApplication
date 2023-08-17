import {   fireEvent, render,screen } from "@testing-library/react"
import React from 'react';
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom";
import NewCashKick from ".";

describe('newcashkick renders correctly',()=>{
    it('navitem of home1 renders correctly',()=>{
        render(<BrowserRouter><NewCashKick/></BrowserRouter> )
        const name= screen.getByRole('button')
        fireEvent.click(name)
        expect(name).toBeInTheDocument();    
          
    })
})