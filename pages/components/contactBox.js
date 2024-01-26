import Link from 'next/link'
import React from 'react'

function ContactBox() {
  return (
    <div className='contactBox'>
      <h2>CONTACT</h2>
      <div className='flex'>
        <p className='tel'><a href='tel:090-000-0000'>090-000-0000</a></p>
        <p className='btn'><Link href="/contact">お問合わせ</Link></p>
      </div>
    </div>
  )
}

export default ContactBox;