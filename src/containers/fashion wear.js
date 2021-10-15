import { Header } from '../components/home/header';
import { Dropdown } from '../components/fashion wear/navbar';
import { Footer } from '../components/home/footer'
import { Carousel } from '../components/fashion wear/carousel';
import { Card_Horizontal } from '../components/fashion wear/card horizontal';

export const Fashion_Wear = () =>
{
    return (
        <>
        <Header/>
        <Dropdown/>
        <Carousel/>
        <Card_Horizontal/>
        <Footer/>
        </>
    )
}