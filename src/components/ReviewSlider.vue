<script>
import { CContainer, CRow, CCol } from '@coreui/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'
// import './style.css'
// import required modules
import { Pagination } from 'swiper/modules'

export default {
  setup() {
    return {
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
      },
      modules: [Pagination]
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
  <swiper :pagination="pagination" :modules="modules" class="mySwiper">
    <swiper-slide>
      <CRow class="testimonial-slide">
        <CCol lg="12">
          <h6>Jonathan Miller</h6>
          <p class="position">Web Developer</p>
        </CCol>
        <CCol lg="12">
          <p class="testimonial-text">
            For my return pickup from the hotel to the airport, I was assigned 4 drivers instead of
            the original 3. I was not provided the 4th driver's contact information, and he was late
            for the pickup.
          </p>
        </CCol>
      </CRow>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.mySwiper {
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
}

.testimonial-slide {
  text-align: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.testimonial-slide h6 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.testimonial-slide .position {
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
}

.testimonial-text {
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  margin-top: 15px;
}
</style>
