import React from 'react';

import './utils/card home.css';

export const Card = () =>
{
    return(
        <>
            <div class="card-left-home">
                <div class="card-body-home">
                    <h3 class="card-title-home">Beauty Store</h3>
                    <p class="card-text-home">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/beauty" class="btn btn-secondary">Explore Now</a>
                </div>
            </div>
            <div class="card-right-home">
                <div class="card-body-home-1">
                    <h3 class="card-title-home-1">Fashion Store Images</h3>
                    <p class="card-text-home-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href='/local'class="btn btn-warning">Explore Now</a>
                </div>
            </div>
        <div class="card-left-home">
                <div class="card-body-home-2">
                    <h3 class="card-title-home">Signature Handicraft</h3>
                    <p class="card-text-home-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/handicraft" class="btn btn-light">Explore Now</a>
                </div>
        </div>
            <div class="card-right-home">
            <div class="card-body-home-3">
                <h3 class="card-title-home-3">Fashion Wear Collection</h3>
                <p class="card-text-home-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/fashion" class="btn btn-primary">Explore Now</a>
            </div>
        </div>
    </>
    )
}