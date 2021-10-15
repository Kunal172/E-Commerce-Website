import React from 'react';
import './utils/card horizontal.css';
import img1_1 from './images/card horrizontal1 1.jpg';
import img1_2 from './images/card horrizontal1 2.jpg';
import img1_3 from './images/card horrizontal1 3.jpg';
import img1_4 from './images/card horrizontal1 4.jpg';

import img2_1 from './images/card horrizontal2 1.jpg';
import img2_2 from './images/card horrizontal2 2.jpg';
import img2_3 from './images/card horrizontal2 3.jpg';
import img2_4 from './images/card horrizontal2 4.jpg';

import img3_1 from './images/card horrizontal3 1.jpg';
import img3_2 from './images/card horrizontal3 2.jpg';
import img3_3 from './images/card horrizontal3 3.jpg';
import img3_4 from './images/card horrizontal3 4.jpg';

export const Card_Horizontal = () =>
{
    return (
        <>
            <div class="card-horizontal">
                <div className='card-horizontal-title'>
                    <h3>Featured Brand Products</h3>
                </div>
                <div className='card-horizontal-side'>
                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg> Add To Cart</h5>
                </div>
                <div class="card-horizontal-body">
                        <img src={img1_1} className='horizontal-image'/>
                        <img src={img1_2} className='horizontal-image-1'/>
                        <img src={img1_3} className='horizontal-image-2'/>
                        <img src={img1_4} className='horizontal-image-3'/>
                </div>
            </div>

            <div class="card-horizontal-1">
                <div className='card-horizontal-title'>
                    <h3>Trending Product</h3>
                </div>
                <div className='card-horizontal-side'>
                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg> Add To Cart</h5>
                </div>
                <div class="card-horizontal-body">
                        <img src={img2_1} className='horizontal-image'/>
                        <img src={img2_2} className='horizontal-image-1'/>
                        <img src={img2_3} className='horizontal-image-2'/>
                        <img src={img2_4} className='horizontal-image-3'/>
                </div>
            </div>

            <div class="card-horizontal-1">
                <div className='card-horizontal-title'>
                    <h3>Featured Indie Wear</h3>
                </div>
                <div className='card-horizontal-side'>
                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg> Add To Cart</h5>
                </div>
                <div class="card-horizontal-body">
                        <img src={img3_1} className='horizontal-image'/>
                        <img src={img3_2} className='horizontal-image-1'/>
                        <img src={img3_3} className='horizontal-image-2'/>
                        <img src={img3_4} className='horizontal-image-3'/>
                </div>
            </div>
        </>
    )
}