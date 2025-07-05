<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import FleetSlider from '@/components/FleetSlider.vue'
import playButton from '../assets/play button.png'
import magnifierGlass from '../assets/magnifier glass.png'
import calender from '../assets/calender icon.png'
import clock from '../assets/clock icon.png'
import fromIcon from '../assets/from icon.png'
import toIcon from '../assets/to icon.png'
import safetyIcon from '../assets/safety icon 2.png'
import priceIcon from '../assets/price icon 2.png'
import travelIcon from '../assets/travel icon 2.png'
import northEastArrow from '../assets/north east arrow.png'
import northEastArrowWhite from '../assets/north east arrow white.png'
import laptop from '../assets/laptop image.png'
import ellipse from '../assets/ellipse black.png'
import region from '../assets/region10bg.png'
import manAndWomanWithBag from '../assets/man and woman with bag.png'
import thumbsUpGirl from '../assets/thumbs up girl.png'
import manUsingPhone from '../assets/man using phone.png'
import northEastButton from '../assets/north east button.png'
import ebaa from '../assets/ebaa.png'
import nla from '../assets/nla.png'
import nbaa from '../assets/nbaa.png'
import taca from '../assets/taca.png'
import logoo from '../assets/logoo.png'
import googlee from '../assets/googlee.png'
import applee from '../assets/applee.png'


export default {
  setup() {
    return {
      playButton,
      magnifierGlass,
      calender,
      clock,
      fromIcon,
      toIcon,
      safetyIcon,
      priceIcon,
      travelIcon,
      northEastArrow,
      northEastArrowWhite,
      laptop,
      ellipse,
      region,
      manAndWomanWithBag,
      thumbsUpGirl,
      manUsingPhone,
      northEastButton,
      ebaa,
      nla,
      nbaa,
      taca,
      logoo,
      applee,
      googlee
    }
  },
  components: {
    CContainer,
    CRow,
    CCol,
    FleetSlider
  }
}
</script>

<template>
  <section class="home">
    <CContainer>
      <CRow>
        <CCol lg="6">
          <div class="content">
            <h1>The Nation’s #1 Largest Personal Driver Service</h1>
            <p>
              Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas
              ultrices.
            </p>
          </div>
        </CCol>
        <CCol lg="6">
          <div class="play">
            <img :src="playButton" alt="" />
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="search-bar">
    <CContainer>
      <div class="booking">
        <div class="form-container">
          <ul class="nav-tabs">
            <li><a href="#" class="active">Distance</a></li>
            <li><a href="#">Hourly</a></li>
            <li><a href="#">Flat Rate</a></li>
          </ul>

          <!-- Form Section -->
          <form class="booking-fields">
            <div class="form-group">
              <CRow>
                <CCol lg="2">
                  <img :src="calender" alt="" />
                </CCol>
                <CCol lg="10">
                  <label for="date">Date</label>
                  <select id="date">
                    <option value="Thu, Oct 06, 2022">Thu, Oct 06, 2022</option>
                    <option value="Fri, Oct 07, 2022">Fri, Oct 07, 2022</option>
                    <option value="Sat, Oct 08, 2022">Sat, Oct 08, 2022</option>
                  </select>
                </CCol>
              </CRow>
            </div>

            <div class="form-group">
              <CRow>
                <CCol lg="2">
                  <img :src="clock" alt="" />
                </CCol>
                <CCol lg="10">
                  <label for="time">Time</label>
                  <select id="time">
                    <option value="6 PM : 15">6 PM : 15</option>
                    <option value="7 PM : 30">7 PM : 30</option>
                    <option value="8 PM : 00">8 PM : 00</option>
                  </select>
                </CCol>
              </CRow>
            </div>

            <div class="form-group">
              <CRow>
                <CCol lg="2">
                  <img :src="fromIcon" alt="" />
                </CCol>
                <CCol lg="10">
                  <label for="from">From</label>
                  <select id="from">
                    <option value="London City Airport (LCY)">London City Airport (LCY)</option>
                    <option value="Heathrow Airport (LHR)">Heathrow Airport (LHR)</option>
                    <option value="Gatwick Airport (LGW)">Gatwick Airport (LGW)</option>
                  </select>
                </CCol>
              </CRow>
            </div>

            <div class="form-group">
              <CRow>
                <CCol lg="2">
                  <img :src="toIcon" alt="" />
                </CCol>
                <CCol lg="10">
                  <label for="to">To</label>
                  <select id="to">
                    <option value="London City Airport (LCY)">London City Airport (LCY)</option>
                    <option value="Heathrow Airport (LHR)">Heathrow Airport (LHR)</option>
                    <option value="Gatwick Airport (LGW)">Gatwick Airport (LGW)</option>
                  </select>
                </CCol>
              </CRow>
            </div>

            <div class="form-group search-btn">
              <button type="submit"><img :src="magnifierGlass" alt="" /> Search</button>
            </div>
          </form>
        </div>
      </div>
    </CContainer>
  </section>

  <section class="features">
    <CContainer>
      <CRow>
        <CCol lg="4">
          <img :src="safetyIcon" alt="" />
          <h5>Safety First</h5>
          <p>
            Both you and your shipments will travel with professional drivers. Always with the
            highest quality standards.
          </p>
        </CCol>
        <CCol lg="4">
          <img :src="priceIcon" alt="" />
          <h5>Prices With No Surprises</h5>
          <p>
            Both you and your shipments will travel with professional drivers. Always with the
            highest quality standards.
          </p>
        </CCol>
        <CCol lg="4">
          <img :src="travelIcon" alt="" />
          <h5>Private Travel Solutions</h5>
          <p>
            Both you and your shipments will travel with professional drivers. Always with the
            highest quality standards.
          </p>
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
    <CContainer>
      <CRow class="align-items-center">
        <CCol lg="5">
          <CRow>
            <CCol lg="12">
              <h1>How It Works</h1>
            </CCol>
          </CRow>

          <!-- Step 1 -->
          <CRow class="step">
            <CCol lg="1" class="step-indicator">
              <img :src="ellipse" alt="Ellipse" class="ellipse" />
              <div class="line"></div>
            </CCol>
            <CCol lg="11">
              <h5>Create Your Route</h5>
              <p>
                Enter your pickup & dropoff locations or the number of hours you wish to book a car
                and driver for.
              </p>
            </CCol>
          </CRow>

          <!-- Step 2 -->
          <CRow class="step">
            <CCol lg="1" class="step-indicator">
              <img :src="ellipse" alt="Ellipse" class="ellipse" />
              <div class="line"></div>
            </CCol>
            <CCol lg="11">
              <h5>Choose Vehicle For You</h5>
              <p>
                On the day of your ride, you will receive two email and SMS updates - one informing
                you that.
              </p>
            </CCol>
          </CRow>

          <!-- Step 3 -->
          <CRow class="step">
            <CCol lg="1" class="step-indicator">
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

        <!-- Image Section -->
        <CCol lg="7" class="text-center">
          <img :src="laptop" class="hiw-img" alt="How it works illustration" />
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

  <section class="reliability">
    <CContainer>
      <CRow>
        <CCol lg="6"> </CCol>
        <CCol lg="6">
          <div class="content">
            <h1>Reliability, worldwide</h1>
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

  <section class="region">
    <CContainer>
      <CRow class="align-items-center">
        <CCol lg="6">
          <img :src="region" style="width: 90%" />
        </CCol>
        <CCol lg="6">
          <h1>From the region, for the region</h1>
          <p>Lux Ride operates in more than 120 cities in 18 countries from Morocco to Pakistan.</p>
          <button>
            View All Cities <img :src="northEastArrowWhite" class="northEastArrowWhite" />
          </button>
        </CCol>
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
              style="color: black; background-color: transparent; border-color: transparent"
              onclick=""
            >
              More News <img :src="northEastArrow" class="northEastArrow" />
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

  <section class="contact-section">
    <div class="footer-header">
      <CContainer>
        <CRow>
          <CCol lg="3">
            <img :src="logoo" alt="logo" class="img-fluid" />
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
  background-color: #000000; /* Black background for the section */
  height: 550px;
  color: rgb(255, 255, 255);
}

.footer-header {
  padding: 15px 0;
  border-bottom: 1px solid #616161; /* White border */
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

.partners {
  padding: 50px 0;
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
  background-color: white;
  color: rgb(0, 0, 0);
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
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 60px 0;
  align-items: center;
  justify-content: center;
}

.region {
  display: flex;
  justify-content: center;
  padding: 70px 0;
  background-color: #f4f4f4;
}

.region h1 {
  margin-bottom: 20px;
  color: #333;
  font-size: 3.7rem;
}

.region p {
  margin-bottom: 30px;
  color: #555;
  font-size: 1.3rem;
}

.region img {
  max-width: 100%;
  height: auto;
}

.region button {
  background-color: #e95440;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.region button img {
  margin-left: 10px;
  width: 20px;
  height: 20px;
}

.region button:hover {
  background-color: #d44336;
}

.reliability {
  height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../assets/business woman and driver.png');
  background-size: cover; /* Use cover for full background */
  background-color: #000000;
  background-position: center;
  position: relative;
}

.reliability .content {
  position: relative;
  color: black;
  background-color: rgba(255, 255, 255); /* Semi-transparent background */

  margin: 160px;
  padding: 30px;
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
  content: url('../assets/custom bullet.png'); /* Replace with your image path */
  position: absolute;
  left: 0;
  top: 0;
  width: 20px; /* Adjust width of the image */
  height: 20px; /* Adjust height of the image */
}

.numbers {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-image: url('../assets/numbers10bg.png');
  background-size: cover;
  background-color: #000000;
  background-position: center;
  padding: 70px 0;
  z-index: 1; /* Ensures content is above the overlay */
}

.numbers::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Adjust the opacity here */
  z-index: -1; /* Ensures the overlay is behind the content */
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

.how-it-works {
  background-image: url('../assets/hiw10bg.png');
  background-size: cover;
  background-position: center;
  padding: 100px 0;
  background-color: #fdeeec;
  color: #181a1f;
}

.how-it-works .htw-con {
  max-width: 1200px;
  margin: 0 auto;
}

.how-it-works .hiw-img {
  width: 100%; /* Adjust the monitor image size */
  display: block;
  margin: 0 auto;
}

.how-it-works h1 {
  font-size: 40px;
  margin-bottom: 30px;
  color: #181a1f;
}

.how-it-works h5 {
  font-size: 20px;
  color: #181a1f;
  font-weight: bold;
}

.how-it-works p {
  font-size: 16px;
  color: #181a1f;
  margin-bottom: 20px;
}

.how-it-works .step {
  margin-bottom: 30px;
}

/* Ellipse and Line Styling */
.how-it-works .ellipse {
  width: 15px;
  height: 15px;
  background-color: #fdeeec;
  border-radius: 50%;
  display: block;
  margin-bottom: 5px;
}

.how-it-works .line {
  width: 2px;
  height: 50px;
  background-color: #181a1f;
  margin: 0 auto;
}

/* Styling for Step Indicator Column */
.how-it-works .step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0px;
}

.home-img img {
  max-width: 100%;
  height: auto;
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

.northEastArrowWhite {
  width: 17px;
  height: 17px;
  transition: transform 0.3s ease;
}

.northEastArrow {
  width: 17px;
  height: 17px;
  transition: transform 0.3s ease;
}

.features .col-lg-4 {
  flex: 1;
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
}

.features h5 {
  margin-top: 15px;
  color: #000000;
}

.features p {
  margin-top: 10px;
  color: #000000;
}

.features img {
  max-width: 60px;
  height: auto;
  margin-bottom: 15px;
}

.features {
  padding: 70px 0;
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

/* Container with border around form and nav */
.form-container {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  padding-top: 0;
  background-color: #ffffff;
}

/* Navigation Tabs */
.nav-tabs {
  list-style: none;
  display: flex;
  border-bottom: 1px solid #ddd;
  padding-left: 0;
  margin-bottom: 20px;
  background-color: #ffffff;
}

.nav-tabs li a {
  padding: 10px 20px;
  display: inline-block;
  background-color: #fdeeec;
  border-radius: 5px 5px 0 0;
  text-decoration: none;
  color: #626262;
}

.nav-tabs li a.active {
  background-color: #ffffff;
  color: #000000;
  border-bottom: 1px solid transparent;
}

/* Form Fields */
.booking-fields {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.form-group {
  border: 1px solid #ddd;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.form-group label {
  margin-bottom: 5px;
}

.form-group select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  font-size: 14px;
}

/* Search Button */
.search-btn {
  flex: 0 0 150px;
}

.search-btn button {
  width: 100%;
  background-color: #ff5e3a;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-btn button:hover {
  background-color: #e55235;
}

/* Search Bar Section */
.search-bar {
  margin-top: -100px;
}

.home {
  background-image:  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/home10bg.png');
  height: 860px;
  color: white;
  display: flex;
  align-items: center; /* Centers content vertically */
}

.content,
.play {
  position: relative;
  z-index: 2; /* Ensures content is above the overlay */
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content within the column */
}

.play {
  display: flex;
  justify-content: center; /* Centers the play button horizontally */
  align-items: center; /* Centers the play button vertically */
  padding-left: 310px;
  padding-top: 50px;
}

.home h1 {
  font-size: 3.5rem;
}

.home p {
  font-size: 1.5rem;
}
</style>