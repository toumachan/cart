import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/BlogSingle.module.css'
import Meta from '../components/meta'
import { client } from '@/libs/client';
import Link from 'next/link';


//SSG
export const getStaticProps = async(context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog" , contentId: id });

    return {
      props: {
        blog: data,
      },
    };
};

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content) => ({ params: { id: content.id } }));
    return {
        paths,
        fallback: false,
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


export default function Blog({ blog }) {
    return (
      <>
        <Head>
          <title>{ blog.title }</title>
          <meta name="description" content="" />
          
          <Meta/>
        </Head>
        <main className={`common ${styles.main}`}>
            <div className='key'>
                <p className='keyText'>スタッフブログ</p>
            </div>
            <div className={ styles.cont }>
                <div className='inner'>
                    <p className={styles.date}>{ formatDate(blog.createdAt) }</p>
                    <h2 className={ styles.ttl }>{ blog.title }</h2>
                    <div className={ styles.blogBody } dangerouslySetInnerHTML={{ __html: `${blog.body}`}}></div>
                </div>
            </div>
        </main>
      </>
    )
  }