import {  render,screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import React from 'react';
import Landing from ".";

describe('Template renders correctly',()=>{
    it('left pannel  renders correctly',()=>{
        render(<Landing leftChildren={undefined} RightChildren={undefined} Heading={undefined}/>)
        const left= screen.getByTestId('navbar')
        expect(left).toBeInTheDocument();    
          
    })
    it('heading renders correctly',()=>{
        render(<Landing leftChildren={undefined} RightChildren={undefined} Heading={undefined}/>)
        const right= screen.getByTestId('heading')
        expect(right).toBeInTheDocument();        
    })
    it('home renders correctly',()=>{
        render(<Landing leftChildren={undefined} RightChildren={undefined} Heading={undefined}/>)
        const right= screen.getByTestId('home')
        expect(right).toBeInTheDocument();        
    })
    
})

