import React from 'react';
import './utils/card_beauty.css';

export const Card = () =>
{
    return (
        <>
            <div class="card card-left-beauty">
                <div class="card-body-beauty-1">
                    <h5 class="card-title-beauty">Men Beauty Store</h5>
                    <p class="card-text-beauty-1">In this store coustmer can get all the beauty items for men like shaving gel etc.</p>
                    <a href="#" class="card-link-beauty-1">Go To Location</a>
                    <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        See Products
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <li><a class="dropdown-item" href="#">Shaving Gel</a></li>
                        <li><a class="dropdown-item" href="#">Hair Gel</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card card-middle-beauty">
                <div class="card-body-beauty-2">
                    <h5 class="card-title-beauty-1">Indian Beauty Store</h5>
                    <p class="card-text-beauty-2">In this store coustmer can get all the items related to beauty for both men and women</p>
                    <a href="#" class="card-link-beauty-2">Go To Location</a>
                    <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        See Products
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <li><a class="dropdown-item" href="#">Sun Cream</a></li>
                        <li><a class="dropdown-item" href="#">Hair Oil</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card card-right-beauty">
                <div class="card-body-beauty-3">
                    <h5 class="card-title-beauty-2">Women Beauty Store</h5>
                    <p class="card-text-beauty-3">In this store coustmer can get all the beauty items for women.</p>
                    <a href="#" class="card-link-beauty-3">Go To Location</a>
                    <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        See Products
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <li><a class="dropdown-item" href="#">Lipstick</a></li>
                        <li><a class="dropdown-item" href="#">Eye Liner</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        )
}