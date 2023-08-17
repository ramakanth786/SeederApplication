import {  render,screen } from "@testing-library/react"
import React from 'react';
import '@testing-library/jest-dom'
import Logo from "."

describe('Logo renders correctly',()=>{
    it('Image of logo renders correctly',()=>{
        render(<Logo name={'Seeder'} Img={'./Images/Basic/Group.svg'} color={undefined} variant={undefined}/>)
        const Image= screen.getByRole('img')
        expect(Image).toBeInTheDocument();    
          
    })
    it('Name of logo renders correctly',()=>{
        render(<Logo name={'Seeder'} Img={'./Images/Basic/Group.svg'} color={undefined} variant={undefined}/>)
        const nameElement= screen.getByText('Seeder')
        expect(nameElement).toBeInTheDocument();        
    })
    
})

