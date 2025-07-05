<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import threePeopleImage from '../assets/3 people image.png'
import homeBg from '../assets/03 home main bg.png'
import ebaa from '../assets/ebaa.png'
import nla from '../assets/nla.png'
import nbaa from '../assets/nbaa.png'
import taca from '../assets/taca.png'
import priceIcon from '../assets/price icon.png'
import safetyIcon from '../assets/safety icon.png'
import carIcon from '../assets/car icon.png'
import businessClass from '../assets/business car.png'
import one from '../assets/1.png'
import verticalLine from '../assets/verticle line.png'
import two from '../assets/2.png'
import three from '../assets/3.png'
import aunty from '../assets/aunty.png'
import oss1 from '../assets/oss1.png'
import oss2 from '../assets/oss2.png'
import oss3 from '../assets/oss3.png'
import oss4 from '../assets/oss4.png'
import reliability from '../assets/reliability.png'
import manAndWomanWithBag from '../assets/man and woman with bag.png'
import thumbsUpGirl from '../assets/thumbs up girl.png'
import manUsingPhone from '../assets/man using phone.png'
import appleee from '../assets/appleee.png'
import googleee from '../assets/googleee.png'
import applee from '../assets/applee.png'
import googlee from '../assets/googlee.png'
import mobiles from '../assets/mobiles.png'
import logo from '../assets/luxride.png'

export default {
  setup() {
    return {
      threePeopleImage,
      homeBg,
      ebaa,
      nla,
      nbaa,
      taca,
      priceIcon,
      safetyIcon,
      carIcon,
      businessClass,
      one,
      verticalLine,
      two,
      three,
      aunty,
      oss1,
      oss2,
      oss3,
      oss4,
      reliability,
      manAndWomanWithBag,
      thumbsUpGirl,
      manUsingPhone,
      appleee,
      googleee,
      mobiles,
      logo,
      applee,
      googlee
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
        <CCol lg="6">
          <div style="padding-right: 120px">
            <h1>Hire a Personal Driver for Long-Distance Road Trip</h1>
            <button class="online-booking-now-btn">
              Online Booking Now <i class="fa-solid fa-square-arrow-up-right"></i>
            </button>
          </div>
        </CCol>
        <CCol lg="6">
          <img :src="threePeopleImage" style="width: 125%" />
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="partners">
    <CContainer>
      <CRow>
        <CCol lg="4">
          <h5>The partners who sell our products</h5>
        </CCol>
        <CCol lg="2">
          <img :src="taca" alt="" />
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
      </CRow>
    </CContainer>
  </section>

  <section class="features">
    <CContainer>
      <CRow>
        <CCol lg="4">
          <img :src="safetyIcon" alt="" />
          <h6>Safety First</h6>
          <p>
            Both you and your shipments will travel with professional drivers. Always with the
            highest quality standards.
          </p>
        </CCol>
        <CCol lg="4">
          <img :src="priceIcon" alt="" />
          <h6>Prices With No Surprises</h6>
          <p>
            Both you and your shipments will travel with professional drivers. Always with the
            highest quality standards.
          </p>
        </CCol>
        <CCol lg="4">
          <img :src="carIcon" alt="" />
          <h6>Private Travel Solutions</h6>
          <p>
            Both you and your shipments will travel with professional drivers. Always with the
            highest quality standards.
          </p>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="howItWorks">
    <CContainer>
      <CRow>
        <CCol lg="12">
          <h1>How It Works</h1>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg="6">
          <CRow>
            <CCol lg="2">
              <img :src="one" alt="Step 1 Icon" />
              <img :src="verticalLine" alt="Vertical Line" class="line" />
            </CCol>
            <CCol lg="10">
              <h6>Create Your Route</h6>
              <p>
                Enter your pickup & dropoff locations or the number of hours you wish to book a car
                and driver for.
              </p>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg="2">
              <img :src="two" alt="Step 2 Icon" />
              <img :src="verticalLine" alt="Vertical Line" class="line" />
            </CCol>
            <CCol lg="10">
              <h6>Choose Vehicle For You</h6>
              <p>Select the vehicle that best suits your needs and preferences.</p>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg="2">
              <img :src="three" alt="Step 3 Icon" />
            </CCol>
            <CCol lg="10">
              <h6>Enjoy The Journey</h6>
              <p>Relax and enjoy your ride, knowing everything has been taken care of.</p>
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="6">
          <img :src="aunty" style="width: 80%" />
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="reliability-worldwide">
    <CContainer>
      <CRow>
        <CCol lg="6">
          <img :src="reliability" alt="Reliability Worldwide" class="rel-img" style="width: 80%" />
        </CCol>
        <CCol lg="6">
          <div style="padding: 30px">
            <h6 style="font-size: 3rem; padding-bottom: 10px">Reliability, Worldwide</h6>
            <p>Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.</p>
            <ul class="custom-bullets">
              <li>Affordable</li>
              <li>Punctual</li>
              <li>Professional</li>
            </ul>
          </div>
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
            <button style="background-color: transparent; border-color: transparent" onclick="">
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

  <section class="download-section">
    <CContainer>
      <CRow class="ds-row1">
        <CCol lg="6">
          <h1>Download the app</h1>
          <p>
            Have a personal driver at your fingertips no matter where you are with our easy-to-use
            smartphone app.
          </p>
        </CCol>
      </CRow>
      <CRow class="ds-row2">
        <CCol lg="6" class="ds-col2">
          <a href="#" class="solid-up-right" style="padding: 10px"
            ><img :src="appleee" alt="apple"
          /></a>
          <a href="#" class="solid-up-right"><img :src="googleee" alt="google" /></a>
        </CCol>
      </CRow>
    </CContainer>
    <img :src="mobiles" alt="extreme right image" class="extreme-right-image" />
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
            <i class="fa-regular fa-clock"></i>Mon-Sat: 09:00 - 17:00 - Sun: Closed
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

.download-section {
  height: 430px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #ff4027;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.download-section .ds-row1 {
  padding-bottom: 10px;
  padding-left: 150px;
}

.download-section .ds-row2 {
  padding-left: 150px;
}

.download-section .ds-col2 {
  display: flex;
  align-items: center;
}

.extreme-right-image {
  position: relative;
  right: 0;
  bottom: 0;
  max-height: 100%;
  max-width: 50%; /* Adjust this to fit your design */
}

.latest-news {
  height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgb(255, 255, 255);
  padding: 20px;
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
  border-color: white;
}

.solid-up-right {
  color: #000;
}

.reliability-worldwide {
  padding: 80px;
  background-color: #ffffff;
  /* White background */
}

.reliability-worldwide .container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.reliability-worldwide img {
  height: auto;
  /* Maintain aspect ratio */
  display: block;
  margin: 0 auto;
  /* Center the image within its container */
}

.custom-bullets {
  list-style: none;
  /* Remove default bullet points */
  padding-left: 20px;
  /* Add some padding for alignment */
}

.custom-bullets li {
  position: relative;
  padding-left: 30px;
  /* Space for the custom bullet image */
  margin-bottom: 10px;
  /* Space between list items */
}

.custom-bullets li::before {
  content: url('../assets/custom bullet2.png');
  /* Replace with your image path */
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  /* Adjust width of the image */
  height: 20px;
  /* Adjust height of the image */
}

.our-services .col-lg-12 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
}

.our-services {
  background-color: #000000;
  color: white;
}

.our-services-title h1 {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
}

.more-services button {
  color: #fff;
  border: none;
  background-color: #000000;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
}

.more-services button i {
  margin-left: 10px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.text-overlay {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
}

.hover-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  text-align: center;
  border-radius: 10px;
}

.hover-content p {
  margin-bottom: 10px;
}

.hover-content button {
  background-color: #ff6600;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

.hover-content button:hover {
  background-color: #e65c00;
}

.image-container:hover .hover-content {
  transform: translateY(0);
}

/* Swiper customization */
.swiper-pagination-bullet {
  background-color: #fff;
}

.swiper-button-prev,
.swiper-button-next {
  color: #fff;
}

.howItWorks {
  padding: 50px 0;
  background-color: rgb(250, 233, 224);
  /* Light peach background */
}

.howItWorks h1 {
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}

.howItWorks .col-lg-2 img:first-child {
  display: block;
  margin-bottom: 10px;
  /* Space between icon and line */
  margin-top: 10px;
  margin-left: auto;
  /* Centering icon if needed */
  margin-right: auto;
  /* Centering icon if needed */
}

.howItWorks .col-lg-2 img.line {
  width: 2px;
  height: 70%;
  /* Adjust height as needed */
  display: block;
  margin: 0 auto;
  /* Center vertical line */
}

.howItWorks .CRow {
  margin-bottom: 30px;
  /* Increased spacing between steps */
}

.howItWorks h6 {
  font-size: 1.25rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.howItWorks p {
  font-size: 1rem;
  color: #555;
}

.features .col-lg-4 {
  flex: 1;
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
}

.features .col-lg-4:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.features h6 {
  margin-top: 15px;
  font-weight: bold;
  color: #333;
}

.features p {
  margin-top: 10px;
  color: #666;
}

.features img {
  max-width: 60px;
  height: auto;
  margin-bottom: 15px;
}

.features {
  padding: 75px 0;
  background-color: #ffffff;
}

.features .CContainer {
  display: flex;
  justify-content: center;
}

.features .CRow {
  display: flex;
  gap: 30px;
  /* Adjust this value to control spacing between columns */
  width: 100%;
  max-width: 1200px;
  /* Optional: to constrain the maximum width of the row */
}

.partners {
  padding: 50px 0;
  background-color: #F6F6F6;
}

.partners .col-lg-4 {
  padding-right: 150px;
  justify-content: space-evenly;
}

.partners .col-lg-2 {
  justify-content: space-evenly;
  text-align: center;
}

.home {
  height: 550px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
  background-image: url('../assets/03 home main bg.png');
  display: flex;
  align-items: center;
  justify-content: center;
}

.home .container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.home .row {
  align-items: center;
  width: 100%;
}

.home .col-lg-6 img {
  height: auto;
  display: block;
  margin: 0 auto;
}

.online-booking-now-btn {
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(255, 102, 0);
  color: white;
  border: none;
  margin: 10px;
  margin-left: 0px;
  cursor: pointer;
}
</style>
