import { fireEvent, render,screen } from "@testing-library/react"
import { MyTextField } from "."
import '@testing-library/jest-dom'
import React from 'react';

describe('text field test case',()=>{
    it('Text Field renders correctly',()=>{
        render(<MyTextField variants="standard"/>)
        const nameElement= screen.getByRole('textbox')
        expect(nameElement).toBeInTheDocument();    
    })
    it('input renders correctly',()=>{
        render(<MyTextField variants="standard" placeholder="username"/>)
        const Element= screen.getByPlaceholderText('username')
        fireEvent.change(Element, { target : { value: "val"}})
        expect(Element).toBeInTheDocument();    
    })
})

