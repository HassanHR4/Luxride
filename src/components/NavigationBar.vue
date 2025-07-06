<template>
  <nav :class="['navbar', 'navbar-expand-lg', 'custom-navbar', 'shadow-sm', { 'navbar-hidden': isHidden }]" >
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand d-flex align-items-center gap-2" href="#">
        <img :src="logo" alt="Logo" height="25" />
      </a>

      <!-- Toggle Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center gap-lg-4">
          <li class="nav-item dropdown custom-hover-dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button">
    Home
  </a>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="homeDropdown">
    <li>
      <router-link class="dropdown-item" to="/">Home 1</router-link>
    </li>
    <li v-for="n in 8" :key="n">
      <router-link class="dropdown-item" :to="`/home${n + 1}`">Home {{ n + 1 }}</router-link>
    </li>
  </ul>
</li>


          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="btn btn-outline-light rounded-pill px-3 py-1" href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/logoo.png'

export default {
  name: 'NavigationBar',
  setup() {
    const logoRef = logo
    const isHidden = ref(false)
    let lastScrollTop = 0

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      isHidden.value = scrollTop > lastScrollTop && scrollTop > 80
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return { logo: logoRef, isHidden }
  }
}
</script>


<style scoped>
.dropdown-menu-dark {
  background-color: #1e1e1e;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.dropdown-item {
  color: #e0e0e0;
  transition: background-color 0.3s, color 0.3s;
}

.dropdown-item:hover {
  background-color: #ffa500;
  color: #000;
}

.custom-navbar {
  background-color: #000000;
  padding: 12px 24px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: transform 0.4s ease-in-out;
  z-index: 999;
  position: sticky;
  top: 0;
}

.navbar-hidden {
  transform: translateY(-100%);
}

.navbar-brand .brand-text {
  font-weight: 600;
  color: #fff;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
}

.navbar-nav .nav-link {
  color: #e0e0e0;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.navbar-nav .nav-link:hover {
  color: #ffa500;
}

.navbar-nav .nav-link::after {
  content: '';
  display: block;
  width: 0%;
  height: 2px;
  background-color: #ffa500;
  transition: width 0.3s;
  position: absolute;
  bottom: 0;
  left: 0;
}

.navbar-nav .nav-link:hover::after {
  width: 100%;
}

.navbar-toggler {
  border-color: rgba(255, 255, 255, 0.1);
}

.btn-outline-light {
  color: #fff;
  border-color: #fff;
  transition: all 0.3s ease;
}

.btn-outline-light:hover {
  background-color: #ffa500;      /* orange background */
  border-color: #cc8400;          /* dark orange border */
  color: #000;                    /* black text */
}

.custom-hover-dropdown:hover > .dropdown-menu {
  display: block;
  margin-top: 0;
}

/* Smooth dropdown */
.dropdown-menu {
  transition: all 0.2s ease-in-out;
  display: none;
}
</style>
