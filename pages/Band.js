import Link from 'next/link'

export default function Band() {
  return (
    <div className='bg-green-200 mt-20 h-32 relative'>
      <Link href="/">
        <a className="bg-rose-400 text-white text-center m-auto w-48 h-10 block rounded-md text-sm font-bold leading-9">履歴を見る</a>
      </Link>
    </div>
  )
}