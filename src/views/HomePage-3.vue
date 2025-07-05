<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import googleee from '../assets/googleee.png'
import appleee from '../assets/appleee.png'
import hiw1 from '../assets/hiw1.png'
import hiw2 from '../assets/hiw2.png'
import hiw3 from '../assets/hiw3.png'
import ourservices4 from '../assets/our-services-4.png'
import limousine from '../assets/limousine.png'
import phone1 from '../assets/phone 1.png'
import hotwheels from '../assets/hotwheels.png'
import price from '../assets/price.png'
import safety from '../assets/safety.png'
import driver from '../assets/driver.png'
import ebaa from '../assets/ebaa.png'
import nla from '../assets/nla.png'
import nbaa from '../assets/nbaa.png'
import taca from '../assets/taca.png'
import manAndWomanWithBag from '../assets/man and woman with bag.png'
import thumbsUpGirl from '../assets/thumbs up girl.png'
import manUsingPhone from '../assets/man using phone.png'
import region from '../assets/region.png'
import logo from '../assets/luxride.png'
import applee from '../assets/applee.png'
import googlee from '../assets/googlee.png'

export default {
  setup() {
    return {
      googleee,
      appleee,
      hiw1,
      hiw2,
      hiw3,
      ourservices4,
      limousine,
      phone1,
      hotwheels,
      price,
      safety,
      driver,
      ebaa,
      nla,
      nbaa,
      taca,
      manAndWomanWithBag,
      thumbsUpGirl,
      manUsingPhone,
      region,
      logo,
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
        <CCol lg="12">
          <p>Where would you like to go?</p>
          <h1>Your Personal Driver & Chauffeur Service</h1>
          <div class="search-form">
            <form action="#" method="get">
              <div class="form-group from-box">
                <label for="from">From:</label>
                <input type="text" id="from" name="from" placeholder="Enter departure location" />
              </div>

              <div class="form-group to-box">
                <label for="to">To:</label>
                <input type="text" id="to" name="to" placeholder="Enter destination" />
              </div>

              <button type="submit"><i class="fa-solid fa-magnifying-glass"></i> Search</button>
            </form>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="chauffers">
    <CContainer>
      <CRow>
        <CCol lg="7">
          <h3>Chauffeurs at your fingertips</h3>
          <p>
            Easily book, change, or cancel rides on the go. Think of it as peace of mind in the palm
            of your hand.
          </p>
        </CCol>
        <CCol lg="5">
          <img :src="appleee" alt="" />
          <img :src="googleee" alt="" />
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="how-it-works">
    <CContainer class="htw-con1">
      <CRow class="htw-row1">
        <CCol lg="12">
          <h2 style="padding: 20px">How It Works</h2>
        </CCol>
      </CRow>
    </CContainer>
    <CContainer>
      <CRow class="htw-row2">
        <CCol lg="3">
          <img :src="hiw1" style="margin-top: 10px" />
          <h6 style="color: black">Create Your Route</h6>
          <p style="color: black">
            Enter your pickup & dropoff locations or the number of hours you wish to book a car and
            driver for.
          </p>
        </CCol>
        <CCol lg="1">
          <div class="right-arrow-button">
            <button onclick="" style="border: transparent; background-color: transparent">
              <i class="fa-regular fa-circle-right" style="font-size: 200%"></i>
            </button>
          </div>
        </CCol>
        <CCol lg="3">
          <img :src="hiw2" style="margin-top: 10px" />
          <h6 style="color: black">Create Your Route</h6>
          <p style="color: black">
            Enter your pickup & dropoff locations or the number of hours you wish to book a car and
            driver for.
          </p>
        </CCol>
        <CCol lg="1">
          <div class="right-arrow-button">
            <button onclick="" style="border: transparent; background-color: transparent">
              <i class="fa-regular fa-circle-right" style="font-size: 200%"></i>
            </button>
          </div>
        </CCol>
        <CCol lg="3">
          <img :src="hiw3" style="margin-top: 10px" />
          <h6 style="color: black">Create Your Route</h6>
          <p style="color: black">
            Enter your pickup & dropoff locations or the number of hours you wish to book a car and
            driver for.
          </p>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="our-services">
    <CContainer>
      <CRow>
        <CCol lg="5">
          <h2>Our Services</h2>
          <p>Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.</p>
          <ul class="custom-bullets">
            <li>Intercity Rides</li>
            <li>Chauffeur Hailing</li>
            <li>Airport Transfer</li>
            <li>Sprinter Class</li>
          </ul>
          <button class="learn-more-btn">
            Learn More <i class="fa-solid fa-square-arrow-up-right"></i>
          </button>
        </CCol>
        <CCol lg="7">
          <img :src="ourservices4" />
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

  <section class="partners">
    <CContainer>
      <CRow>
        <CCol lg="3">
          <h4>The partners who sell our products</h4>
        </CCol>
        <CCol lg="2">
          <img :src="ebaa" alt="" />
        </CCol>
        <CCol lg="2">
          <img :src="nbaa" alt="" />
        </CCol>
        <CCol lg="2">
          <img :src="nla" alt="" />
        </CCol>
        <CCol lg="2">
          <img :src="taca" alt="" />
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
              style="background-color: transparent; color: white; border-color: transparent"
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

  <section class="region">
    <CContainer>
      <CRow>
        <CCol lg="6" class="r-row1-col1">
          <img :src="region" style="width: 70%" />
        </CCol>
        <CCol lg="6">
          <h2>From the region, for the region</h2>
          <p>Superide operates in more than 120 cities in 18 countries from Morocco to Pakistan.</p>
          <button style="color: white">
            View All Cities <i class="fa-solid fa-square-arrow-up-right"></i>
          </button>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="contactSection">
    <div class="footer-header">
      <CContainer>
        <CRow>
          <CCol lg="3">
            <img :src="logo" alt="logo" class="img-fluid" />
          </CCol>
          <CCol lg="3"> <i class="fa fa-phone"></i> +92 321 1241445 </CCol>
          <CCol lg="6">
            <h6 style="padding-right: 20px">Follow Us</h6>
            <a href="#" class="social-icon"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    <div class="footer-body">
      <CContainer>
        <CRow>
          <CCol lg="2">
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
          </CCol>
          <CCol lg="2">
            <h5 style="padding: 20px; padding-left: 0px">Top Cities</h5>
            <ul>
              <li class="footer-links"><a href="#">Karachi</a></li>
              <li class="footer-links"><a href="#">Paris</a></li>
              <li class="footer-links"><a href="#">London</a></li>
              <li class="footer-links"><a href="#">New York</a></li>
              <li class="footer-links"><a href="#">Lahore</a></li>
            </ul>
          </CCol>
          <CCol lg="2">
            <h5 style="padding: 20px; padding-left: 0px">Explore</h5>
            <ul>
              <li class="footer-links"><a href="#">Intercity Rides</a></li>
              <li class="footer-links"><a href="#">Limousine Service</a></li>
              <li class="footer-links"><a href="#">Chauffeur Service</a></li>
              <li class="footer-links">
                <a href="#">Private Car Service</a>
              </li>
              <li class="footer-links">
                <a href="#">Ground Transportation</a>
              </li>
              <li class="footer-links"><a href="#">Airport Transfer</a></li>
            </ul>
          </CCol>
          <CCol lg="3">
            <h5 style="padding: 20px; padding-left: 0px">Classes</h5>
            <ul>
              <li class="footer-links"><a href="#">Business</a></li>
              <li class="footer-links"><a href="#">First</a></li>
              <li class="footer-links"><a href="#">XL</a></li>
              <li class="footer-links"><a href="#">Assistant</a></li>
            </ul>
          </CCol>
          <CCol lg="3">
            <h5 style="padding: 20px; padding-left: 0px">Download the app</h5>
            <a href="#"><img :src="applee" alt="apple" style="margin-bottom: 5px" /></a><br />
            <a href="#"><img :src="googlee" alt="google" /></a>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: #ffccae; /* Black background for the section */
  height: 550px;
  color: rgb(0, 0, 0);
}

.footer-header {
  border-bottom: 1px solid #dfdfdf; /* White border */
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
  color: #000000; /* White color for the icons */
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
  color: #000000; /* White color for the phone icon */
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
  color: #000000; /* White color for links */
}

.footer-body .footer-links a:hover {
  color: #ff5e00; /* Orange hover color */
}

.region {
  position: relative;
  padding: 70px;
}

.region::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/region-bg.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;
  opacity: 0.5;
  /* Adjust this for transparency */
  z-index: 0;
}

.region .container {
  position: relative;
  z-index: 1;
  /* Ensure content is above the background image */
  color: rgb(0, 0, 0);
}

.region .row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.region img {
  height: auto;
  margin-bottom: 20px;
}

.region h2 {
  font-size: 30px;
  margin-bottom: 20px;
  color: black;
  padding-right: 245px;
}

.region p {
  color: black;
  font-size: 15px;
  margin-bottom: 20px;
  padding-right: 100px;
}

.region button {
  padding: 10px 20px;
  background-color: black;
  color: rgb(0, 0, 0);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.region button:hover {
  background-color: #ff5e00;
}

.region .r.row1.col1 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.latest-news {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgb(0, 0, 0);
  color: white;
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
  border-radius: 0%;
  border-color: rgb(0, 0, 0);
  background-color: black;
  color: white;
}

.solid-up-right {
  color: #ffffff;
}

.partners {
  padding: 30px 0;
  background-color: #ffffff;
}

.partners h4 {
  margin-bottom: 20px;
}

.partners .container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.partners .row {
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

.our-services .col-lg-5 {
  margin-left: 0px;
}

.our-services .col-lg-7 {
  justify-content: center;
}

.our-services {
  padding: 60px 0;
  background-color: #ffffff;
}

.our-services .row {
  display: flex;
  align-items: center;
  padding-left: 50px;
}

.our-services h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.our-services p {
  font-size: 18px;
  margin-bottom: 20px;
  color: #666;
}

.our-services .custom-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
}

.our-services .custom-bullets li {
  font-size: 18px;
  margin-bottom: 10px;
  padding-left: 30px;
  position: relative;
  color: #333;
}

.our-services .custom-bullets li::before {
  content: url('../assets/custom bullet2.png');
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
}

.our-services img {
  width: 80%;
  height: auto;
  display: block;
  border-radius: 10px;
}

.learn-more-btn {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
}

.learn-more-btn i {
  margin-left: 10px;
}

.how-it-works {
  height: 500px;
  margin: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgb(255, 255, 255);
}

.how-it-works .row {
  display: flex;
  align-items: center;
  /* Centers items vertically */
}

.how-it-works .col-lg-3 {
  padding: 10px;
  /* Add padding for spacing */
}

.how-it-works .col-lg-1 {
  display: flex;
  justify-content: center;
  /* Center the button horizontally */
  align-items: center;
  /* Center the button vertically */
}

.how-it-works .right-arrow-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.how-it-works img {
  max-width: 100%;
  /* Ensure images fit within their columns */
  height: auto;
}

.how-it-works .htw-row2 {
  justify-content: center;
}

.how-it-works .htw-row1 {
  text-align: center;
}

.how-it-works .htw-con1 {
  color: rgb(0, 0, 0);
}

.chauffers {
  background-color: #000000; /* Black background */
  background-image: url('../assets/chauffers bg.png');
  background-size: cover; /* Ensures the image covers the entire area */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  color: white; /* White text color */
}

.chauffers h3 {
  font-size: 28px;
  font-weight: bold;
}

.chauffers p {
  font-size: 18px;
}

.chauffers .col-lg-5 {
  display: flex;
  justify-content: center;
  /* Align images to the right */
  align-items: center;
  gap: 20px;
  /* Add space between the images */
}

.chauffers .col-lg-7 {
  padding: 30px;
}

.chauffers img {
  width: 180px;
  /* Fixed width for the images */
  height: 60px;
  /* Maintain aspect ratio */
  display: block;
}

.home {
  background-color: rgb(248, 228, 220);
  background-image: url('../assets/home4.png');
  /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  color: rgb(0, 0, 0);
}

.home .container {
  max-width: 800px;
  margin: 0 auto;
}

.home p {
  font-size: 18px;
  margin-bottom: 10px;
}

.home h1 {
  font-size: 36px;
  margin-bottom: 30px;
}

.search-form {
  background-color: transparent;
  /* Transparent background */
  max-width: 310px;
  /* Set a maximum width for the form */
}

.search-form form {
  display: flex;
  flex-direction: column;
  /* Stack form groups vertically */
  gap: 20px;
  /* Space between form groups */
}

.form-group {
  background-color: #fff;
  /* White background for each box */
  padding: 10px;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-group input {
  border-color: transparent;
  width: 100%;
  font-size: 16px;
}

.search-form button {
  padding: 15px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  /* Full-width button */
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-form button:hover {
  background-color: #e55d00;
}
</style>
