<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import northEastArrow from '../assets/north east arrow.png'
import shield from '../assets/shield.png'
import safety from '../assets/safety.png'
import price from '../assets/price.png'
import monitor from '../assets/monitor.png'
import ellipse from '../assets/ellipse.png'
import whiteLine from '../assets/white line.png'
import berlin from '../assets/berlin.png'
import paris from '../assets/paris.png'
import newYork from '../assets/new york.png'
import london from '../assets/london.png'
import carManSuitcase from '../assets/car man suitcase.png'
import northEastArrowWhite from '../assets/north east arrow white.png'
import openedTrunkCar from '../assets/opened trunk car.png'
import limousine from '../assets/limousine.png'
import phone1 from '../assets/phone 1.png'
import hotwheels from '../assets/hotwheels.png'
import driver from '../assets/driver.png'
import number8bg from '../assets/numbers8bg.png'
import curlyHairWoman from '../assets/curly hair woman.png'
import manAndWomanWithBag from '../assets/man and woman with bag.png'
import thumbsUpGirl from '../assets/thumbs up girl.png'
import manUsingPhone from '../assets/man using phone.png'
import northEastButtonWhite from '../assets/north east button white.png'
import ebaa from '../assets/ebaa.png'
import nla from '../assets/nla.png'
import nbaa from '../assets/nbaa.png'
import taca from '../assets/taca.png'
import logo from '../assets/luxride.png'
import googlee from '../assets/googlee.png'
import applee from '../assets/applee.png'

import FleetSlider from '@/components/FleetSlider.vue'
import ReviewSlider from '@/components/ReviewSlider.vue'

export default {
  setup() {
    return {
      northEastArrow,
      shield,
      safety,
      price,
      monitor,
      ellipse,
      whiteLine,
      london,
      berlin,
      newYork,
      paris,
      carManSuitcase,
      northEastArrowWhite,
      openedTrunkCar,
      limousine,
      phone1,
      hotwheels,
      driver,
      number8bg,
      curlyHairWoman,
      manAndWomanWithBag,
      thumbsUpGirl,
      manUsingPhone,
      northEastButtonWhite,
      ebaa,
      nla,
      nbaa,
      taca,
      logo,
      applee,
      googlee
    }
  },
  data() {
    return {
      WhyUsArray: [
        {
          id: 1,
          icon: shield,
          title: 'Safety First',
          desc: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.'
        },
        {
          id: 2,
          icon: safety,
          title: 'Prices With No Surprises',
          desc: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.'
        },
        {
          id: 3,
          icon: price,
          title: 'Private Travel Solutions',
          desc: 'Both you and your shipments will travel with professional drivers. Always with the highest quality standards.'
        }
      ],

      sectionTitle: 'Make Your Trip Your Way With Us',

      activeStep: 1
    }
  },
  components: {
    CContainer,
    CRow,
    CCol,
    FleetSlider,
    ReviewSlider
  }
}
</script>

<template>
  <section class="home">
    <CContainer>
      <CRow class="align-items-center">
        <CCol lg="6">
          <div class="content">
            <h1>Best Prices for Private Transfer</h1>
            <p>
              Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas
              ultrices.
            </p>
            <button class="fleet-btn">
              View Our Fleet <img :src="northEastArrow" alt="Arrow" />
            </button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="trip">
    <CContainer>
      <CRow>
        <CCol lg="12">
          <h1>{{ sectionTitle }}</h1>
        </CCol>
      </CRow>
      <CRow>
        <CCol lg="4" v-for="(item, index) in WhyUsArray" :key="index">
          <div class="trip-card">
            <CRow>
              <CCol lg="3">
                <div class="trip-card-icon">
                  <img :src="item.icon" />
                </div>
              </CCol>
            </CRow>
            <CRow>
              <h5 style="padding-bottom: 15px">{{ item.title }}</h5>
              <p style="padding-bottom: 15px">
                {{ item.desc }}
              </p>
            </CRow>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="our-fleet">
    <CContainer>
      <CRow class="header-row">
        <CCol lg="12">
          <div class="header-title">
            <h1>Our Fleet</h1>
          </div>
          <div class="more-header">
            <button style="background-color: transparent; border-color: transparent" onclick="">
              More News <img :src="northEastArrow" />
            </button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
    <FleetSlider></FleetSlider>
  </section>

  <section class="how-it-works">
    <CContainer class="htw-con">
      <CRow class="align-items-center">
        <CCol lg="5">
          <CRow>
            <CCol lg="12">
              <h1>How It Works</h1>
            </CCol>
          </CRow>
          <CRow class="step">
            <CCol lg="1">
              <img :src="ellipse" alt="Ellipse" class="ellipse" />
              <!-- <div class="line"></div> -->
            </CCol>
            <CCol lg="11">
              <h5>Create Your Route</h5>
              <p>
                Enter your pickup & dropoff locations or the number of hours you wish to book a car
                and driver for.
              </p>
            </CCol>
          </CRow>
          <CRow class="step">
            <CCol lg="1">
              <img :src="ellipse" alt="Ellipse" class="ellipse" />
              <!-- <div class="line"></div> -->
            </CCol>
            <CCol lg="11">
              <h5>Choose Vehicle For You</h5>
              <p>
                On the day of your ride, you will receive two email and SMS updates - one informing
                you that.
              </p>
            </CCol>
          </CRow>
          <CRow class="step">
            <CCol lg="1">
              <img :src="ellipse" alt="Ellipse" class="ellipse" />
            </CCol>
            <CCol lg="11">
              <h5>Enjoy The Journey</h5>
              <p>
                After your ride has taken place, we would appreciate it if you could rate your car
                and driver.
              </p>
            </CCol>
          </CRow>
        </CCol>
        <CCol lg="7" class="text-center">
          <img :src="monitor" class="hiw-img" alt="How it works illustration" />
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="top-cities">
    <CContainer>
      <CRow class="header-row">
        <CCol lg="12">
          <div class="header-title">
            <h1>Top Cities</h1>
          </div>
          <div class="more-header">
            <button style="background-color: transparent; border-color: transparent" onclick="">
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

  <section class="intercity-rides">
    <CContainer fluid style="padding: 0px">
      <CRow>
        <CCol lg="6">
          <img :src="openedTrunkCar" />
        </CCol>
        <CCol lg="6">
          <div class="content">
            <h1>Intercity Rides</h1>
            <p style="font-size: 95%">
              The price of tickets for low-cost airlines for a specific route has a much larger
              spread than that of regular airlines. It depends on the time to departure, demand and
              competition on the route. Unlike regular airlines, low-cost airlines rarely offer
              cheap tickets more than 3 months before departure.
            </p>
            <button class="more-details-btn">
              More Details
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

  <section class="numbers">
    <CContainer>
      <CRow class="align-items-center justify-content-center">
        <CCol lg="6">
          <div class="text">
            <h3>Showcase some impressive numbers.</h3>
          </div>
        </CCol>
        <CCol lg="6">
          <CRow class="align-items-center justify-content-center">
            <CCol lg="3" class="number-box">
              <h3>285</h3>
              <p>Vehicles</p>
            </CCol>
            <CCol lg="3" class="number-box">
              <h3>97</h3>
              <p>Awards</p>
            </CCol>
            <CCol lg="4" class="number-box">
              <h3>13K</h3>
              <p>Happy Customers</p>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="reviews">
    <CContainer>
      <CRow>
        <CCol lg="5">
          <img :src="curlyHairWoman" />
        </CCol>
        <CCol lg="7"> </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="latest-news">
    <CContainer>
      <CRow class="header-row">
        <CCol lg="12">
          <div class="header-title">
            <h1>Latest From News</h1>
          </div>
          <div class="more-header">
            <button
              style="color: white; background-color: transparent; border-color: transparent"
              onclick=""
            >
              More News <img :src="northEastArrowWhite" />
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
              <a href="#" class="solid-up-right"><img :src="northEastButtonWhite" /></a>
            </div>
          </div>
        </CCol>
        <CCol lg="4">
          <div class="card">
            <img :src="thumbsUpGirl" class="card-img-top" alt="Culture Image" />
            <div class="card-body">
              <p class="card-text">Culture</p>
              <h5 class="card-title">Explore the big things happening in Dallas</h5>
              <a href="#" class="solid-up-right"><img :src="northEastButtonWhite" /></a>
            </div>
          </div>
        </CCol>
        <CCol lg="4">
          <div class="card">
            <img :src="manUsingPhone" class="card-img-top" alt="News Image" />
            <div class="card-body">
              <p class="card-text">News</p>
              <h5 class="card-title">LA's worst traffic areas and how to avoid them</h5>
              <a href="#" class="solid-up-right"><img :src="northEastButtonWhite" /></a>
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

  <section class="contact">
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
.home {
  background-image: url('../assets/home8bg.png');
  height: 760px;
  color: white;
  background-size: cover; /* Ensures the background image covers the entire section */
  background-position: center; /* Centers the background image */
  display: flex;
  align-items: center; /* Vertically centers the content */
}

.content {
  max-width: 500px;
}

.home h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.home p {
  font-size: 1rem;
  margin-bottom: 30px;
}

.fleet-btn {
  background-color: #ffffff; /* Orange color for the button */
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.fleet-btn img {
  margin-left: 10px;
  width: 16px;
  height: 16px;
}

.fleet-btn:hover {
  background-color: #e65400; /* Darken button color on hover */
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

.latest-news .card {
  background-color: transparent;
  color: white;
  border: none;
}

.latest-news .col-lg-12 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.latest-news {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgb(0, 0, 0);
  color: white;
  padding: 60px 0;
  align-items: center;
  justify-content: center;
}

.reviews img {
  width: 60%;
}

.reviews {
  justify-content: center;
  align-items: center;
  padding: 70px 0;
}

.numbers {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e95440;
  color: white;
  background-image: url('../assets/numbers8bg.png');
  background-size: cover;
  background-position: center;
  padding: 50px 0;
}

.numbers .text {
  padding-left: 80px;
  padding-right: 80px;
}

.number-box h3 {
  margin-bottom: 0px;
}

.numbers .text h3 {
  font-size: 2rem;
  margin-bottom: 0px;
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
  margin-bottom: 50px;
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

.intercity-rides .content {
  padding-top: 180px;
  padding-bottom: 70px;
  padding-left: 70px;
  padding-right: 70px;
  display: block;
  align-items: center;
  justify-content: center;
}

.more-details-btn {
  padding: 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
}

.intercity-rides img {
  max-width: auto;
  height: 600px;
  width: 100%;
  object-fit: cover;
}

.more-details-btn {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.more-details-btn img {
  margin-left: 8px; /* Add space between text and arrow icon */
}

.more-details-btn:hover {
  background-color: #ff5e00;
}

.top-cities p {
  margin-top: 15px;
  margin-bottom: 5px;
}

.top-cities {
  padding: 50px 0;
}

.tp-2ndrow .topCities-card {
  margin-bottom: 20px;
  margin-right: 15px;
}

.topCities-card .card-img-top {
  border-radius: none;
  width: 95%;
}

.top-cities .col-lg-12 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.topCities-card .p {
  margin-bottom: 15px;
}

.how-it-works {
  background-image: url('../assets/hiw8bg.png'); /* Use dark background image */
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  color: white;
}

.how-it-works .htw-con {
  max-width: 1200px;
}

.how-it-works .hiw-img {
  width: 65%; /* Adjust the monitor image size */
  display: block;
  margin: 0 auto;
}

.how-it-works h1 {
  font-size: 40px;
  margin-bottom: 30px;
  color: #fff;
}

.how-it-works h5 {
  font-size: 20px;
  color: #fff;
  font-weight: bold;
}

.how-it-works p {
  font-size: 16px;
  color: #ccc;
  margin-bottom: 20px;
}

.how-it-works .step {
  margin-bottom: 30px;
}

/* Ellipse and Line Styling */
.how-it-works .ellipse {
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 50%;
  display: block;
  margin-bottom: 5px;
}

.how-it-works .line {
  width: 2px;
  height: 50px;
  background-color: #fff;
  margin: 0 auto;
}

.our-fleet {
  padding: 40px 0;
}

.more-header img {
  width: 17px;
  height: 17px;
  margin-left: 5px;
}

.header-row .col-lg-12 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}

.trip {
  background-color: #fdeeec;
  justify-content: center;
  padding: 60px 0;
  align-items: center;
}

.trip .trip-card {
  background-color: white;
  padding: 20px;
}

.trip h1 {
  text-align: center;
  padding-bottom: 15px;
}

.trip-card-icon img {
  width: 44px;
  height: 44px;
  object-fit: contain;
  margin-bottom: 15px;
}

body {
  font-family: 'DM Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
