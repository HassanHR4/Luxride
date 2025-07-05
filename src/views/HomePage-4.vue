<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import googlee from '../assets/googlee.png'
import applee from '../assets/applee.png'
import ebaa from '../assets/ebaa.png'
import nla from '../assets/nla.png'
import nbaa from '../assets/nbaa.png'
import taca from '../assets/taca.png'
import manAndWomanWithBag from '../assets/man and woman with bag.png'
import thumbsUpGirl from '../assets/thumbs up girl.png'
import manUsingPhone from '../assets/man using phone.png'
import logo from '../assets/luxride.png'
import oss1 from '../assets/oss1.png'
import oss2 from '../assets/oss2.png'
import oss3 from '../assets/oss3.png'
import oss4 from '../assets/oss4.png'
import trip1 from '../assets/trip1.png'

export default {
  setup() {
    return {
      ebaa,
      nla,
      nbaa,
      taca,
      manAndWomanWithBag,
      thumbsUpGirl,
      manUsingPhone,
      logo,
      googlee,
      applee,
      oss1,
      oss2,
      oss3,
      oss4,
      trip1
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
          <div class="home-title">
            <p>Where Would You Like To Go?</p>
            <h1>Personal Driver Service in New York</h1>
            <button class="view-our-fleet-btn">
              View Our Fleet <i class="fa-solid fa-square-arrow-up-right"></i>
            </button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
    <CContainer>
      <CRow>
        <CCol lg="3">
          <div class="home-imgs">
            <img :src="oss1" style="width: 300px" />
          </div>
        </CCol>
        <CCol lg="3">
          <div class="home-imgs">
            <img :src="oss2" style="width: 300px" />
          </div>
        </CCol>
        <CCol lg="3">
          <div class="home-imgs">
            <img :src="oss3" style="width: 300px" />
          </div>
        </CCol>
        <CCol lg="3">
          <div class="home-imgs">
            <img :src="oss4" style="width: 300px; height: 324px" />
          </div>
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

  <section class="trip">
    <CContainer>
      <CRow>
        <CCol lg="12">
          <h1>We make sure that your every trip is comfortable</h1>
        </CCol>
      </CRow>
    </CContainer>
    <CContainer>
      <CRow>
        <CCol lg="6">
          <div class="row trip-option">
            <CCol lg="3">
              <div class="trip-imgs">
                <img :src="trip1" alt="Luxury Limousine Selection" />
              </div>
            </CCol>
            <CCol lg="9">
              <h5>Luxury Limousine Selection</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
          <div class="row trip-option">
            <CCol lg="3">
              <div class="trip-imgs">
                <img :src="trip1" alt="Luxury Limousine Selection" />
              </div>
            </CCol>
            <CCol lg="9">
              <h5>Luxury Limousine Selection</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
          <div class="row trip-option">
            <CCol lg="3">
              <div class="trip-imgs">
                <img :src="trip1" alt="Luxury Limousine Selection" />
              </div>
            </CCol>
            <CCol lg="9">
              <h5>Luxury Limousine Selection</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
        </CCol>
        <CCol lg="6">
          <div class="row trip-option">
            <CCol lg="3">
              <div class="trip-imgs">
                <img :src="trip1" alt="Luxury Limousine Selection" />
              </div>
            </CCol>
            <CCol lg="9">
              <h5>Luxury Limousine Selection</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
          <div class="row trip-option">
            <CCol lg="3">
              <div class="trip-imgs">
                <img :src="trip1" alt="Luxury Limousine Selection" />
              </div>
            </CCol>
            <CCol lg="9">
              <h5>Luxury Limousine Selection</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
          <div class="row trip-option">
            <CCol lg="3">
              <div class="trip-imgs">
                <img :src="trip1" alt="Luxury Limousine Selection" />
              </div>
            </CCol>
            <CCol lg="9">
              <h5>Luxury Limousine Selection</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
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
        <CCol lg="6">
          <img :src="oss1" style="width: 70%" />
        </CCol>
        <CCol lg="6">
          <div style="align-items: center">
            <h2>Create Your Route</h2>
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

.latest-news {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgb(255, 226, 209);
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

.how-it-works {
  padding: 50px 0; /* Add padding to the top and bottom of the section */
  background-color: #ffffff; /* Light background color */
}

.how-it-works h1 {
  text-align: center;
  margin-bottom: 40px; /* Space between the heading and the rest of the content */
}

.how-it-works img {
  height: auto;
  display: block;
  margin: auto;
}

.how-it-works h2 {
  margin-bottom: 20px; /* Space between the heading and the paragraph */
}

.how-it-works p {
  margin-bottom: 20px; /* Space between the paragraph and the button */
  line-height: 1.6;
}

.how-it-works .htw-explore-btn {
  background-color: transparent;
  color: rgb(0, 0, 0);
  cursor: pointer;
  font-size: 16px;
  border-color: transparent;
}

.how-it-works .htw-explore-btn i {
  margin-left: 10px; /* Space between the text and the icon */
}

.how-it-works .col-lg-6:last-child {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.trip {
  padding-bottom: 80px;
  padding-top: 70px;
  background-color: rgb(255, 226, 209);
}

.trip h1 {
  text-align: center;
  padding-top: 1 0px;
  padding-bottom: 40px;
  padding-left: 250px;
  padding-right: 250px;
}

.trip-imgs img {
  width: 100%;
  display: block;
  margin: auto;
}

.trip-option {
  margin-bottom: 10px; /* Adjust as needed */
  display: flex;
  align-items: center;
}

.trip h5 {
  margin-bottom: 10px; /* Add some space between the heading and the paragraph */
}

.home {
  padding: 30px;
  position: relative;
  background-image: url('../assets/home5.png');
  background-size: cover; /* Ensure the background covers the section */
  background-position: center; /* Center the background image */
  color: #fff; /* Text color */
}

.home-title {
  padding-top: 150px;
  padding-bottom: 150px;
}

.home-title p {
  font-size: 1.25rem; /* Subtitle font size */
  margin: 0;
  color: rgba(255, 255, 255, 0.8); /* Lighter text color */
}

.home-title h1 {
  font-size: 3rem; /* Title font size */
  margin: 10px 0; /* Space below title */
}

.view-our-fleet-btn {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px 20px; /* Button padding */
  border: 2px solid white; /* Border color and size */
  border-radius: 10px; /* Rounded corners */
  background-color: transparent; /* Transparent background */
  color: white; /* Button text color */
  font-size: 1rem; /* Button font size */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover */
}

.view-our-fleet-btn:hover {
  background-color: rgb(255, 255, 255); /* Orange background on hover */
  color: rgb(0, 0, 0); /* Ensure text color remains white */
}

.home-imgs {
  position: relative;
  overflow: hidden; /* Hide overflow to maintain gradient overlay */
  padding: 0; /* Remove default padding */
}

.home-imgs img {
  width: 100%; /* Ensure images are responsive */
  height: auto; /* Maintain aspect ratio */
  display: block;
  transition: transform 0.3s ease; /* Smooth transition for scaling */
}

.home-imgs::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(255, 102, 0, 0.5), rgba(255, 102, 0, 0.5)); /* Orange gradient */
  opacity: 0; /* Hidden by default */
  transition: opacity 0.3s ease; /* Smooth transition for overlay */
  z-index: 1; /* Ensure overlay is above the image */
}

.home-imgs:hover::after {
  opacity: 1; /* Show gradient on hover */
}

.home-imgs:hover img {
  transform: scale(1.05); /* Optional: scale image slightly on hover */
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
</style>
