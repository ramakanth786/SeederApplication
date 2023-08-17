import React from 'react';
import {  fireEvent, render,screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Login from "."
import { BrowserRouter } from "react-router-dom"


describe('SocialLogin renders correctly',()=>{
    

    it('Name of SocialLogin renders correctly',()=>{
        render(<BrowserRouter><Login/></BrowserRouter>)
        const nameElement= screen.getByText('Login to seeder✨')
        expect(nameElement).toBeInTheDocument();        
    })

    it("Login button renders correctly",()=>{
        render(<BrowserRouter><Login/></BrowserRouter>)
        const buttonTest = screen.getByTestId("Login");
        expect(buttonTest).toBeInTheDocument();
    });
    it("button clicked renders correctly",()=>{
        render(<BrowserRouter><Login/></BrowserRouter>)
        const btn = screen.getByTestId("Login");
        fireEvent.click(btn)
        expect(btn).toBeInTheDocument();
    });
    // eslint-disable-next-line jest/no-identical-title
    it("Login button renders correctly",()=>{
        render(<BrowserRouter><Login/></BrowserRouter>)
        const buttonTest = screen.getByTestId("Signup");
        expect(buttonTest).toBeInTheDocument();
    });
    it("Login clicked renders correctly",()=>{
        render(<BrowserRouter><Login/></BrowserRouter>)
        const btn = screen.getByTestId("Signup");
        fireEvent.click(btn)
        expect(btn).toBeInTheDocument();
    });
    it("onclick",()=>{
        render(<BrowserRouter><Login/></BrowserRouter>)
        fireEvent.click(screen.getByText("Sign Up"));
        
    });
    it("onchange",()=>{
        const {getByTestId}=render(<BrowserRouter><Login/></BrowserRouter>)
        // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-node-access
        const inputElement=getByTestId("gmail").querySelector('input')as HTMLInputElement
        fireEvent.change(inputElement, {target: {value: 'new value'}});

        expect(inputElement.value).toBe('new value');
        
    });
    it("onchange valid email",()=>{
        const {getByTestId}=render(<BrowserRouter><Login/></BrowserRouter>)
        // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-node-access
        const inputElement=getByTestId("gmail").querySelector('input')as HTMLInputElement
        fireEvent.change(inputElement, {target: {value: 'test@gmail.com'}});

        expect(inputElement.value).toBe('test@gmail.com');
        
    });
    it("onchange valid password",()=>{
        const {getByTestId}=render(<BrowserRouter><Login/></BrowserRouter>)
        // eslint-disable-next-line testing-library/prefer-screen-queries, testing-library/no-node-access
        const inputElement=getByTestId("pwd").querySelector('input')as HTMLInputElement
        fireEvent.change(inputElement, {target: {value: 'password'}});

        expect(inputElement.value).toBe('password');

        
    });
    

})