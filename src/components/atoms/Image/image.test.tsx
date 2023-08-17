import { render, screen } from "@testing-library/react"
import { MyImages } from "."
import '@testing-library/jest-dom'
import React from 'react';

describe('Image Test',()=>{

    it('image renders correctly',()=>{
        render(<MyImages src={"./Images/logo192.png"}/>)
        expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('Alt text renders properly',()=>{
        render(<MyImages src={"./Images/logo192.png"}/>)
        expect(screen.getByAltText('img not found')).toBeInTheDocument()
    })

})


