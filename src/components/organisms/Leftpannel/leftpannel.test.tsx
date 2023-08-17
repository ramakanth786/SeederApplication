import { render,screen } from "@testing-library/react"
import Leftpannel from "."
import '@testing-library/jest-dom'
import React from 'react';

test('leftpannel renders correctly',()=>{
    render(<Leftpannel img={"'./Images/Basic/login.svg'"} />)
    expect(screen.getByTestId('Logo')).toBeInTheDocument()
})