import React from 'react';
import './utils/banner.css'
import img1_1 from './images/banner1 1.jpg';
import img1_2 from './images/banner1 2.jpg';
import img1_3 from './images/banner1 3.jpg';
import img2_1 from './images/banner2 1.jpg';
import img2_2 from './images/banner2 2.jpg';
import img2_3 from './images/banner2 3.jpg';
import img3_1 from './images/banner3 1.jpg';
import img3_2 from './images/banner3 2.jpg';
import img3_3 from './images/banner3 3.jpg';

export const Carousel = () =>
{
    return (
        <>
            <div id="carouselExampleFade" class="carousel slide carousel-fade carousel_1_handicraft" data-bs-ride="carousel">
                <div class="carousel-inner banner">
                    <div class="carousel-item active">
                    <img src={img1_1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={img1_2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={img1_3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div id="carouselExampleControls" class="carousel slide carousel_2_handicraft" data-bs-ride="carousel">
                <div class="carousel-inner banner">
                    <div class="carousel-item active">
                    <img src={img2_1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={img2_2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={img2_3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div id="carouselExampleInterval" class="carousel slide carousel_3_handicraft" data-bs-ride="carousel">
                <div class="carousel-inner banner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src={img3_1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src={img3_2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={img3_3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}