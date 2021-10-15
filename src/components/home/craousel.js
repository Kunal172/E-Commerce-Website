import React from 'react';
import beauty from './images/beauty store.jpg';
import store from './images/fashion store.jpg';
import wear from './images/fashion wear.jpg';
import signature from './images/signature handicraft.jpg';

import './utils/banner.css'

export const Carousel = () =>
{
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner banner-home">
                <div class="carousel-item active">
                <img src={beauty} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={store} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={wear} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src={signature} class="d-block w-100" alt="..."/>
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
    )
}