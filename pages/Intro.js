import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import 'animate.css';


export default function Intro() {
  const { ref, inView } = useInView({
    rootMargin: '0px',
    triggerOnce: true,
  });

  return (
    <div className='flex mt-40 mx-auto justify-center'>
      <div>
        <Link href="/">
          <a ref={ref}>
            {inView && (
              <Image  className='animate__animated animate__fadeIn' src="/5Scycle.png" width={416} height={400} alt='test' />
            )}
          </a>
        </Link>
      </div>
      <div className='pl-32 pt-10'>
        <p className='text-lg font-thin'>生産管理の5S活動について</p>
        <h2 className='text-3xl font-bold my-1'>5S活動の歩み</h2>
        <p className='text-lg font-thin mt-5'>
          ２年前より活動を開始
          <br />昨年は順調に活動を進め、
          <br />今年の３月には銅賞を獲得
        </p>
        <Link href="/">
          <a className="bg-slate-400 relative text-white my-6 block w-40 h-10 text-center leading-10 after:Font Awesome 5 Free after:duration-300 hover:after:bg-slate-400 hover:after:content-['➡'] after:absolute hover:after:translate-x-24 after:top-0 after:left-12 after:w-10">今までの活動</a>
        </Link>
      </div>
    </div>
  )
}