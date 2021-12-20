import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
  return (
    <div className='flex mt-40 mx-auto justify-center'>
      <div>
        <Link href="/">
          <a>
            <Image src="/5Scycle.png" width={416} height={400} alt='test' />
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
          <a className='bg-slate-400 text-white my-6 block w-36 h-10 text-center leading-10'>"今までの活動"</a>
        </Link>
      </div>
    </div>
  )
}