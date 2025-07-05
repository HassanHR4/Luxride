<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import FleetSlider from '@/components/FleetSlider.vue'
import northEastArrowWhite from '../assets/north east arrow white.png'
import northEastArrow from '../assets/north east arrow.png'
import shield from '../assets/shield.png'
import limousine from '../assets/limousine.png'
import price from '../assets/price.png'
import blackManHoldingDoor from '../assets/black man holding door.png'
import ebaa from '../assets/ebaa.png'
import nla from '../assets/nla.png'
import nbaa from '../assets/nbaa.png'
import taca from '../assets/taca.png'
import manAndWomanWithBriefcasee from '../assets/man and woman with briefcasee.png'
import oss1 from '../assets/oss1.png'
import oss2 from '../assets/oss2.png'
import oss3 from '../assets/oss3.png'
import oss4 from '../assets/oss4.png'
import manAndWomanWithBag from '../assets/man and woman with bag.png'
import thumbsUpGirl from '../assets/thumbs up girl.png'
import manUsingPhone from '../assets/man using phone.png'
import one from '../assets/11.png'
import two from '../assets/22.png'
import three from '../assets/33.png'
import mobiles from '../assets/mobiles.png'
import applee from '../assets/applee.png'
import googlee from '../assets/googlee.png'

export default {
  setup() {
    return {
      northEastArrowWhite,
      northEastArrow,
      shield,
      price,
      limousine,
      blackManHoldingDoor,
      taca,
      ebaa,
      nla,
      nbaa,
      manAndWomanWithBriefcasee,
      oss1,
      oss2,
      oss3,
      oss4,
      manAndWomanWithBag,
      thumbsUpGirl,
      manUsingPhone,
      one,
      two,
      three,
      mobiles,
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
    <div class="content">
      <h1>Trusted Chauffeurs for Discerning Travellers</h1>
      <button class="view-our-fleet-btn">
        View Our Fleet
        <img :src="northEastArrowWhite" class="northEastArrowWhite" />
      </button>
    </div>
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

  <section class="reliability">
    <CContainer class="r-con1">
      <CRow>
        <CCol lg="6">
          <img :src="manAndWomanWithBriefcasee" style="width: 90%" />
        </CCol>
        <CCol lg="6">
          <div style="padding-top: 150px">
            <h6 style="font-size: 3rem; padding-bottom: 10px">Reliability, Worldwide</h6>
            <p>Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit.</p>
            <ul class="custom-bullets">
              <li>Affordable</li>
              <li>Punctual</li>
              <li>Professional</li>
            </ul>
            <button>
              Learn More <img :src="northEastArrowWhite" class="northEastArrowWhite" />
            </button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="comfortable-trip">
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
          <div class="comfortable-trip-option">
            <CCol lg="3">
              <div class="comfortable-trip-imgs">
                <img :src="comfortable - trip1" alt="Luxury Limousine Selection" />
              </div>
            </CCol>
            <CCol lg="9">
              <h5>Luxury Limousine Selection</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
          <div class="comfortable-trip-option">
            <CCol lg="3">
              <div class="comfortable-trip-imgs">
                <img :src="comfortable - trip1" alt="Luxury Limousine Selection" />
              </div>
            </CCol>
            <CCol lg="7">
              <h5>Fast Car Delivery Service</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
          <div class="comfortable-trip-option">
            <CCol lg="3">
              <div class="comfortable-trip-imgs">
                <img :src="comfortable - trip1" alt="" />
              </div>
            </CCol>
            <CCol lg="7">
              <h5>Fixed Price & Bonus System</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
        </CCol>
        <CCol lg="6">
          <div class="comfortable-trip-option">
            <CCol lg="3">
              <div class="comfortable-trip-imgs">
                <img :src="comfortable - trip1" alt="" />
              </div>
            </CCol>
            <CCol lg="7">
              <h5>27/7 Order Available</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
          <div class="comfortable-trip-option">
            <CCol lg="3">
              <div class="comfortable-trip-imgs">
                <img :src="comfortable - trip1" alt="" />
              </div>
            </CCol>
            <CCol lg="7">
              <h5>High Safety and Nurity</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
          <div class="comfortable-trip-option">
            <CCol lg="3">
              <div class="comfortable-trip-imgs">
                <img :src="comfortable - trip1" alt="" />
              </div>
            </CCol>
            <CCol lg="7">
              <h5>Professional Car Drivers</h5>
              <p>Both you and your shipments will travel with professional drivers.</p>
            </CCol>
          </div>
        </CCol>
      </CRow>
    </CContainer>
  </section>

  <section class="our-services">
    <CContainer>
      <CRow class="header-row">
        <CCol lg="12">
          <div class="header-title">
            <h1>Our Services</h1>
          </div>
          <div class="more-header">
            <button style="background-color: transparent; border-color: transparent" onclick="">
              More Services <img :src="northEastArrow" />
            </button>
          </div>
        </CCol>
      </CRow>
    </CContainer>
    <CContainer>
      <CRow>
        <div class="card" style="width: 18rem">
          <img :src="oss1" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Intercity Rides</p>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img :src="oss2" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Chauffer Hailing</p>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img :src="oss3" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Airport Transfers</p>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img :src="oss4" class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">Sprinter Class</p>
          </div>
        </div>
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
            </div>
          </div>
        </CCol>
        <CCol lg="4">
          <div class="card">
            <img :src="thumbsUpGirl" class="card-img-top" alt="Culture Image" />
            <div class="card-body">
              <p class="card-text">Culture</p>
              <h5 class="card-title">Explore the big things happening in Dallas</h5>
            </div>
          </div>
        </CCol>
        <CCol lg="4">
          <div class="card">
            <img :src="manUsingPhone" class="card-img-top" alt="News Image" />
            <div class="card-body">
              <p class="card-text">News</p>
              <h5 class="card-title">LA's worst traffic areas and how to avoid them</h5>
            </div>
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
            ><img :src="applee" alt="apple"
          /></a>
          <a href="#" class="solid-up-right"><img :src="googlee" alt="google" /></a>
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
  color: #e95440; /* Orange hover color */
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
  color: #e95440; /* Orange hover color */
}

.download-section {
  height: 404px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(0, 0, 0);
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

.latest-news .card {
  background-color: transparent;
  color: rgb(0, 0, 0);
  border: none;
  background-color: white;
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
  padding: 80px 0;
  align-items: center;
  justify-content: center;
}

.our-services {
  padding: 50px 0;
}

.our-services .row {
  display: flex;
  flex-wrap: nowrap; /* Prevents wrapping and keeps all cards in one row */
  justify-content: space-between; /* Adds space between the cards */
  gap: 20px; /* Optional: Adds spacing between the cards */
}

.our-services .card {
  padding: 0px 0px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.our-services .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.our-services .card-img-top {
  height: 270px;
  width: 270px;
  border-radius: 2px;
  width: 100%;
  margin: 0 auto; /* Center the image */
  display: block; /* Ensures image centers properly */
}

.our-services .card-text {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.comfortable-trip {
  padding-bottom: 80px;
  padding-top: 70px;
  background-color: #f6f6f6;
}

.comfortable-trip h1 {
  text-align: center;
  padding-top: 1 0px;
  padding-bottom: 40px;
  padding-left: 250px;
  padding-right: 250px;
}

.comfortable-trip-imgs img {
  width: 100%;
  display: block;
  margin: auto;
}

.comfortable-trip-option {
  margin-bottom: 10px; /* Adjust as needed */
  display: flex;
  align-items: center;
}

.comfortable-trip h5 {
  margin-bottom: 10px; /* Add some space between the heading and the paragraph */
}

.reliability button {
  margin-top: 20px;
  color: white;
  border: 1px solid #e95440;
  border-radius: 5px;
  padding: 15px 25px;
  background-color: #e95440;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
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

.partners {
  padding: 40px;
  background-color: white;
  border-color: #f6f6f6;
}

.partners .col-lg-4 {
  padding-right: 150px;
  justify-content: space-evenly;
}

.partners .col-lg-2 {
  justify-content: space-evenly;
  text-align: center;
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
  background-color: #f6f6f6;
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

.home {
  position: relative;
  background-image: url('../assets/home9bg.png'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-left: 360px;
  margin-right: 360px;
  margin-bottom: 150px;
  z-index: 2;
}

.content h1 {
  font-size: 2.5rem;
}

/* Button Styles */
.view-our-fleet-btn {
  margin-top: 20px;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 15px 25px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.view-our-fleet-btn:hover {
  background-color: white;
  color: black;
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

.view-our-fleet-btn:hover .northEastArrowWhite {
  content: url('../assets/north east arrow.png');
  transform: translate(5px, -5px);
}
</style>
