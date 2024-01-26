import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/About.module.css'
import Meta from './components/meta'

// imgソース
import aboutImage01 from "../public/about/about-img01.jpg";
import aboutImage02 from "../public/about/about-img02.jpg";


export default function About() {
  return (
    <>
      <Head>
        <title>ECサイトについて</title>
        <meta name="description" content="" />
        
        <Meta/>
      </Head>
      <main className={`common ${styles.main}`}>
        <div className='key'>
          <p className='keyText'>ECサイトについて</p>
        </div>
        <div className={styles.cont}>
          <div className='inner'>
            <div className={styles.flex}>
              <p className={styles.img}><Image src={aboutImage01} alt="ECサイトについて01" /></p>
              <p className={styles.text}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
            <div className={styles.flex}>
              <p className={styles.img}><Image src={aboutImage02} alt="ECサイトについて01" /></p>
              <p className={styles.text}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
