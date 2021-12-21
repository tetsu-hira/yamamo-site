import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Slider() {
  const { ref, inView } = useInView({
    rootMargin: '0px',
    triggerOnce: true,
  });

  return (
    <>
      <div ref={ref}>
        {inView && (
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='animate__animated animate__fadeInDown'
          >
          {/* スライダー本体 */}
            <SwiperSlide>
              <Image
                src="/top1.jpg"
                width={2592}
                height={1944}
                alt='TOP image'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/top2.jpg"
                width={2592}
                height={1944}
                alt='TOP image'
              />
            </SwiperSlide>
          </Swiper>
        )}
        {/* サムネイル画像一覧 */}
      </div>
    </>
  );
}