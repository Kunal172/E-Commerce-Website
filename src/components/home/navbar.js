import React from 'react';

import './utils/navbar.css'

export const Dropdown = () =>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class='nav-bar'>
                    <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                            City Local Store
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/local">Grocrey Store</a></li>
                            <li><a class="dropdown-item" href="/local">Cloth Store</a></li>
                            <li><a class="dropdown-item" href="/local">Supermarket Store</a></li>
                        </ul>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                            City Beauty Store
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/beauty">Men Beauty Store</a></li>
                            <li><a class="dropdown-item" href="/beauty">Indian Beauty Store</a></li>
                            <li><a class="dropdown-item" href="/beauty">Women Beauty Store</a></li>
                        </ul>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                            Signature Handicraft
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/handicraft">Woodwork Handicraft</a></li>
                            <li><a class="dropdown-item" href="/handicraft">Brass Handicraft</a></li>
                            <li><a class="dropdown-item" href="/handicraft">Bamboo Handicraft</a></li>
                        </ul>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                            Fashion Wear
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/fashion">Khadi Wears</a></li>
                            <li><a class="dropdown-item" href="/fashion">Clavin Klien</a></li>
                            <li><a class="dropdown-item" href="/fashion">Pepe Jeans</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}