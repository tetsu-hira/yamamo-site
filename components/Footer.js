import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='my-20 font-body text-primary'>
      <div className='flex m-auto mb-10'>
        <div className='w-2/5 pl-10'>
          <Link href="/">
            <a className='text-4xl font-semibold'>5S活動の記録</a>
          </Link>
          <ul className='flex basis-1/4 pt-8 justify-start'>
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
            <li className='px-2'>
              <Link href="/">
                <a>icon4</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className='w-1/5'>
          <p className='font-bold'>リンク</p>
          <ul className='my-5'>
            <li className='my-2 font-thin'>私たちについて</li>
            <li className='my-2 font-thin'>メンバー紹介</li>
            <li className='my-2 font-thin'>text</li>
            <li className='my-2 font-thin'>text</li>
            <li className='my-2 font-thin'>text</li>
            <li className='my-2 font-thin'>text</li>
            <li className='my-2 font-thin'>お問い合わせ</li>
            <li className='my-2 font-thin'>ブログ</li>
          </ul>
        </div>
        <div className='w-1/5'>
          <p className='font-bold'>課題を見る</p>
          <ul className='my-5'>
            <li className='my-2 font-thin'>コレクション</li>
          </ul>
        </div>
        <div className='w-1/5'>
          <p className='font-bold'>ポリシー</p>
          <ul className='my-5'>
            <li className='my-2 font-thin'>特定商取引法に関する表示</li>
            <li className='my-2 font-thin'>プライバシーポリシー</li>
            <li className='my-2 font-thin'>利用規約</li>
            <li className='my-2 font-thin'>text</li>
            <li className='my-2 font-thin'>text</li>
          </ul>
        </div>

      </div>
      <div className="flex w-full h-20">
        <div className="text-center h-auto m-auto">
          <p>© 2021 Tetsuhiro.Hirabayashi</p>
        </div>
      </div>
    </footer>
  );
}