import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header>
        <div className='headerBox'>
            <h1><Link href="/">ロゴ</Link></h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/item">商品一覧</Link>
                    </li>
                    <li>
                        <Link href="/about">ECサイトについて</Link>
                    </li>
                    <li>
                        <Link href="/blog">ブログ一覧</Link>
                    </li>
                    <li>
                        <Link href="/company">会社概要</Link>
                    </li>
                    <li>
                        <Link href="/contact">お問合わせ</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header