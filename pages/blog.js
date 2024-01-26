import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Blog.module.css'
import Meta from './components/meta'
import { client } from '@/libs/client';
import Link from 'next/link';

// SSG
export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

// 日付をフォーマットする関数
function formatDate(createdAtDate) {
  const dateObject = new Date(createdAtDate);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1; // 月は0から始まるため+1する
  const day = dateObject.getDate();
  return `${year}.${month < 10 ? "0" : ""}${month}.${day < 10 ? "0" : ""}${day}`;
}

// HTMLタグを除去して文字数を制限する関数
function stripHtmlTagsAndLimit(html, limit) {
  const strippedText = html.replace(/<[^>]*>/g, ''); // HTMLタグを除去

  if (strippedText.length <= limit) {
    return strippedText; // 制限内ならそのまま返す
  } else {
    return strippedText.slice(0, limit) + '...'; // 制限を超える場合は制限文字数までカットして末尾に省略記号を追加
  }
}


export default function Blog({ blog }) {
  return (
    <>
      <Head>
        <title>ブログ一覧</title>
        <meta name="description" content="" />
        
        <Meta/>
      </Head>
      <main className={`common ${styles.main}`}>
        <div className='key'>
          <p className='keyText'>スタッフブログ</p>
        </div>
        <div className={styles.cont}>
          <div className='inner'>
            <div className={styles.flex}>

              { blog.map((blog) => (
                <div key={blog.id} className={styles.flexItem}>
                  <Link href={`blog/${blog.id}`}>
                    <p className={styles.img}>
                      <Image
                        src={blog.thumbnail.url}
                        alt={blog.title}
                        width={320}
                        height={320}
                        style={{
                          width: '100%',
                          height: 'auto',
                        }}
                      />
                    </p>
                    <h2 className={styles.itemTtl}>{ blog.title }</h2>
                    <p className={styles.date}>{ formatDate(blog.createdAt) }</p>
                    <p className={styles.text}>{ stripHtmlTagsAndLimit(blog.body, 30) }</p>
                  </Link>
                </div>
              )) }
              
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
