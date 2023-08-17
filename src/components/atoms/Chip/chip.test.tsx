import { render,screen } from "@testing-library/react"
import { MyChip } from "."
import '@testing-library/jest-dom'
import React from 'react';

test('chip renders correctly',()=>{
    render(<MyChip variant={"outlined"}/>)
    expect(screen.getByTestId('custom-chip')).toBeInTheDocument()
})