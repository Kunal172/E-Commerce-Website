import React from 'react';
import { Navbar } from '../components/city local/navbar';
import { Header } from '../components/home/header';
import { Card } from '../components/city local/card';
import { Footer } from '../components/home/footer';
import { Navbar_location } from '../components/city local/navbar_location';

export const City_Local = () =>
{
    return (
        <>
            <Header/>
            <Navbar_location/>
            <Navbar/>
            <Card/>
            <Footer/>
        </>
    )
}