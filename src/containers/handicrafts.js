import React from 'react';
import { Header } from '../components/home/header';
import { Footer } from '../components/home/footer';
import { Carousel } from '../components/handicrafts/craousel';
import { Card1 } from '../components/handicrafts/card_one';
import { Card2 } from '../components/handicrafts/card2';
import { Card3 } from '../components/handicrafts/card3';

export const Handicrafts = () =>
{
    return (
        <>
            <Header/>
            <Carousel/>
            <Card1/>
            <Card2/>
            <Card3/>
            <Footer/>
        </>
    )
}