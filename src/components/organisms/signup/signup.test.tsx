import {  fireEvent, render,screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import SignUp from "."
import { BrowserRouter } from "react-router-dom"
import React from 'react';

describe('SocialLogin renders correctly',()=>{
    it('input field-name of SocialLogin renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter> )
        const name= screen.getByTestId('name')
        expect(name).toBeInTheDocument();    
          
    })
    it('input field-gmail of SocialLogin renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter> )
        const gmail= screen.getByTestId('gmail')
        expect(gmail).toBeInTheDocument();    
          
    })
    it('input field-pwd of SocialLogin renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter> )
        const pwd= screen.getByTestId('pwd')
        expect(pwd).toBeInTheDocument();    
          
    })

    it('name field renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const Element= screen.getByPlaceholderText('Your Name')
        fireEvent.change(Element, { target : { value: "val"}})
        expect(Element).toHaveValue('val');    
    })
    it('pwd field renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const Element= screen.getByPlaceholderText('Email Address')
        fireEvent.change(Element, { target : { value: "abc@gmail.com"}})
        expect(Element).toHaveValue('abc@gmail.com');    
    })
    it('gmail renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const Element= screen.getByPlaceholderText('Password')
        fireEvent.change(Element, { target : { value: "abcC@12jsl"}})
        expect(Element).toHaveValue('abcC@12jsl');    
    })


    it('Name of SocialLogin renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const nameElement= screen.getByText('Sign Up ✨')
        expect(nameElement).toBeInTheDocument();        
    })
    it('Text renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const nameElement= screen.getByText('Already have an account?')
        expect(nameElement).toBeInTheDocument();        
    })
    

    it("Signup button renders correctly",()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const buttonTest = screen.getByTestId("Signup");
        expect(buttonTest).toBeInTheDocument();
    });
    it("button clicked renders correctly",()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const btn = screen.getByTestId("Signup");
        fireEvent.click(btn)
        expect(btn).toBeInTheDocument();
    });
    it("Login button renders correctly",()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const buttonTest = screen.getByTestId("Login");
        expect(buttonTest).toBeInTheDocument();
    });
    it("Login clicked renders correctly",()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const btn = screen.getByTestId("Login");
        fireEvent.click(btn)
        expect(btn).toBeInTheDocument();
    });
    it('Image of Social1 renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const Image= screen.getByText('Google')
        expect(Image).toBeInTheDocument();    
          
    })
    it('Name of Social2 renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const nameElement= screen.getByText('Xero')
        expect(nameElement).toBeInTheDocument();        
    })
    it('Name of Social3 renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const nameElement= screen.getByText('Stripe')
        expect(nameElement).toBeInTheDocument();        
    })

    it('Or renders correctly',()=>{
        render(<BrowserRouter><SignUp/></BrowserRouter>)
        const nameElement= screen.getByText('Or')
        expect(nameElement).toBeInTheDocument();        
    })
    
})

