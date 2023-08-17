import {   render,screen } from "@testing-library/react"
import React from 'react';
import '@testing-library/jest-dom'
import HomePayment from ".";

describe('HomePayment renders correctly',()=>{
    it('text of homepayment renders correctly',()=>{
        render(<HomePayment/>)
        const name= screen.getByText('Due Date')
        expect(name).toBeInTheDocument();    
          
    })
})

