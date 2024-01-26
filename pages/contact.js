import Head from 'next/head'
import styles from '@/styles/Contact.module.css'
import Meta from './components/meta'


export default function Contact() {
  return (
    <>
      <Head>
        <title>お問合わせ</title>
        <meta name="description" content="" />
        
        <Meta/>
      </Head>
      <main className={`common ${styles.main}`}>
        <div className='key'>
          <p className='keyText'>お問合わせ</p>
        </div>
        <div className={styles.cont}>
          <div className='inner'>
            <h2 className={styles.mainTtl}>電話でのお問合わせ</h2>
            <p className={styles.tel}>
              <a href="tel:090-000-0000">090-000-0000</a><br/>
              営業時間 9:00 ~ 17:00
            </p>
          </div>
        </div>
        <div className={styles.cont}>
          <div className='inner'>
            <h2 className={styles.mainTtl}>お問合わせフォーム</h2>
            <table className={styles.form}>
              <tbody>
                <tr>
                  <th>お名前</th>
                  <td><input type="text" name="お名前" /></td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td><input type="text" name="電話番号" /></td>
                </tr>
                <tr>
                  <th>メールアドレス</th>
                  <td><input type="text" name="メールアドレス" /></td>
                </tr>
                <tr>
                  <th>お問合わせ内容</th>
                  <td><textarea name="お問合わせ内容"></textarea></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}
