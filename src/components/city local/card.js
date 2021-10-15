import React from 'react';
import './utils/card.css';

export const Card = () =>
{
    return (
        <>
            <div class="card card-left-local">
                <div class="card-body-local">
                    <h5 class=" card-title-local">Grocery Store</h5>
                    <p class="card-text-local">In this local store coustmer can get all the groceries they needed for there house.</p>
                    <a href="#" class="card-link">Go To Location</a>
                    <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        See Products
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <li><a class="dropdown-item" href="#">Refined oil</a></li>
                        <li><a class="dropdown-item" href="#">Bread</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card card-middle-local">
                <div class="card-body-local-1">
                    <h5 class="card-title-local-1">Cloth Store</h5>
                    <p class="card-text-local-1">In this local store coustmer can get all type of cloths they want.</p>
                    <a href="#" class="card-link-1">Go To Location</a>
                    <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        See Products
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <li><a class="dropdown-item" href="#">T-Shirts</a></li>
                        <li><a class="dropdown-item" href="#">Jeans</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="card card-right-local">
                <div class="card-body-local-2">
                    <h5 class="card-title-local-2">Supermarket Store</h5>
                    <p class="card-text-local">In this local store coustmer can get all the groceries and the fruits they needed for there house.</p>
                    <a href="#" class="card-link">Go To Location</a>
                    <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        See Products
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <li><a class="dropdown-item" href="#">Milk</a></li>
                        <li><a class="dropdown-item" href="#">Orange</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
        )
}