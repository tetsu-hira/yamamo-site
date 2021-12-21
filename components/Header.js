import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full h-36 font-body text-primary'>
      <div className='flex h-full'>
        <div className='basis-1/3 inline-block text-center w-full m-auto'>
          <Link href="/">
            <a className='text-4xl font-semibold'>5S活動の記録</a>
          </Link>
        </div>
        <ul className='flex basis-1/3 justify-center m-auto'>
          <li className='px-2'>
            <Link href="/">
              <a>text1</a>
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/">
              <a>text2</a>
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/">
              <a>text3</a>
            </Link>
          </li>
        </ul>
        <ul className='flex basis-1/3 justify-end m-auto px-8'>
          <li className='px-2'>
            <Link href="/">
              <a>icon1</a>
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/">
              <a>icon2</a>
            </Link>
          </li>
          <li className='px-2'>
            <Link href="/">
              <a>icon3</a>
            </Link>
          </li>
        </ul>
      </div>

    </header>
  );
}