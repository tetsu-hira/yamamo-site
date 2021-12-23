import Link from 'next/link';
import Image from 'next/image'

export default function Header() {
  return (
    <header className='w-full h-36 font-body text-primary'>
      <div className='flex h-full'>
        <div className='basis-1/3 inline-block text-left pl-10 w-full m-auto'>
          <Link href="/">
            <a className='text-4xl font-semibold'>5S活動の記録</a>
          </Link>
        </div>
        <ul className='flex basis-1/3 justify-center m-auto'>
          <li className='px-2'>
            <Link href="/">
              <a className='font-thin px-2'>Shop</a>
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/">
              <a className='font-thin px-2'>About</a>
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/">
              <a className='font-thin px-2'>Blog</a>
            </Link>
          </li>
        </ul>
        <ul className='flex basis-1/3 justify-end m-auto px-8'>
          <li className='px-2'>
            <Link href="/">
              <a>
                <Image src="/user.svg" width={36} height={36} />
              </a>
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/">
              <a>
                <Image src="/search.svg" width={36} height={36} />
              </a>
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/">
              <a>
                <Image src="/cart.svg" width={36} height={36} />
              </a>
            </Link>
          </li>
        </ul>
      </div>

    </header>
  );
}