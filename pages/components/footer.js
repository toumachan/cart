import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer>
        <p className='footerLogo'>ロゴ</p>
        <div className='footerNav'>
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
        </div>
        <p className='copy'>©️test</p>
    </footer>
  )
}

export default Footer