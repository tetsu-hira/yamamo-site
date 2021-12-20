import Image from 'next/image'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <>
      {/* スライダー本体 */}
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
      >
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

      {/* サムネイル画像一覧 */}
    </>
  );
}