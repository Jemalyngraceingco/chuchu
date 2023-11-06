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
                <h2 class="page-header">Star Hotel Rooms</h2>
                <hr />
                <p class="page-sub-header">
                    Get the most of our hotel specials. Enjoy the modern <br>
                    comfort and panoramic view
                </p>
            </div>
            <section class="special-offers">
                <div class="row center-lg">
                    <div class="col image-col right-marg">
                        <img :src="require('../assets/img/hotel-1.webp')">
                        <img :src="require('../assets/img/hotel-2.webp')">
                        <img :src="require('../assets/img/hotel-3.webp')">
                        <div class="side-by-side-container">
                            <div class="large-image-container">
                                <img :src="require('../assets/img/hotel-4-large.webp')">
                            </div>
                            <section class="stacked-image-container">
                                <img :src="require('../assets/img/hotel-5.webp')">
                                <img :src="require('../assets/img/hotel-6.webp')">

                            </section>
                        </div>
                    </div>
                    <div class="col">
                        <h3 class="offers-title">Special Offers</h3>
                        <p class="offers-sub-title">
                            Get 10% discount off this city view- standard room. <br> Offers valid till june 31st 2020
                        </p>
                        <ul class="offers-list">
                            <li>
                                <div>
                                    <img :src="require('../assets/img/check-square.svg')">
                                    <p class="list-text">Free Wi-Fi Service</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img :src="require('../assets/img/check-square.svg')">
                                    <p class="list-text">Best Rate Guarantee</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img :src="require('../assets/img/check-square.svg')">
                                    <p class="list-text">Free DSTV Access</p>
                                </div>
                            </li>
                        </ul>
                        <a href="#" class="btn btn-fill btn-large">View More</a>
                    </div>
                </div>
            </section>

            <!-- Rooms -->
            <section class="rooms-section">
                <div class="row room-section-header-container">
                    <div class="col col-3">
                        <h4 class="room-section-header active-header" id="standard-room">Standard Rooms</h4>
                    </div>
                    <div class="col col-3">
                        <h4 class="room-section-header" id="executive-room">Executive Rooms</h4>
                    </div>
                    <div class="col col-3">
                        <h4 class="room-section-header" id="king-room">King Suites</h4>
                    </div>
                </div>
                <div class="row center-lg">
                    <div class="rooms col col-2">
                        <img src="https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_42_nastdj.png"
                            alt="" class="rooms-img">
                        <h3 class="room-title">Standard Economic Single</h3>
                        <p class="room-text">Designed specifically for Practicality and <br> comfort</p>
                        <div>
                            <div class="details-container">
                                <img :src="require('../assets/img/check-square.svg')">
                                <p class="list-text">2 Persons</p>
                            </div>
                            <div class="details-container">
                                <img :src="require('../assets/img/check-square.svg')">
                                <p class="list-text">1 Kingsize bed</p>
                            </div>
                        </div>
                        <p class="amount-text">NGN25,000 Per Night</p>
                        <div class="buttons-container">
                            <a href="#" class="btn btn-ghost">View More</a>
                            <a href="https://timbu.com/search?query=hotel" class="btn btn-fill">Book Now</a>
                        </div>
                    </div>
                    <div class="rooms col col-2">
                        <img src="https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_43_d9eepu.png"
                            alt="" class="rooms-img">
                        <h3 class="room-title">Standard Economic Single</h3>
                        <p class="room-text">Designed specifically for Practicality and <br> comfort</p>
                        <div>
                            <div class="details-container">
                                <img :src="require('../assets/img/check-square.svg')">
                                <p class="list-text">2 Persons</p>
                            </div>
                            <div class="details-container">
                                <img :src="require('../assets/img/bed.png')">
                                <p class="list-text">1 Kingsize bed</p>
                            </div>
                        </div>
                        <p class="amount-text">NGN35,000 Per Night</p>
                        <div class="buttons-container">
                            <a href="#" class="btn btn-ghost">View More</a>
                            <a href="https://timbu.com/search?query=hotel" class="btn btn-fill">Book Now</a>
                        </div>
                    </div>
                    <div class="rooms col col-2">
                        <img src="https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_44_anerdv.png"
                            alt="" class="rooms-img">
                        <h3 class="room-title">Standard Economic Single</h3>
                        <p class="room-text">Designed specifically for Practicality and <br> comfort</p>
                        <div>
                            <div class="details-container">
                                <img :src="require('../assets/img/check-square.svg')">
                                <p class="list-text">2 Persons</p>
                            </div>
                            <div class="details-container">
                                <img :src="require('../assets/img/bed.png')">
                                <p class="list-text">1 Kingsize bed</p>
                            </div>
                        </div>
                        <p class="amount-text">NGN45,000 Per Night</p>
                        <div class="buttons-container">
                            <a href="#" class="btn btn-ghost">View More</a>
                            <a href="https://timbu.com/search?query=hotel" class="btn btn-fill">Book Now</a>
                        </div>
                    </div>
                    <div class="rooms col col-2">
                        <img src="https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_45_mtl458.png"
                            alt="" class="rooms-img">
                        <h3 class="room-title">Standard Economic Single</h3>
                        <p class="room-text">Designed specifically for Practicality and <br> comfort</p>
                        <div>
                            <div class="details-container">
                                <img :src="require('../assets/img/check-square.svg')">
                                <p class="list-text">2 Persons</p>
                            </div>
                            <div class="details-container">
                                <img :src="require('../assets/img/bed.png')">
                                <p class="list-text">1 Kingsize bed</p>
                            </div>
                        </div>
                        <p class="amount-text">NGN50,000 Per Night</p>
                        <div class="buttons-container">
                            <a href="#" class="btn btn-ghost">View More</a>
                            <a href="https://timbu.com/search?query=hotel" class="btn btn-fill">Book Now</a>
                        </div>
                    </div>
                </div>
            </section>

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
