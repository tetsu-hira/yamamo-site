import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Hamburger from './Hamburger';

export default function Header() {

  return (
    <header className='w-full sm:h-36 h-16 font-body text-primary'>
      <div className='sm:flex h-full relative'>
        <div className='sm:basis-1/3 inline-block sm:text-left text-center sm:pl-10 w-full h-full m-auto'>
          <Link href="/">
            <a className='text-3xl sm:text-4xl font-semibold leading-loose'>5S活動の記録</a>
          </Link>
        </div>
        <ul className='flex basis-1/3 justify-center m-auto'>
          <li className='px-2 hidden sm:block'>
            <Link href="/">
              <a className='font-thin px-2'>Shop</a>
            </Link>
          </li>
          <li className='px-2 hidden sm:block'>
            <Link href="/">
              <a className='font-thin px-2'>About</a>
            </Link>
          </li>
          <li className='px-2 hidden sm:block'>
            <Link href="/">
              <a className='font-thin px-2'>Blog</a>
            </Link>
          </li>
        </ul>
        <ul className='flex basis-1/3 justify-end m-auto px-8'>
          <li className='px-2 hidden sm:block'>
            <Link href="/">
              <a>
                <Image src="/user.svg" width={36} height={36} />
              </a>
            </Link>
          </li>
          <li className='px-2 hidden sm:block'>
            <Link href="/">
              <a>
                <Image src="/search.svg" width={36} height={36} />
              </a>
            </Link>
          </li>
          <li className='px-2 hidden sm:block'>
            <Link href="/">
              <a>
                <Image src="/cart.svg" width={36} height={36} />
              </a>
            </Link>
          </li>
        </ul>
        <Hamburger />
      </div>
    </header>
  );
}