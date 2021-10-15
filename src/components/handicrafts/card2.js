import React from 'react';
import './utils/card2.css';

export const Card2 = () =>
{
    return(
        <>
            <h2 className='heading-two'> ARTISTIC COLLECTION </h2>

            <div class="card-left-handicraft-two">
                <div class="card-body-two">
                    <h3 class="card-title-two">Kashmir Carpets</h3>
                    <p class="card-text-two">They are hand-knitted with intricate designs, made using pure wool or silk, and require a huge amount of work.</p>
                    <div>
                        <a href="#" className="btn btn-primary btn-left">Add To Cart</a>
                        <a href="#" className='btn btn-primary'>Price</a>
                    </div>
                </div>
            </div>
            <div class="card-right-handicraft-two">
                <div class="card-body-two-1">
                    <h3 class="card-title-two-1">Warli Paintings</h3>
                    <p class="card-text-two-1">This tribal art form was born in the state of Maharashtra and mainly revolves around elements of nature including motifs of the sun, the moon, mountains, rivers, and trees.</p>
                    <div>
                        <a href="#" className="btn btn-secondary btn-left">Add To Cart</a>
                        <a href="#" className='btn btn-secondary'>Price</a>
                    </div>
                </div>
            </div>
        <div class="card-left-handicraft-two">
                <div class="card-body-two-2">
                    <h3 class="card-title-two-2">Channapatna toys</h3>
                    <p class="card-text-two-2">They were first created in the Karnataka state. They are so unique that they are protected as a geographical indication under the World Trade Organization.</p>
                    <div>
                        <a href="#" className="btn btn-warning btn-left">Add To Cart</a>
                        <a href="#" className='btn btn-warning'>Price</a>
                    </div>
                </div>
        </div>
            <div class="card-right-handicraft-two">
            <div class="card-body-two-3">
                <h3 class="card-title-two-3">Plates and Boxes</h3>
                <p class="card-text-two-3">These products are of the highest quality, and often employ floral patterns from the Taj Mahal. </p>
                <div>
                    <a href="#" className="btn btn-info btn-left">Add To Cart</a>
                    <a href="#" className='btn btn-info'>Price</a>
                </div>
            </div>
        </div>
    </>
    )
}