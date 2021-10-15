import React from 'react';
import './utils/footer.css'

export const Footer = () =>
{
    return (
        <div class="container footer">
            <footer class="py-5">
                <div class="row">
                <div class="col-2">
                    <h5>About</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact Us</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About Us</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Carrers</a></li>
                    </ul>
                </div>

                <div class="col-2">
                    <h5>Help</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Payments</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Shipping</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Cancellation & Reurns</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                    </ul>
                </div>

                <div class="col-2">
                    <h5>Policy</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Return Policy</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Terms Of Use</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Security</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Privacy</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Sitemap</a></li>
                    </ul>
                </div>

                <div class="col-2">
                    <h5>Social</h5>
                    <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Facebook</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Instagram</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Linkedin</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Twitter</a></li>
                    </ul>
                </div>

                <div class="col-3 offset-1">
                    <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of whats new and exciting from us.</p>
                    <div class="d-flex w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" class="form-control" placeholder="Email address"/>
                        <button class="btn btn-warning" type="button">Subscribe</button>
                    </div>
                    </form>
                </div>
                </div>

                <div class="d-flex border-top">
                <p>© 2021 Akansha, Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}