import Link from 'next/link'

export default function Band() {
  return (
    <div className='bg-gray-200 mt-20 h-32 flex'>
      <Link href="/">
        <a className="bg-slate-400 text-white text-center m-auto w-48 h-10 block rounded-md text-sm  leading-10 hover:text-slate-400 hover:bg-white duration-500">過去の活動を見る</a>
      </Link>
    </div>
  )
}