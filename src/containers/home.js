import { Dropdown } from '../components/home/navbar';
import { Header } from '../components/home/header';
import { Carousel } from '../components/home/craousel';
import { Card } from '../components/home/card';
import { Card_Horizontal } from '../components/home/card horizontal';
import { Footer } from '../components/home/footer';

export const Home = () => {
    return (
      <>
        <Header/>
        <Dropdown/>
        <Carousel/>
        <Card/>
        <Card_Horizontal/>
        <Footer/>
      </>
    );
  }