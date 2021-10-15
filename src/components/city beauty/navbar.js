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
                        Men beauty Store
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Shaving Gel</a></li>
                        <li><a class="dropdown-item" href="#">Hair Gel</a></li>
                        <li><a class="dropdown-item" href="#">Shaving Foam</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        Women Beauty Store
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Lipstick</a></li>
                        <li><a class="dropdown-item" href="#">Eye Liner</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        Indian Beauty Store
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Sun Cream</a></li>
                        <li><a class="dropdown-item" href="#">Hair Oil</a></li>
                        <li><a class="dropdown-item" href="#">Hair Gel</a></li>
                    </ul>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                        Mordern Beauty Store
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Lipstick For Women</a></li>
                        <li><a class="dropdown-item" href="#">Hair Gel For Men</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}