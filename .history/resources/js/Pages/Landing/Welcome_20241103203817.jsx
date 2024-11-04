// resources/js/Pages/Welcome.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import "@/Styles/Ini.css"
import GuestLayout from '@/Layouts/GuestLayout';
import Ini from '@/Components/Ini';
const Welcome = () => {
  return (
        <GuestLayout>
          <Ini/>
        </GuestLayout>

      
  );
};

export default Welcome;
