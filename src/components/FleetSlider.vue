<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import businessClass from '../assets/business car.png'
import firstClass from '../assets/first class.png'
import suv from '../assets/suv.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

export default {
  setup() {
    return {
      businessClass,
      firstClass,
      suv,

      modules: [Pagination, Navigation]
    }
  },
  data() {
    return {
      fleetSwiper: [
        {
          id: 1,
          image: businessClass,
          title: 'Business Class',
          desc: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar'
        },
        {
          id: 2,
          image: firstClass,
          title: 'First Class',
          desc: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar'
        },
        {
          id: 3,
          image: suv,
          title: 'Business Van/SUV',
          desc: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar'
        },
        {
          id: 4,
          image: businessClass,
          title: 'Business Class',
          desc: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar'
        },
        {
          id: 5,
          image: firstClass,
          title: 'First Class',
          desc: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar'
        },
        {
          id: 6,
          image: suv,
          title: 'Business Van/SUV',
          desc: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar'
        }
      ],

      activeStep: 1
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
  <CContainer class="ourFleet-container">
    <Swiper
      :slidesPerView="3"
      :spaceBetween="20"
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="modules"
      :breakpoints="{
        640: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 20 }
      }"
      class="ourFleet-Swiper"
    >
      <swiper-slide v-for="(item, index) in fleetSwiper" :key="index">
        <div class="fleet-card">
          <h6>{{ item.title }}</h6>
          <p>{{ item.desc }}</p>
          <img :src="item.image" :alt="item.title" class="fleet-image" />
          <CRow>
            <CCol lg="6">
              <div class="card-icon">
                <i class="fa-solid fa-user-group"></i>
                <p>Passengers {{ item.passengers }}</p>
              </div>
            </CCol>
            <CCol lg="6">
              <div class="card-icon">
                <i class="fa-solid fa-suitcase-rolling"></i>
                <p>Luggage {{ item.luggage }}</p>
              </div>
            </CCol>
          </CRow>
        </div>
      </swiper-slide>
    </Swiper>
  </CContainer>
</template>

<style scoped>
.ourFleet-Swiper {
  padding: 60px 0;
}

.fleet-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.fleet-card h6 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.fleet-card p {
  font-size: 14px;
  color: #666;
}

.fleet-image {
  max-width: 80%;
  border-radius: 8px;
  margin-bottom: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #666;
}

.card-icon p {
  margin: 0;
}

.card-icon i {
  font-size: 20px;
  color: #333;
}

/* Swiper pagination */
.swiper-pagination-bullet {
  background-color: #333;
}

.swiper-button-prev,
.swiper-button-next {
  color: #333;
}
</style>






