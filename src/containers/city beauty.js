import React from 'react';
import { Navbar } from '../components/city beauty/navbar';
import { Header } from '../components/home/header';
import { Card } from '../components/city beauty/card';
import { Footer } from '../components/home/footer';
import { Navbar_location } from '../components/city local/navbar_location';

export const City_Beauty = () =>
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