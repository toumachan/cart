import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Company.module.css'
import Meta from './components/meta'

// imgソース
import companyImage01 from "../public/company/company-img01.jpg";


export default function Company() {
  return (
    <>
      <Head>
        <title>会社概要</title>
        <meta name="description" content="" />
        
        <Meta/>
      </Head>
      <main className={`common ${styles.main}`}>
        <div className='key'>
          <p className='keyText'>会社概要</p>
        </div>
        <div className={styles.cont}>
          <div className='inner'>
            <h2 className={styles.mainTtl}>代表挨拶</h2>
            <div className={styles.flex}>
              <p className={styles.img}><Image src={companyImage01} alt="代表挨拶" /></p>
              <div className={styles.textArea}>
                <h3 className={styles.subTtl}>タイトルタイトルタイトルタイトル</h3>
                <p className={styles.text}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cont}>
          <div className='inner'>
            <h2 className={styles.mainTtl}>会社概要</h2>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル<br />タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.cont}>
          <div className='inner'>
            <h2 className={styles.mainTtl}>特定商取引</h2>
            <table className={styles.table}>
              <tbody>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル<br />タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
                <tr>
                  <th>タイトルタイトル</th>
                  <td>テキストテキストテキストテキストテキストテキストテキスト</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}
