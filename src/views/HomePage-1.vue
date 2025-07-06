<script>
import {
    CContainer,
    CRow,
    CCol
} from "@coreui/vue";
import FleetSlider from "@/components/FleetSlider.vue";
import homeBg2 from "../assets/business woman and driver.png";
import routeLogo from "../assets/route.png";
import happyMan from "../assets/happy uncle.png";
import driverAndLady from "../assets/driver and women.png";
import uncleInCar from "../assets/uncle in car.png";
import manAndWomanWithBriefcase from "../assets/man and woman with briefcase.png";
import feedback from "../assets/feedback1.png";
import previous from "../assets/previous page.png";
import next from "../assets/next page.png";
import manAndWomanWithBag from "../assets/man and woman with bag.png";
import thumbsUpGirl from "../assets/thumbs up girl.png";
import manUsingPhone from "../assets/man using phone.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import mobiles from "../assets/mobiles.png";
import logo from "../assets/luxride.png";
import applee from "../assets/applee.png";
import googlee from "../assets/googlee.png";
import northEastArrowWhite from "../assets/north east arrow white.png";
import northEastArrow from "../assets/north east arrow.png";
import northEastButton from "../assets/north east button.png";

export default {
    setup() {
        return {
            homeBg2,
            routeLogo,
            happyMan,
            driverAndLady,
            uncleInCar,
            manAndWomanWithBriefcase,
            feedback,
            previous,
            next,
            manAndWomanWithBag,
            thumbsUpGirl,
            manUsingPhone,
            apple,
            google,
            mobiles,
            logo,
            googlee,
            applee,
            northEastArrow,
            northEastArrowWhite,
            northEastButton,
        };
    },
    components: {
        CContainer,
        CRow,
        CCol,
        FleetSlider,
    },
};
</script>

<template>
<!-- Section 1 -->
<section class="home2">
    <CContainer>
        <CRow>
            <CCol lg="6">
                <p>Where Would You Like To Go?</p>
                <h1>A New Class Of Luxury Limo Service</h1>
                <button class="view-our-fleet-btn">
                    View Our Fleet <i class="fa-solid fa-square-arrow-up-right"></i>
                </button>
            </CCol>
            <CCol lg="6"></CCol>
        </CRow>
    </CContainer>
</section>

<!-- Section 3 -->
<section class="howItWorks2">
    <CContainer style="color: rgb(0, 0, 0)">
        <CRow style="text-align: center">
            <CCol lg="12">
                <h2 style="padding: 20px">How It Works</h2>
            </CCol>
        </CRow>
    </CContainer>
    <CContainer>
        <CRow class="htw-2row">
            <CCol lg="3" class="htw-step">
                <img :src="routeLogo" />
                <h6>Create Your Route</h6>
                <p>
                    Enter your pickup & dropoff locations or the number of hours you
                    wish to book a car and driver for.
                </p>
            </CCol>
            <CCol lg="1" class="arrow-container">
                <button class="right-arrow-button">
                    <i class="fa-regular fa-circle-right"></i>
                </button>
            </CCol>
            <CCol lg="3" class="htw-step">
                <img :src="routeLogo" />
                <h6>Create Your Route</h6>
                <p>
                    Enter your pickup & dropoff locations or the number of hours you
                    wish to book a car and driver for.
                </p>
            </CCol>
            <CCol lg="1" class="arrow-container">
                <button class="right-arrow-button">
                    <i class="fa-regular fa-circle-right"></i>
                </button>
            </CCol>
            <CCol lg="3" class="htw-step">
                <img :src="routeLogo" />
                <h6>Create Your Route</h6>
                <p>
                    Enter your pickup & dropoff locations or the number of hours you
                    wish to book a car and driver for.
                </p>
            </CCol>
        </CRow>
    </CContainer>
</section>

<section class="ourServices2">
    <CContainer>
        <CRow>
            <CCol lg="12">
                <h1>Our Services</h1>
            </CCol>
        </CRow>
    </CContainer>
    <CContainer>
        <CRow>
            <CCol lg="4">
                <div class="info-card-content-wrapper">
                    <img :src="happyMan" style="width: auto" />
                    <h5 style="margin-top: 20px">Intercity Rides</h5>
                    <p style="margin-bottom: 20px">
                        Lorem ipsum dolor sit amet, consvi etur sad ips cing elitr, sed
                        diam non umy eirm
                    </p>
                    <div class="up-right-button">
                        <button onclick="">
                            Learn More <i class="fa-solid fa-square-arrow-up-right"></i>
                        </button>
                    </div>
                </div>
            </CCol>
            <CCol lg="4">
                <div class="info-card-content-wrapper">
                    <img :src="uncleInCar" style="width: auto" />
                    <h5 style="margin-top: 20px">Intercity Rides</h5>
                    <p style="margin-bottom: 20px">
                        Lorem ipsum dolor sit amet, consvi etur sad ips cing elitr, sed
                        diam non umy eirm
                    </p>
                    <div class="up-right-button">
                        <button onclick="">
                            Learn More <i class="fa-solid fa-square-arrow-up-right"></i>
                        </button>
                    </div>
                </div>
            </CCol>
            <CCol lg="4">
                <div class="info-card-content-wrapper">
                    <img :src="driverAndLady" style="width: auto" />
                    <h5 style="margin-top: 20px">Intercity Rides</h5>
                    <p style="margin-bottom: 20px">
                        Lorem ipsum dolor sit amet, consvi etur sad ips cing elitr, sed
                        diam non umy eirm
                    </p>
                    <div class="up-right-button">
                        <button onclick="">
                            Learn More <i class="fa-solid fa-square-arrow-up-right"></i>
                        </button>
                    </div>
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

<section class="impNumbers">
    <CContainer>
        <CRow>
            <CCol lg="6" class="impNumber-imgCol">
                <img :src="manAndWomanWithBriefcase" />
            </CCol>
            <CCol lg="6">
                <div class="para-imp-numbers">
                    <h1>Showcase some impressive numbers</h1>
                    <p style="color: #181a1f">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <CRow>
                        <CCol lg="4" class="numbers">
                            <p class="numbers-value">285</p>
                            <p class="numbers-text">Vehicles</p>
                        </CCol>
                        <CCol lg="4" class="numbers">
                            <p class="numbers-value">97</p>
                            <p class="numbers-text">Awards</p>
                        </CCol>
                        <CCol lg="4" class="numbers">
                            <p class="numbers-value">13K</p>
                            <p class="numbers-text">Happy Customers</p>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol lg="4">
                            <button class="imp-numbers-button">Learn More</button>
                        </CCol>
                    </CRow>
                </div>
            </CCol>
        </CRow>
    </CContainer>
</section>

<section class="customerFeedback">
    <CContainer>
        <CRow>
            <CCol lg="6">
                <div class="cf-blah">
                    <h1>Hear what our amazing customers say</h1>
                    <p>
                        Sad ipscing elitrsed diamnonu myeir mod, sadipscing elitrsed dia
                        morem ipsum dolor situamet consetetur loutrytru.
                    </p>
                    <button class="get-started-button">
                        Get Started
                        <img :src="northEastArrowWhite" class="northEastArrowWhite" />
                    </button>
                </div>
            </CCol>
            <CCol lg="6" class="feedback-images">
                <img :src="feedback" alt="f1" class="main-feedback-image" />
                <div class="feedback-controls">
                    <img :src="previous" alt="Previous Feedback" class="control-icon" />
                    <img :src="next" alt="Next Feedback" class="control-icon" />
                </div>
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
                <div class="more-news">
                    <button style="background-color: transparent; border-color: transparent" onclick="">
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
                        <h5 class="card-title">
                            3 hidden-gem destinations for your wish list
                        </h5>
                        <a href="#" class="solid-up-right"><img :src="northEastButton" /></a>
                    </div>
                </div>
            </CCol>
            <CCol lg="4">
                <div class="card">
                    <img :src="thumbsUpGirl" class="card-img-top" alt="Culture Image" />
                    <div class="card-body">
                        <p class="card-text">Culture</p>
                        <h5 class="card-title">
                            Explore the big things happening in Dallas
                        </h5>
                        <a href="#" class="solid-up-right"><img :src="northEastButton" /></a>
                    </div>
                </div>
            </CCol>
            <CCol lg="4">
                <div class="card">
                    <img :src="manUsingPhone" class="card-img-top" alt="News Image" />
                    <div class="card-body">
                        <p class="card-text">News</p>
                        <h5 class="card-title">
                            LA's worst traffic areas and how to avoid them
                        </h5>
                        <a href="#" class="solid-up-right"><img :src="northEastButton" /></a>
                    </div>
                </div>
            </CCol>
        </CRow>
    </CContainer>
</section>

<section class="download-section">
    <CContainer>
        <div class="content">
            <CRow class="ds-row1">
                <CCol lg="12">
                    <h1>Download the app</h1>
                    <p>
                        Have a personal driver at your fingertips no matter where you are
                        with our easy-to-use smartphone app.
                    </p>
                </CCol>
            </CRow>
            <CRow class="ds-row2">
                <CCol lg="6" class="ds-col2">
                    <a href="#" class="solid-up-right" style="padding: 10px"><img :src="apple" alt="apple" /></a>
                    <a href="#" class="solid-up-right"><img :src="google" alt="google" /></a>
                </CCol>
            </CRow>
        </div>
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
                <CCol lg="3" class="d-flex align-items-center">
                    <i class="fa fa-phone"></i>
                    <span>+92 321 1241445</span>
                </CCol>
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
.contactSection {
    padding-top: 30px;
    background-color: white;
}

.footer-header {
    border-bottom: 1px solid #eaeaea;
    padding-bottom: 30px;
}

.footer-header .container {
    display: flex;
    align-items: center;
}

.footer-header .col-lg-3,
.footer-header .col-lg-6 {
    display: flex;
    align-items: center;
}

.footer-header .col-lg-3 img {
    max-width: 100%;
}

.footer-header .col-lg-3 i,
.footer-header .col-lg-3 span {
    font-size: 18px;
}

.footer-header .col-lg-3 i {
    margin-right: 8px;
}

.footer-header .col-lg-6 {
    justify-content: end;
}

.footer-header h6 {
    margin: 0;
    font-weight: bold;
    font-size: 16px;
    margin-right: 10px;
}

.footer-header .social-icon {
    padding: 10px;
    color: black;
    font-size: 18px;
    transition: color 0.3s ease;
}

.footer-header .social-icon:hover {
    color: #007bff;
}

.footer-body h5 {
    margin-bottom: 15px;
    font-size: 16px;
}

.footer-body ul {
    padding: 0;
    margin: 0;
    list-style: none;
}

.footer-body .footer-links {
    padding: 5px 0;
}

.footer-body .footer-links a {
    text-decoration: none;
    color: black;
    transition: color 0.3s;
}

.footer-body .footer-links a:hover {
    color: #007bff;
}

.footer-body .col-lg-3 img {
    margin-bottom: 8px;
    max-width: 150px;
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

.download-section .content {
    padding-top: 80px;
    padding-right: 350px;
    padding-left: 280px;
    padding-bottom: 80px;
}

.download-section .ds-row2 .col-lg-6 {
    padding-left: 0px;
}

.download-section .ds-row1 {
    padding-bottom: 10px;
}

.download-section .ds-row1 h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
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
    max-width: 50%;
    /* Adjust this to fit your design */
}

.latest-news {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: rgb(255, 255, 255);
    padding: 70px 0;
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

.card {
    border-radius: 0%;
    border-color: white;
}

.solid-up-right {
    color: #000;
}

.solid-up-right i {
    font-size: 30px;
}

.customerFeedback {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: #fdeeec;
    padding: 70px 0;
    display: flex;
    align-items: center;
    /* Centers the row vertically */
}

.cf-blah {
    margin-top: 75px;
    text-align: left;
    /* Align text to the left */
    max-width: 500px;
    /* Limit the width for better readability */
}

.get-started-button {
    background-color: #e95440;
    border-radius: 5px;
    border: 2px solid #e95440;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.get-started-button:hover {
    background-color: white;
    /* Change background on hover */
    color: #e95440;
    /* Change text color on hover */
}

/* Feedback images styles */
.feedback-images {
    position: relative;
    /* Allow for absolute positioning of controls */
}

.main-feedback-image {
    width: 100%;
    /* Make image responsive */
    border-radius: 8px;
    /* Optional: Add rounded corners to the main image */
}

.feedback-controls {
    display: flex;
    /* Arrange previous and next buttons horizontally */
}

.control-icon {
    margin-top: -40px;
    cursor: pointer;
    /* Pointer cursor on hover */
    height: auto;
    /* Maintain aspect ratio */
}

.numbers {
    border: 1px solid #e5e5e5;
    text-align: center;
    padding: 20px 0;
    /* Vertical padding */
    display: flex;
    justify-content: center;
    /* Center items horizontally */
    align-items: center;
    /* Center items vertically */
    margin: 10px;
    /* Space between columns */
    flex: 1;
    /* Allow flex items to grow equally */
}

.numbers-value {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 5px;
    /* Space between value and text */
}

.numbers-text {
    margin-bottom: 0;
    font-size: 16px;
    /* Make text size consistent */
}

.para-imp-numbers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 110px;
}

.imp-numbers-button {
    background-color: #e95440;
    /* Button background color */
    border-radius: 5px;
    /* Rounded corners */
    border: 2px solid #e95440;
    /* Border matching the background */
    color: white;
    /* Text color */
    padding: 10px 20px;
    /* Padding for top/bottom and left/right */
    font-size: 16px;
    /* Font size */
    cursor: pointer;
    /* Pointer cursor on hover */
    transition: background-color 0.3s ease, color 0.3s ease;
    /* Transition effects */
    align-items: center;
    /* Center items vertically */
    justify-content: center;
    /* Center items horizontally */
}

.imp-numbers-button img {
    width: 17px;
    height: 17px;
    transition: transform 0.3s ease;
}

.imp-numbers-button:hover {
    background-color: white;
    /* Change background on hover */
    color: #e95440;
    /* Change text color on hover */
}

.impNumbers-imageCol {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.impNumbers img {
    width: 70%;
    text-align: center;
    justify-content: center;
}

.impNumbers {
    padding: 80px 0;
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

.home2 {
    height: 579px;
    background-image: url("@/assets/business woman and driver.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    align-items: center;
    color: white;
}

.home2 h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 20px;
}

.home2 p {
    font-size: 1.5rem;
    margin-bottom: 15px;
}

.view-our-fleet-btn {
    padding: 10px 20px;
    background-color: transparent;
    color: white;
    border-radius: 5px;
    border: 1px solid white;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s;
}

.view-our-fleet-btn:hover {
    color: black;
    background-color: white;
}

.howItWorks2 {
    height: 360px;
    margin: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-color: rgb(255, 255, 255);
}

.htw-2row {
    justify-content: center;
    align-items: center;
}

.htw-step {
    text-align: center;
}

.htw-step h6 {
    color: #616161;
    margin-top: 15px;
}

.htw-step p {
    color: #616161;
}

.arrow-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.right-arrow-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.right-arrow-button i {
    font-size: 2rem;
    color: #616161;
    transition: color 0.3s;
}

.right-arrow-button i:hover {
    color: #000;
}

.ourServices2 {
    padding-top: 10px;
    padding-bottom: 30px;
}

.ourServices2 h1 {
    text-align: center;
    padding: 20px;
}

.up-right-button button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}
</style>
