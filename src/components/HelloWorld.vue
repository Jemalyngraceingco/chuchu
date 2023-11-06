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
  <div class="jumbotron-container">
    <div class="jumbotron-left">
      <h2 class="jumbotron-header">Discover the perfect balance <br> of hospitality, luxury and <br>comfort.</h2>
      <p>We are focused on providing clients with the highest level<br>
        of comfort and excellent affordable rates</p>
      <a href="https://timbu.com/search?query=hotel" class="btn btn-fill btn-large">Book Now</a>
    </div>
    <div class="jumbotron-right">
      <form action="" class="jumbotron-form">
        <h3>Scared you can't afford it?</h3><br>
        <p>Don't worry, our hotel offers the best<br> affordable rates you can ever find.</p>
        <label class="hide" for="arrival">arrival date</label>
        <input type="text" id="arrival" name="arrival_date" placeholder="Arrival Date" onfocus="(this.type='date')"><br>
        <label class="hide" for="departure">departure date</label>
        <input type="text" id="departure" name="departure_date" placeholder="Departure Date"
          onfocus="(this.type='date')"><br>
        <label class="hide" for="guests">how many guests</label>
        <input type="text" id="guests" name="guests" placeholder="Guests"><br>
        <label class="hide" for="children">children</label>
        <input type="text" id="children" name="children" placeholder="Children"><br>
        <button type="button" class="rates">CHECK RATES</button>
      </form>
    </div>
  </div>
  <div class="enjoy-container">
    <div class="enjoy-header">
      <h2 class="enjoy-heading">Enjoy your stay <br>at our hotel</h2>
      <hr class="horizontal">
      <p>We are more than being a hotel because we are able<br> to combine the quality standard of a hotel with the<br>
        advantages of an apartment.</p>
    </div>
    <div class="enjoy-services">
      <div class="first-col">
        <div class="upper">
          <span>
            <img :src="require('../assets/img/clock.svg')">
          </span>
          <h3>24 hours Room Service</h3>
          <p>You have access to 24-hours a day room service at our hotel.</p>
        </div>
        <div class="lower">
          <span>
            <img :src="require('../assets/img/database.svg')">
          </span>
          <h3>Fitness and Spa</h3>
          <p>Access to fitness and Spa is part of our hotel package when you make a booking.</p>
        </div>
      </div>
      <div class="sec-col">
        <div class="upper">
          <span>
            <img :src="require('../assets/img/coffee.svg')">
          </span>
          <h3>Restaurant and Bars</h3>
          <p>You have access to the world state of art restaurants and bars at our hotel</p>
        </div>
        <div class="lower">
          <span>
            <img :src="require('../assets/img/wifi.svg')">
          </span>
          <h3>Free Wi-Fi Access</h3>
          <p>You have access to 24-hours free Wi-Fi services irrespective of any room.</p>
        </div>
      </div>
      <div class="third-col cont">
        <img :src="require('../assets/img/ant-design_play-circle-filled.svg')">
        <img :src="require('../assets/img/video link.webp')">
      </div>
    </div>
  </div>
  <section class="special-offers">
    <div class="page-header-container">
      <h2 class="page-header">Simplicity is the ultimate <br>Watchword</h2>
    </div>
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
        <p class="offers-sub-title">
          The fact that we are run by hospitality professionals<br>and equipped with the world best interior designers
          <br> is why our rooms and suites are second to none in <br>the universe
        </p>
        <ul class="offers-list">
          <li>
            <div>
              <img :src="require('../assets/img/check-square.svg')">
              <p class="list-text">Standard Room</p>
            </div>
          </li>
          <li>
            <div>
              <img :src="require('../assets/img/check-square.svg')">
              <p class="list-text">Executive Room</p>
            </div>
          </li>
          <li>
            <div>
              <img :src="require('../assets/img/check-square.svg')">
              <p class="list-text">King Suite</p>
            </div>
          </li>
        </ul>
        <a href="https://timbu.com/search?query=hotel" class="btn btn-fill btn-large centered">Book Now</a>
      </div>
    </div>
  </section>
  <div class="review-container">
    <div class="review-header">
      <h2 class="review-title">
        Client Reviews
      </h2>
      <hr class="horizontal">
      <p class="">We are very proud of the services we offer to our customers.<br>Read every word from our happy
        customers.</p>
    </div>
    <div class="cards-container">
      <div class="card">
        <img :src="require('../assets/img/customer1.webp')">
        <h2 class="card-title">
          Mark Essien
        </h2>
        <h3 class="card-subtitle">
          Lagos, Nigeria.
        </h3>
        <p class="card-desc">Words can't explain the kind of treatment I received from the management of star hotels. They
          are the best in the country.</p>
      </div>
      <div class="card">
        <img :src="require('../assets/img/customer2.webp')">
        <h2 class="card-title">
          Seyi Onifade
        </h2>
        <h3 class="card-subtitle">
          Lagos, Nigeria.
        </h3>
        <p class="card-desc">Star hotels makes you feel the best room quality that makes you feel the comfort of a home.
        </p>
      </div>
      <div class="card">
        <img :src="require('../assets/img/customer3.webp')">
        <h2 class="card-title">
          Fayemi David
        </h2>
        <h3 class="card-subtitle">
          Lagos, Nigeria.
        </h3>
        <p class="card-desc">My Family and I are very happy when we lodge into star hotels. They are by far the best in
          the universe.</p>
      </div>
    </div>
  </div>
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

<script defer asyncsrc="public/js/toggleHamburger.js">
(() => {
  const loader = document.getElementById('loader');
  const scrollBar = document.getElementsByClassName('scroll-bar')[0];
  if (loader && scrollBar) {
    window.addEventListener('load', () => {
      loader.classList.add('none');
      scrollBar.classList.remove('scroll-bar');
    });
  }
})();
</script>
	