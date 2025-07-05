<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import googlee from '../assets/googlee.png'
import applee from '../assets/applee.png'
import blackManPointing from '../assets/black man pointing.png'
import carManSuitcase from '../assets/car man suitcase.png'
import berlin from '../assets/berlin.png'
import paris from '../assets/paris.png'
import newYork from '../assets/new york.png'
import london from '../assets/london.png'
import northEastArrow from '../assets/north east arrow.png'
import northEastArrowWhite from '../assets/north east arrow white.png'
import shield from '../assets/shield.png'
import limousine from '../assets/limousine.png'
import price from '../assets/price.png'
import blackManHoldingDoor from '../assets/black man holding door.png'
import manAndWomanWithBag from '../assets/man and woman with bag.png'
import thumbsUpGirl from '../assets/thumbs up girl.png'
import manUsingPhone from '../assets/man using phone.png'
import northEastButton from '../assets/north east button.png'
import ebaa from '../assets/ebaa.png'
import nla from '../assets/nla.png'
import nbaa from '../assets/nbaa.png'
import taca from '../assets/taca.png'
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import mobiles from '../assets/mobiles.png'
import logo from '../assets/luxride.png'
import os1 from '../assets/os1.png'
import os2 from '../assets/os2.png'
import os3 from '../assets/os3.png'

import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

export default {
  setup() {
    return {
      googlee,
      applee,
      blackManPointing,
      carManSuitcase,
      london,
      berlin,
      newYork,
      paris,
      northEastArrow,
      northEastArrowWhite,
      shield,
      price,
      limousine,
      blackManHoldingDoor,
      manAndWomanWithBag,
      thumbsUpGirl,
      manUsingPhone,
      northEastButton,
      ebaa,
      nla,
      nbaa,
      taca,
      google,
      apple,
      mobiles,
      logo,
      os1,
      os2,
      os3,
      modules: [Pagination, Navigation]
    }
  },
  components: {
    CContainer,
    CRow,
    CCol,
    Swiper,
    SwiperSlide
  }
}
</script>

<template>
  <section class="home">
    <CContainer fluid class="homeCon1">
      <div class="home-content">
        <CRow>
          <CCol lg="7" class="row1-col7">
            <h1>Download the app</h1>
            <p>
              Easily book, change, or cancel rides on the go. Think of it as peace of mind in the
              palm of your hand.
            </p>
            <a href="#" class="solid-up-right" style="padding-right: 10px">
              <img :src="applee" alt="apple" />
            </a>
            <a href="#" class="solid-up-right">
              <img :src="googlee" alt="google" />
            </a>
          </CCol>
          <CCol lg="5" class="home-img">
            <img :src="blackManPointing" alt="Pointing Man" />
          </CCol>
        </CRow>
      </div>
    </CContainer>
  </section>

  <section class="stats">
    <CContainer fluid>
      <CRow>
        <CCol lg="7">
          <CRow class="d-flex justify-content-center align-items-center">
            <CCol lg="2"> </CCol>
            <CCol lg="2" class="text-center">
              <h2>285</h2>
              <p style="font-size: 80%">Vehicles</p>
            </CCol>
            <CCol lg="2" class="text-center">
              <h2>97</h2>
              <p style="font-size: 80%">Awards</p>
            </CCol>
            <CCol lg="3" class="text-center">
              <h2>13K</h2>
              <p style="font-size: 80%">Happy Customers</p>
            </CCol>
            <CCol lg="3"> </CCol>
          </CRow>
        </CCol>
        <CCol lg="5" class="d-flex align-items-center">
          <p style="padding-right: 230px">Showcase some impressive numbers.</p>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="how-it-works">
    <CContainer>
      <CRow>
        <CCol lg="12">
          <h1 style="text-align: center; padding: 50px">How Does It Work</h1>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg="4">
          <CRow>
            <CCol lg="3">
              <h1 style="font-size: 3.5rem; font-weight: normal">01</h1>
            </CCol>
            <CCol lg="9">
              <h5 style="padding-bottom: 15px; padding-top: 5px">Create Your Route</h5>
              <p>
                Enter your pickup & dropoff locations or the number of hours you wish to book a car
                and driver for
              </p>
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="4">
          <CRow>
            <CCol lg="3">
              <h1 style="font-size: 3.5rem; font-weight: normal">02</h1>
            </CCol>
            <CCol lg="9">
              <h5 style="padding-bottom: 15px; padding-top: 5px">Choose Vehicle For You</h5>
              <p>
                On the day of your ride, you will receive two email and SMS updates one informing
                you that.
              </p>
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="4">
          <CRow>
            <CCol lg="3">
              <h1 style="font-size: 3.5rem; font-weight: normal">03</h1>
            </CCol>
            <CCol lg="9">
              <h5 style="padding-bottom: 15px; padding-top: 5px">Create Your Route</h5>
              <p>
                After your ride has taken place, we would appreciate it if you could rate your car
                and driver.
              </p>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="freedom-of-rental">
    <CContainer fluid class="forCon1">
      <CRow>
        <CCol lg="5" class="home-img">
          <img :src="carManSuitcase" />
        </CCol>
        <CCol lg="7" class="row1-col7">
          <div
            style="
              padding-top: 70px;
              padding-bottom: 70px;
              padding-left: 70px;
              padding-right: 270px;
            "
          >
            <h1>Enjoy The Freedom Of Rental Anywhere You Want</h1>
            <p>
              Nullam sed ultricies erat, nec euismod metus. Morbi porttitor sapien vitae leo
              scelerisque. Nullam sed ultricies erat.
            </p>
            <ul class="custom-bullets">
              <li>Business Class</li>
              <li>First Class</li>
              <li>Business Van/SUV</li>
              <li>Electric Class</li>
            </ul>
            <button class="see-all-vehicles-btn">
              See all vehicles
              <img
                :src="northEastArrowWhite"
                style="width: 20px; height: 20px; padding-bottom: 2px"
              />
            </button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="top-cities">
    <CContainer>
      <CRow class="header-row">
        <CCol lg="12">
          <div class="news-title">
            <h1>Top Cities</h1>
          </div>
          <div class="more-news">
            <button
              style="background-color: transparent; color: black; border-color: transparent"
              onclick=""
            >
              More Cities <img :src="northEastArrow" />
            </button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
    <CContainer class="tp2ndcon">
      <CRow class="tp-2ndrow">
        <CCol lg="3">
          <div class="topCities-card" style="width: 18rem">
            <img :src="london" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="topCities-card-text">20 routes to/from this city</p>
              <h5 class="topCities-card-title">London</h5>
            </div>
          </div>
        </CCol>
        <CCol lg="3">
          <div class="topCities-card" style="width: 18rem">
            <img :src="newYork" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="topCities-card-text">8 routes to/from this city</p>
              <h5 class="topCities-card-title">New York</h5>
            </div>
          </div>
        </CCol>
        <CCol lg="3">
          <div class="topCities-card" style="width: 18rem">
            <img :src="berlin" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="topCities-card-text">6 routes to/from this city</p>
              <h5 class="topCities-card-title">Berlin</h5>
            </div>
          </div>
        </CCol>
        <CCol lg="3">
          <div class="topCities-card" style="width: 18rem">
            <img :src="paris" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="topCities-card-text">4 routes to/from this city</p>
              <h5 class="topCities-card-title">Paris</h5>
            </div>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="our-services">
    <CContainer>
      <CRow class="header-row d-flex justify-content-between align-items-center">
        <CCol lg="6">
          <div class="our-services-title">
            <h1>Our Services</h1>
          </div>
        </CCol>
        <CCol lg="6" class="text-end">
          <div class="more-services">
            <button class="more-services-btn">
              More Services <img :src="northEastArrowWhite" />
            </button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
    <CContainer>
      <CRow>
        <div>
          <swiper
            :slidesPerView="3"
            :spaceBetween="0"
            :loop="true"
            :pagination="{
              clickable: true
            }"
            :navigation="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide>
              <div class="card" style="width: 18rem">
                <img :src="os1" class="card-img" alt="..." />
                <h6 class="card-heading">Intercity Rides</h6>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card" style="width: 18rem">
                <img :src="os2" class="card-img" alt="..." />
                <h6 class="card-heading">Chauffeur Hailing</h6>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card" style="width: 18rem">
                <img :src="os3" class="card-img" alt="..." />
                <h6 class="card-heading">Airport Transfers</h6>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card" style="width: 18rem">
                <img :src="os1" class="card-img" alt="..." />
                <h6 class="card-heading">Intercity Rides</h6>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card" style="width: 18rem">
                <img :src="os2" class="card-img" alt="..." />
                <h6 class="card-heading">Chauffeur Hailing</h6>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card" style="width: 18rem">
                <img :src="os3" class="card-img" alt="..." />
                <h6 class="card-heading">Airport Transfers</h6>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </CRow>
    </CContainer>
  </section>

  <section class="trip">
    <CContainer fluid class="tCon1">
      <CRow>
        <CCol lg="7" class="tcol1">
          <CRow>
            <CCol lg="12">
              <h2>Make Your Trip Your Way With Us</h2>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg="2">
              <img :src="shield" />
            </CCol>
            <CCol lg="10">
              <h6>Safety First</h6>
              <p>
                Both you and your shipments will travel with professional drivers. Always with the
                highest quality standards.
              </p>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg="2">
              <img :src="price" />
            </CCol>
            <CCol lg="10">
              <h6>Prices With No Surprises</h6>
              <p>
                Both you and your shipments will travel with professional drivers. Always with the
                highest quality standards.
              </p>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg="2">
              <img :src="limousine" />
            </CCol>
            <CCol lg="10">
              <h6>Private Travel Solutions</h6>
              <p>
                Both you and your shipments will travel with professional drivers. Always with the
                highest quality standards.
              </p>
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="5" class="home-img">
          <img :src="blackManHoldingDoor" style="width: 100%" />
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
              More News <img :src="northEastArrow" />
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
              <a href="#" class="solid-up-right"><img :src="northEastButton" /></a>
            </div>
          </div>
        </CCol>
        <CCol lg="4">
          <div class="card">
            <img :src="thumbsUpGirl" class="card-img-top" alt="Culture Image" />
            <div class="card-body">
              <p class="card-text">Culture</p>
              <h5 class="card-title">Explore the big things happening in Dallas</h5>
              <a href="#" class="solid-up-right"><img :src="northEastButton" /></a>
            </div>
          </div>
        </CCol>
        <CCol lg="4">
          <div class="card">
            <img :src="manUsingPhone" class="card-img-top" alt="News Image" />
            <div class="card-body">
              <p class="card-text">News</p>
              <h5 class="card-title">LA's worst traffic areas and how to avoid them</h5>
              <a href="#" class="solid-up-right"><img :src="northEastButton" /></a>
            </div>
          </div>
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

  <section class="download-section">
    <CContainer>
      <CRow class="ds-row1">
        <CCol lg="12">
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
            ><img :src="apple" alt="apple"
          /></a>
          <a href="#" class="solid-up-right"><img :src="google" alt="google" /></a>
        </CCol>
      </CRow>
    </CContainer>
    <img :src="mobiles" alt="extreme right image" class="extreme-right-image" />
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
.our-services .swiper {
  width: 99%;
  height: 100%;
}

.our-services .swiper-slide {
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.our-services .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.our-services .card {
  border-radius: 0%;
  border-color: black;
  margin-right: 0%;
}

.our-services {
  background-color: black;
  color: white;
  padding: 70px 0;
}

.our-services .header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.more-services-btn {
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  align-items: center;
}

.more-services-btn img {
  width: 17px;
  height: 17px;
  margin-left: 5px;
}

.stats {
  color: white;
}

.stats .col-lg-7 {
  background-color: #000000;
  padding: 30px;
}

.stats .col-lg-5 {
  background-color: #333333;
  padding: 30px;
}

.contact-section {
  background-color: #ffffff; /* Black background for the section */
  height: 550px;
  color: rgb(0, 0, 0);
}

.footer-header {
  padding: 15px 0;
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

.download-section {
  height: 404px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.download-section .ds-row2 .col-lg-6 {
  padding-left: 0px;
}

.download-section .ds-row1 {
  padding-bottom: 10px;
  padding-left: 83px;
}

.download-section .ds-row2 {
  padding-left: 83px;
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

.partners {
  padding: 40px;
  background-color: white;
}

.partners .col-lg-4 {
  padding-right: 150px;
  justify-content: space-evenly;
}

.partners .col-lg-2 {
  justify-content: space-evenly;
  text-align: center;
}

.latest-news {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgb(255, 255, 255);
  padding-top: 60px;
  align-items: center;
  justify-content: center;
}

.latest-news .col-lg-12 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.latest-news .card {
  border: none;
}

.trip h2 {
  padding-right: 150px;
  margin: 0px;
}

.trip .col-lg-10 {
  padding-left: 40px;
}

.trip .col-lg-7 .row {
  padding-left: 70px;
  margin: 35px;
}

.trip {
  background-color: #fdeeec;
}

.trip-text h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.trip-feature {
  margin-bottom: 20px;
}

.trip-feature img {
  max-width: 100%;
}

.trip-feature h6 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.trip-feature p {
  font-size: 1rem;
  margin-bottom: 0;
}

.home-img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-img img {
  max-width: 100%;
  height: auto;
}

.topCities-card .p {
  margin-bottom: 15px;
}

.top-cities .col-lg-12 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.topCities-card .card-img-top {
  width: 90%;
  border-radius: 5px;
}

.tp-2ndrow .topCities-card {
  margin-bottom: 20px;
  margin-right: 15px;
}

.more-news img {
  width: 17px;
  height: 17px;
}

.top-cities {
  padding: 50px 0;
}

.freedom-of-rental {
  background-image: url('../assets/region-bg.png');
  background-position: right;
  background-size: 60%;
  background-repeat: no-repeat;
}

.see-all-vehicles-btn {
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
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

.how-it-works {
  padding: 50px;
  padding-bottom: 70px;
}

.home {
  background-image: url('../assets/home7bg.png');
  background-size: 60%;
  background-position: left;
  display: flex;
  align-items: center;
  position: relative;
}

.home .row1-col7 {
  padding: 130px;
}

.home-content {
  width: 100%;
}

.home-img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding: 0px;
}

.home-img img {
  height: 100%;
  max-width: 100%;
  padding-right: 0;
  object-fit: contain;
}

.home h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.home p {
  margin-bottom: 40px;
}

.solid-up-right img {
  transition: transform 0.3s ease;
}

.solid-up-right img:hover {
  transform: translateY(-5px);
}

.dm-sans-regular {
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>