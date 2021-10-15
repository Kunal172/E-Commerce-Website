import React from 'react';
import './utils/card horizontal.css';
import img1 from './images/handicraft horizontal 1.jpg';
import img2 from './images/handicraft horizontal 2.jpg';
import img3 from './images/handicraft horizontal 3.jpg';
import img4 from './images/handicraft horizontal 4.jpg';
import img5 from './images/fashion horizontal 1.jpg';
import img6 from './images/fashion horizontal 2.jpg';
import img7 from './images/fashion horizontal 3.jpg';
import img8 from './images/fashion horizontal 4.jpg';
import img9 from './images/local horizontal 1.jpg';
import img10 from './images/local horizontal 2.jpg';
import img11 from './images/local horizontal 3.jpg';
import img12 from './images/local horizontal 4.jpg';


export const Card_Horizontal = () => {
    return (
        <>
            <div class="card-horizontal">
                <div className='card-horizontal-title'>
                    <h3>Featured Handicraft</h3>
                </div>
                <div className='card-horizontal-side'>
                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg> Add To Cart</h5>
                </div>
                <div class="card-horizontal-body">
                        <img src={img1} className='horizontal-image'/>
                        <img src={img2} className='horizontal-image-1'/>
                        <img src={img3} className='horizontal-image-2'/>
                        <img src={img4} className='horizontal-image-3'/>
                </div>
            </div>

            <div class="card-horizontal-1">
                <div className='card-horizontal-title'>
                    <h3>Fashion Wear Trending</h3>
                </div>
                <div className='card-horizontal-side'>
                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg> Add to cart</h5>
                </div>
                <div class="card-horizontal-body">
                        <img src={img5} className='horizontal-image'/>
                        <img src={img6} className='horizontal-image-1'/>
                        <img src={img7} className='horizontal-image-2'/>
                        <img src={img8} className='horizontal-image-3'/>
                </div>
            </div>

            <div class="card-horizontal-1">
                <div className='card-horizontal-title'>
                    <h3>Featured Local Store</h3>
                </div>
                <div className='card-horizontal-side'>
                    <h5>See Products</h5>
                </div>
                <div class="card-horizontal-body">
                        <img src={img9} className='horizontal-image'/>
                        <img src={img10} className='horizontal-image-1'/>
                        <img src={img11} className='horizontal-image-2'/>
                        <img src={img12} className='horizontal-image-3'/>
                </div>
            </div>
        </>
    )
}