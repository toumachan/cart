import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Item.module.css'
import Meta from './components/meta'
import Link from 'next/link';
import { client } from '@/libs/client';

// imgソース
import itemImage01 from "../public/item/item-img01.jpg";

// SSG
export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "item" });

  return {
    props: {
      item: data.contents,
    },
  };
};

// HTMLタグを除去して文字数を制限する関数
function stripHtmlTagsAndLimit(html, limit) {
  const strippedText = html.replace(/<[^>]*>/g, ''); // HTMLタグを除去

  if (strippedText.length <= limit) {
    return strippedText; // 制限内ならそのまま返す
  } else {
    return strippedText.slice(0, limit) + '...'; // 制限を超える場合は制限文字数までカットして末尾に省略記号を追加
  }
}


export default function Item({ item }) {
  return (
    <>
      <Head>
        <title>商品一覧</title>
        <meta name="description" content="" />
        
        <Meta/>
      </Head>
      <main className={`common ${styles.main}`}>
        <div className='key'>
          <p className='keyText'>商品一覧</p>
        </div>
        <div className={styles.cont}>
          <div className='inner'>
            <div className={styles.flex}>
              <p className={styles.cate}>カテゴリー名</p>
              <p className={styles.cate}>カテゴリー名</p>
              <p className={styles.cate}>カテゴリー名</p>
              <p className={styles.cate}>カテゴリー名</p>
              <p className={styles.cate}>カテゴリー名</p>
            </div>
          </div>
        </div>
        <div className={styles.cont}>
          <div className='inner'>
            <h2 className={styles.mainTtl}>商品一覧</h2>
            <div className={styles.itemFlex}>

              { item.map((item) => (
                <div key={item.id} className={styles.flexItem}>
                  <Link href={`item/${item.id}`}>
                    <p className={styles.img}><Image src={ item.images[0].url } alt={ item.name } width="320" height="320" /></p>
                    <h3 className={styles.itemTtl}>{ item.name }</h3>
                    <p className={styles.itemText}>{ stripHtmlTagsAndLimit(item.info, 30) }</p>
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
