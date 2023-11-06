<template>
    <header>
        <div class="header-container">
            <nav class="header-nav-bar">
                <div class="header-nav-logo">
                    <a href="index.html">
                        <img src="https://res.cloudinary.com/joshuafolorunsho/image/upload/v1591615159/star_hotels_logo.png"
                            alt="star hotels logo">
                    </a>
                </div>
                <ul class="header-nav-lists">
                    <li class="header-nav-list">
                        <a class="header-nav-link header-active" href="/home">Home</a>
                    </li>
                    <li class="header-nav-list"><a class="header-nav-link" href="/roomsuites">Rooms and Suites</a></li>
                    <li class="header-nav-list"><a class="header-nav-link" href="/facilities">Facilities</a></li>
                    <li class="header-nav-list"><a class="header-nav-link" href="/contactpage">Contact Us</a></li>
                    <li class="header-nav-list"><a class="header-btn header-btn-custom"
                            href="https://timbu.com/search?query=hotel">BOOK NOW</a></li>
                </ul>
                <div class="header-hamburger-icon">
                    <div class="header-hamburger-line-1"></div>
                    <div class="header-hamburger-line-2"></div>
                    <div class="header-hamburger-line-3"></div>
                </div>
            </nav>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="page-header-container">
                <h2 class="page-header">Star Hotel Facilities</h2>
                <hr />
                <p class="page-sub-header">
                    Get the most of our hotel facilities. Enjoy the state of <br> the art facilities in our hotel
                </p>
            </div>
            <section class="upper-section">
                <div class="row center-lg">
                    <div class="col image-col right-marg">
                        <div class="large-image-container">
                            <img :src="require('../assets/img/telephone.webp')">
                        </div>
                    </div>
                    <div class="col">
                        <h3 class="right-title">Access to 24hr Digital <br> Telephone Services</h3>
                        <p>
                            With our feature rich Digital telephone services, you <br> will have the flexibility you
                            have always wanted with <br> voice communication from your home or business.
                        </p>
                        <br>
                        <h3>More Details</h3>
                        <ul class="facilities-list">
                            <li>
                                <div>
                                    <img :src="require('../assets/img/check-square.svg')">
                                    <p class="list-text">Unlimited Long Distance</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img :src="require('../assets/img/check-square.svg')">
                                    <p class="list-text">Caller ID</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img :src="require('../assets/img/check-square.svg')">
                                    <p class="list-text">Caller Waiting</p>
                                </div>
                            </li>
                        </ul>
                        <a href="#" class="btn btn-fill btn-large">View More</a>
                    </div>
                </div>
            </section>
        </div>
        <div class="up">
            <h2 class="page-header">Other Facilities</h2>
            <hr />
        </div>
        <div class="container">
            <div class="containera">

                <div class="gallery">

                    <div class="gallery-item">
                        <img :src="require('../assets/img/gymnasium.webp')">
                        <h4>
                            GYMNASIUM
                        </h4>
                        <p class="imggrid">
                            We have the most equipped gymnasium in the country with an instructor
                            always available.
                        </p>
                    </div>

                    <div class="gallery-item">
                        <img :src="require('../assets/img/helipad.webp')">

                        <h4>HELIPAD</h4>
                        <p class="imggrid">
                            Access to the state of the art helipad coupled with pilots with over
                            ten years experience.
                        </p>
                    </div>

                    <div class="gallery-item">
                        <img :src="require('../assets/img/restaurants.webp')">
                        <h4>RESTAURANTS</h4>
                        <p class="imggrid">
                            We have the best local and intercontinental dishes you have ever
                            tasted before in our hotel.
                        </p>
                    </div>

                    <div class="gallery-item">
                        <img :src="require('../assets/img/swimming_pool.webp')">
                        <h4>SWIMMING POOLS</h4>
                        <p class="imggrid">
                            We have the best equipped swimming pool in the country with an
                            instructor waiting to guide you
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="footer">
        <div class="footer-container">
            <nav class="footer-nav">
                <div class="footer-description">
                    <h3 class="footer-description-title">Star Hotels</h3>
                    <p>Hospitality and Comfort are our watchwords</p>
                </div>
                <div class="footer-contact-us">
                    <h3 class="footer-description-title">Contact Us</h3>
                    <p class="footer-description-detail">
                        <img :src="require('../assets/img/map-pin.svg')">

                        <span>23, Fola Osibo, Lekki Phase 1</span>
                    </p>
                    <p class="footer-description-detail">
                        <img :src="require('../assets/img/phone.svg')"> <span>
                            08185956620</span>
                    </p>
                    <p class="footer-description-detail">
                        <img :src="require('../assets/img/mail.svg')">
                        <span>support@starhotels.com</span>
                    </p>
                </div>
                <div class="footer-follow-us">
                    <h3 class="footer-description-title">Follow Us</h3>
                    <ul class="footer-follow-us-lists">
                        <li class="follow-us-list">
                            <a href="">
                                <img :src="require('../assets/img/facebook.svg')"> </a>
                        </li>
                        <li class="follow-us-list">
                            <a href="">
                                <img :src="require('../assets/img/twitter.svg')">
                            </a>
                        </li>
                        <li class="follow-us-list">
                            <a href="">
                                <img :src="require('../assets/img/instagram.svg')">
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </footer>
</template>