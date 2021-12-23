import Image from 'next/image'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { Autoplay, Swiper as RealSwiper } from "swiper";
RealSwiper.use([Autoplay]);
SwiperCore.use([Pagination, Navigation, Scrollbar, A11y]);


export default function Slider() {
  const { ref, inView } = useInView({
    rootMargin: '0px',
    triggerOnce: true,
  });

  const params = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    autoplay: {
      delay: 6000
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }

  return (
    <>
      <div ref={ref}>
        {inView && (
          <Swiper {...params} className='animate__animated animate__fadeInDown' onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {/* スライダー本体 */}
            <SwiperSlide>
              <Image
                src="/top1.jpg"
                width={2592}
                height={1944}
                alt='TOP image'
                className='relative'
              />
              <div className='absolute top-3/4 left-4 m-0 p-0 bg-bg pl-5 pr-10 py-2'>
                <p className='text-white font-bold text-3xl leading-normal'>【生産管理の5S活動】</p>
                <p className='text-white font-bold text-3xl leading-normal'>　日々の5S活動や年に一度のPC掃除など</p>
                <p className='text-white font-bold text-3xl leading-normal'>　金賞の獲得を目指して続けております</p>
                <p className='text-white text-xl leading-normal'>　　～2020年・4月から活動開始～</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/top2.jpg"
                width={2592}
                height={1944}
                alt='TOP image'
              />
              <div className='absolute top-3/4 left-4 m-0 p-0 bg-bg pl-5 pr-10 py-2'>
                <p className='text-white font-bold text-3xl leading-normal'>【生産管理の5S活動】</p>
                <p className='text-white font-bold text-3xl leading-normal'>　日々の5S活動や年に一度のPC掃除など</p>
                <p className='text-white font-bold text-3xl leading-normal'>　金賞の獲得を目指して続けております</p>
                <p className='text-white text-xl leading-normal'>　　～2020年・4月から活動開始～</p>
              </div>
            </SwiperSlide>
          </Swiper>
        )}
        {/* サムネイル画像一覧 */}
      </div>
    </>
  );
}