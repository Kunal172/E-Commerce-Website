import React from 'react'

export const Navbar = () =>
{
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <div class='nav-bar'>
                <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        Men Wear Store
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">T-Shirts</a></li>
                        <li><a class="dropdown-item" href="#">Jeans</a></li>
                        <li><a class="dropdown-item" href="#">Shirts</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        Women Wear Store
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Long Dress</a></li>
                        <li><a class="dropdown-item" href="#">Traditional Dress</a></li>
                        <li><a class="dropdown-item" href="#">Indian Wear</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        Kids Wear
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">T-Shirts</a></li>
                        <li><a class="dropdown-item" href="#">Trousers</a></li>
                        <li><a class="dropdown-item" href="#">Skirts</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        Party Wear Store
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Sherwani</a></li>
                        <li><a class="dropdown-item" href="#">Kurta Pajama</a></li>
                        <li><a class="dropdown-item" href="#">Sarees</a></li>
                        <li><a class="dropdown-item" href="#">Bridal Wear</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}