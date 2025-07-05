<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import ebaa from '../assets/ebaa.png'
import nla from '../assets/nla.png'
import nbaa from '../assets/nbaa.png'
import taca from '../assets/taca.png'
import fromm from '../assets/from.png'
import to from '../assets/to.png'
import home6bg from '../assets/home6bg.png'
import one from '../assets/11.png'
import two from '../assets/22.png'
import three from '../assets/33.png'
import oss1 from '../assets/oss1.png'
import asianWomanInCar from '../assets/asian woman in car.png'
import manAndWomanWithBag from '../assets/man and woman with bag.png'
import thumbsUpGirl from '../assets/thumbs up girl.png'
import manUsingPhone from '../assets/man using phone.png'
import limousine from '../assets/limousine.png'
import phone1 from '../assets/phone 1.png'
import hotwheels from '../assets/hotwheels.png'
import price from '../assets/price.png'
import safety from '../assets/safety.png'
import driver from '../assets/driver.png'
import googlee from '../assets/googlee.png'
import applee from '../assets/applee.png'

export default {
  setup() {
    return {
      ebaa,
      nla,
      nbaa,
      taca,
      fromm,
      to,
      home6bg,
      one,
      two,
      three,
      oss1,
      asianWomanInCar,
      manAndWomanWithBag,
      thumbsUpGirl,
      manUsingPhone,
      limousine,
      phone1,
      hotwheels,
      price,
      safety,
      driver,
      googlee,
      applee
    }
  },
  components: {
    CContainer,
    CRow,
    CCol
  }
}
</script>

<template>
  <section class="home">
    <CContainer>
      <CRow>
        <CCol lg="6" class="h-col1">
          <div class="home-content">
            <p>Where Would You Like To Go?</p>
            <h1>Find Your Private Chauffeur</h1>
            <div class="search-menu-horizontal">
              <div class="dropdown-container">
                <img :src="fromm" alt="" />
                <label for="from">From:</label>
                <select id="from" name="from">
                  <option value="select">Select a location</option>
                  <option value="new-york">New York</option>
                  <option value="london">London</option>
                  <option value="paris">Paris</option>
                  <option value="berlin">Berlin</option>
                  <!-- Add more options as needed -->
                </select>
              </div>
              <div class="dropdown-container">
                <img :src="to" alt="" />
                <label for="to">To:</label>
                <select id="to" name="to">
                  <option value="select">Select a destination</option>
                  <option value="new-york">New York</option>
                  <option value="london">London</option>
                  <option value="paris">Paris</option>
                  <option value="berlin">Berlin</option>
                  <!-- Add more options as needed -->
                </select>
              </div>
              <button class="search-button" type="button">
                <i class="fa-solid fa-magnifying-glass"></i> Search
              </button>
            </div>
          </div>
          <div class="partners">
            <h4>The partners who sell our products</h4>
            <div class="partner-logos">
              <div><img :src="taca" alt="" /></div>
              <div><img :src="ebaa" alt="" /></div>
              <div><img :src="nbaa" alt="" /></div>
              <div><img :src="nla" alt="" /></div>
            </div>
          </div>
        </CCol>
        <CCol lg="6" class="h-col2">
          <img :src="home6bg" alt="" class="img-fluid" />
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="how-it-works">
    <CContainer>
      <CRow>
        <CCol lg="12">
          <h1>How It Works</h1>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg="4">
          <img :src="one" alt="" />
          <h3>Book Via App Or Web</h3>
          <p>
            Enter your pickup & dropoff locations or the number of hours you wish to book a car and
            driver for
          </p>
        </CCol>
        <CCol lg="4">
          <img :src="two" alt="" />
          <h3>Book Via App Or Web</h3>
          <p>
            Enter your pickup & dropoff locations or the number of hours you wish to book a car and
            driver for
          </p>
        </CCol>
        <CCol lg="4">
          <img :src="three" alt="" />
          <h3>Book Via App Or Web</h3>
          <p>
            Enter your pickup & dropoff locations or the number of hours you wish to book a car and
            driver for
          </p>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="our-services">
    <CContainer>
      <CRow>
        <CCol lg="12" class="os-col1">
          <div class="our-fleet-title">
            <h1>Our Services</h1>
          </div>
          <div class="more-fleet">
            <button onclick="">
              More Services <i class="fa-solid fa-square-arrow-up-right"></i>
            </button>
          </div>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg="6">
          <img :src="oss1" style="width: 70%" />
        </CCol>
        <CCol lg="6">
          <div style="align-items: center">
            <h2>Intercity Rides</h2>
            <p>
              Enter your pickup & dropoff locations or the number of hours you wish to book a car
              and driver for
            </p>
            <button class="htw-explore-btn">
              Explore <i class="fa-solid fa-square-arrow-up-right"></i>
            </button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="reliability">
    <CContainer class="r-con1">
      <CRow>
        <CCol lg="6">
          <div style="padding-top: 150px">
            <h6 style="font-size: 3rem; padding-bottom: 10px">Reliability, Worldwide</h6>
            <p>Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.</p>
            <ul class="custom-bullets">
              <li>Affordable</li>
              <li>Punctual</li>
              <li>Professional</li>
            </ul>
          </div>
        </CCol>
        <CCol lg="6">
          <img :src="asianWomanInCar" style="width: 110%" />
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="latest-news">
    <CContainer>
      <CRow class="header-row">
        <CCol lg="12">
          <div class="news-title">
            <h1>Latest From News</h1>
          </div>
          <div class="more-news">
            <button
              style="background-color: transparent; color: black; border-color: transparent"
              onclick=""
            >
              More News <i class="fa-solid fa-square-arrow-up-right"></i>
            </button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
    <CContainer class="ln2ndcon">
      <CRow>
        <CCol lg="4">
          <div class="card">
            <img :src="manAndWomanWithBag" class="card-img-top" alt="Travel Image" />
            <div class="card-body">
              <p class="card-text">Travel</p>
              <h5 class="card-title">3 hidden-gem destinations for your wish list</h5>
              <a href="#" class="solid-up-right"><i class="fa-solid fa-square-up-right"></i></a>
            </div>
          </div>
        </CCol>
        <CCol lg="4">
          <div class="card">
            <img :src="thumbsUpGirl" class="card-img-top" alt="Culture Image" />
            <div class="card-body">
              <p class="card-text">Culture</p>
              <h5 class="card-title">Explore the big things happening in Dallas</h5>
              <a href="#" class="solid-up-right"><i class="fa-solid fa-square-up-right"></i></a>
            </div>
          </div>
        </CCol>
        <CCol lg="4">
          <div class="card">
            <img :src="manUsingPhone" class="card-img-top" alt="News Image" />
            <div class="card-body">
              <p class="card-text">News</p>
              <h5 class="card-title">LA's worst traffic areas and how to avoid them</h5>
              <a href="#" class="solid-up-right"><i class="fa-solid fa-square-up-right"></i></a>
            </div>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="features">
    <CContainer>
      <CRow>
        <CCol lg="6">
          <h2>We make sure that your every trip is comfortable</h2>
        </CCol>
        <CCol lg="6">
          <p>
            Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas
            ultrices.
          </p>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg="4">
          <img :src="limousine" alt="" />
          <h5>Luxury Limousine Selection</h5>
        </CCol>
        <CCol lg="4">
          <img :src="phone1" alt="" />
          <h5>27/7 Order Available</h5>
        </CCol>
        <CCol lg="4">
          <img :src="hotwheels" alt="" />
          <h5>Fast Car Delivery Service</h5>
        </CCol>
        <CCol lg="4">
          <img :src="safety" alt="" />
          <h5>High Safety and Nurity</h5>
        </CCol>
        <CCol lg="4">
          <img :src="price" alt="" />
          <h5>Fixed Price & Bonus System</h5>
        </CCol>
        <CCol lg="4">
          <img :src="driver" alt="" />
          <h5>Professional Car Drivers</h5>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="contact-section">
    <div class="footer-header pt-4 pb-4" style="border: bottom 1px; border-color: #c4c4c4">
      <div class="container">
        <div class="row">
          <div class="col-lg-2"><i class="fa fa-phone"></i> +92 321 1241445</div>
          <div class="col-lg-5">
            <i class="fa-light fa-location-dot"></i>184 Main Collins Street West Victoria 8007
          </div>
          <div class="col-lg-5">
            <i class="fa-regular fa-clock"></i> Mon-Sat: 09:00 - 17:00 - Sun: Closed
          </div>
        </div>
      </div>
    </div>
    <div class="footer-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <h5 style="padding: 20px; padding-left: 0px">Company</h5>
            <ul>
              <li class="footer-links"><a href="#">About Us</a></li>
              <li class="footer-links"><a href="#">Our Offerings</a></li>
              <li class="footer-links"><a href="#">Newsroom</a></li>
              <li class="footer-links"><a href="#">Investors</a></li>
              <li class="footer-links"><a href="#">Blog</a></li>
              <li class="footer-links"><a href="#">Careers</a></li>
              <li class="footer-links"><a href="#">Gift Cards</a></li>
            </ul>
          </div>
          <div class="col-lg-2">
            <h5 style="padding: 20px; padding-left: 0px">Top Cities</h5>
            <ul>
              <li class="footer-links"><a href="#">Karachi</a></li>
              <li class="footer-links"><a href="#">Paris</a></li>
              <li class="footer-links"><a href="#">London</a></li>
              <li class="footer-links"><a href="#">New York</a></li>
              <li class="footer-links"><a href="#">Lahore</a></li>
            </ul>
          </div>
          <div class="col-lg-2">
            <h5 style="padding: 20px; padding-left: 0px">Explore</h5>
            <ul>
              <li class="footer-links"><a href="#">Intercity Rides</a></li>
              <li class="footer-links"><a href="#">Limousine Service</a></li>
              <li class="footer-links"><a href="#">Chauffeur Service</a></li>
              <li class="footer-links"><a href="#">Private Car Service</a></li>
              <li class="footer-links"><a href="#">Ground Transportation</a></li>
              <li class="footer-links"><a href="#">Airport Transfer</a></li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h5 style="padding: 20px; padding-left: 0px">Classes</h5>
            <ul>
              <li class="footer-links"><a href="#">Business</a></li>
              <li class="footer-links"><a href="#">First</a></li>
              <li class="footer-links"><a href="#">XL</a></li>
              <li class="footer-links"><a href="#">Assistant</a></li>
            </ul>
          </div>
          <div class="col-lg-3">
            <h5 style="padding: 20px; padding-left: 0px">Download the app</h5>
            <a href="#"><img :src="applee" alt="apple" style="margin-bottom: 5px" /></a><br />
            <a href="#"><img :src="googlee" alt="google" /></a><br />
            <h6 style="margin-top: 20px; margin-bottom: 20px">Follow Us</h6>
            <br />
            <div style="color: white">
              <a href="#" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" class="social-icon"><i class="fa-brands fa-twitter"></i></a>
              <a href="#" class="social-icon"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.social-icon {
  padding: 10px;
  color: #fff;
}

.contact-section {
  background-color: #000000; /* Black background for the section */
  height: 550px;
  color: white;
}

.footer-header {
  border-bottom: 1px solid #ffffff; /* White border */
}

.footer-header .container {
  display: flex;
  align-items: center;
}

.footer-header .row {
  width: 100%;
}

.footer-header .col-lg-3 {
  display: flex;
  align-items: center;
}

.footer-header .col-lg-3 img {
  max-width: 100%; /* Ensure the logo scales properly */
}

.footer-header .col-lg-3,
.footer-header .col-lg-6 {
  display: flex;
  align-items: center;
}

.footer-header .col-lg-6 {
  justify-content: end;
}

.footer-header h6 {
  margin: 0; /* Remove default margin */
  font-weight: bold; /* Bold text for "Follow Us" */
  font-size: 16px; /* Adjust font size */
}

.footer-header .social-icon {
  padding: 10px;
  color: #ffffff; /* White color for the icons */
  font-size: 18px; /* Adjust font size if needed */
  text-decoration: none; /* Remove underline */
  transition: color 0.3s ease;
}

.footer-header .social-icon:hover {
  color: #ff5e00; /* Orange hover color */
}

.fa-phone {
  margin-right: 8px;
  font-size: 18px;
  color: #ffffff; /* White color for the phone icon */
}

.footer-body .col-lg-2 ul,
.footer-body .col-lg-3 ul {
  padding: 0; /* Remove extra padding from the ul */
  list-style: none; /* Remove default list styling */
}

.footer-body .footer-links {
  padding: 5px;
}

.footer-body .footer-links a {
  text-decoration: none; /* Remove underline */
  color: #ffffff; /* White color for links */
}

.footer-body .footer-links a:hover {
  color: #ff5e00; /* Orange hover color */
}

.features .container {
  padding-top: 100px;
  padding-bottom: 40px;
}

.features .row:first-child {
  margin-bottom: 30px;
}

.features .row:first-child h2 {
  font-size: 30px;
}

.features .row p {
  font-size: 15px;
}

.features .row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.features .col-lg-4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.features img {
  max-width: 100px;
  /* Ensure all images have consistent size */
  margin-bottom: 15px;
}

.features h5 {
  font-size: 18px;
  margin-top: 10px;
}

.latest-news {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgb(213, 250, 255);
  color: rgb(0, 0, 0);
  padding: 75px 0;
  align-items: center;
  justify-content: center;
}

.latest-news .col-lg-12 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.card {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

.solid-up-right {
  color: #000000;
}

.reliability {
  padding: 80px;
  background-color: #ffffff; /* Light gray background */
}

.reliability .container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.reliability img {
  height: auto; /* Maintain aspect ratio */
  display: block;
  margin: 0 auto; /* Center the image within its container */
}

.custom-bullets {
  list-style: none; /* Remove default bullet points */
  padding-left: 20px; /* Add some padding for alignment */
}

.custom-bullets li {
  position: relative;
  padding-left: 30px; /* Space for the custom bullet image */
  margin-bottom: 10px; /* Space between list items */
}

.custom-bullets li::before {
  content: url('../assets/custom bullet2.png'); /* Replace with your image path */
  position: absolute;
  left: 0;
  top: 0;
  width: 20px; /* Adjust width of the image */
  height: 20px; /* Adjust height of the image */
}

.reliability .r-con1 {
  background-color: #c4c4c4;
}

.our-services .os-col1 {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.more-fleet button {
  background-color: transparent;
  color: #000000;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.our-fleet-title {
  text-align: center;
}

.our-fleet-title h1 {
  margin: 0;
  font-size: 2.5rem;
  color: #000000;
}

.more-fleet {
  text-align: center;
}

.our-services {
  padding: 50px 0;
  /* Add padding to the top and bottom of the section */
  background-color: #ffe7df;
  /* Light background color */
}

.our-services .row {
  margin-bottom: 20px;
  /* Add space between rows */
}

.our-services h1 {
  text-align: center;
  margin-bottom: 40px;
  /* Space between the heading and the rest of the content */
}

.our-services img {
  height: auto;
  display: block;
  margin: auto;
}

.our-services h2 {
  margin-bottom: 20px;
  /* Space between the heading and the paragraph */
}

.our-services p {
  margin-bottom: 20px;
  /* Space between the paragraph and the button */
  line-height: 1.6;
}

.our-services .htw-explore-btn {
  background-color: transparent;
  /* Orange background */
  color: #000000;
  /* White text */
  cursor: pointer;
  font-size: 16px;
  border: none;
  transition: background-color 0.3s;
  /* Smooth transition for hover effect */
}

.our-services .htw-explore-btn i {
  margin-left: 10px;
  /* Space between the text and the icon */
}

.our-services .col-lg-6:last-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Center content horizontally */
}

.how-it-works {
  padding-top: 90px;
  padding-bottom: 50px;
  text-align: center;
  background-color: #ffffff;
  /* Optional: Add background color */
}

.how-it-works h1 {
  font-size: 36px;
  margin-bottom: 40px;
}

.how-it-works .col-lg-4 {
  margin-bottom: 30px;
  gap: 20px;
}

.how-it-works img {
  max-width: 100px;
  margin-bottom: 20px;
}

.how-it-works h1 {
  padding-bottom: 20px;
}

.how-it-works h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.how-it-works p {
  font-size: 16px;
  color: #666;
}

.home {
  padding-bottom: 40px;
  display: flex;
  align-items: center;
  /* Vertically center content */
}

.home-content {
  padding-top: 130px;
  padding-right: 100px;
  /* Adjust right padding for spacing */
}

.home-content p {
  font-size: 18px;
  margin-bottom: 10px;
}

.home-content h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.search-menu-horizontal {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.dropdown-container {
  flex: 1;
}

.search-button {
  background-color: #ff6600;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
}

.partners {
  margin-top: 20px;
}

.partner-logos {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.partner-logos img {
  max-width: 100%;
  height: auto;
}

.h-col2 {
  display: flex;
  justify-content: flex-start;
  /* Align the image to the extreme left */
}

.img-fluid {
  max-width: 100%;
  height: auto;
}
</style>
