import React from 'react';
import './utils/card_one.css';

export const Card1 = () =>
{
    return(
        <>
            <h2 className='heading-one'> BEST SELLING COLLECTION </h2>

            <div class="card-left-handicraft">
                <div class="card-body-one">
                    <h3 class="card-title-one">Woodwork Handicraft</h3>
                    <p class="card-text-one">The wood of Acacia is preferred by artisans because painting done on a finished piece of Acacia looks exceptionally aesthetic.</p>
                    <div>
                        <a href="#" className="btn btn-warning btn-left">Add To Cart</a>
                        <a href="#" className='btn btn-warning'>Price</a>
                    </div>
                </div>
            </div>
            <div class="card-right-handicraft">
                <div class="card-body-one-1">
                    <h3 class="card-title-one-1">Pashmina Shawls</h3>
                    <p class="card-text-one-1">Pashmina is a fine type of wool. Its textiles are first woven in Kashmir. These shawls are made from a fine type of cashmere wool.</p>
                    <div>
                        <a href="#" className="btn btn-secondary btn-left">Add To Cart</a>
                        <a href="#" className='btn btn-secondary'>Price</a>
                    </div>
                </div>
            </div>
        <div class="card-left-handicraft">
                <div class="card-body-one-2">
                    <h3 class="card-title-one-2">Brass Handicraft</h3>
                    <p class="card-text-one-2">The artisans dealing with brass handicrafts are distinctively known as "Kansaris". The manufacturing of brass handicrafts is mainly done in Rajasthan.</p>
                    <div>
                        <a href="#" className="btn btn-success btn-left">Add To Cart</a>
                        <a href="#" className='btn btn-success'>Price</a>
                    </div>
                </div>
        </div>
            <div class="card-right-handicraft">
            <div class="card-body-one-3">
                <h3 class="card-title-one-3">Bamboo Handicrafts</h3>
                <p class="card-text-one-3">Handicrafts that are made by using bamboo are the most eco-friendly crafts made in India. The diverse items made from bamboo are baskets, furniture, mats etc.</p>
                <div>
                    <a href="#" className="btn btn-danger btn-left">Add To Cart</a>
                    <a href="#" className='btn btn-danger'>Price</a>
                </div>
            </div>
        </div>
    </>
    )
}