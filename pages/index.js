import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Meta from './components/meta'
import { client } from '@/libs/client'
import Link from 'next/link'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Swiper as RealSwiper } from "swiper";
RealSwiper.use([Autoplay, EffectFade]);
import "swiper/css";
import "swiper/css/effect-fade";

// imgソース
import homeKey01 from "../public/home/home-key-bg01.jpg";
import homeKey02 from "../public/home/home-key-bg02.jpg";
import homeKey03 from "../public/home/home-key-bg03.jpg";
import homeImg01 from "../public/home/home-img01.jpg";

// ブログSSG
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


export default function Home({ blog }) {
  return (
    <>
      <Head>
        <title>ECサイト</title>
        <meta name="description" content="" />
        
        <Meta/>
      </Head>
      <main className={styles.main}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          speed={2000}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          className={styles.mvSwiper}
        >
            <SwiperSlide className={styles.mvSlide01} >
              <Image src={homeKey01} alt="homeMV01" />
            </SwiperSlide>
            <SwiperSlide className={styles.mvSlide01} >
              <Image src={homeKey02} alt="homeMV02" />
            </SwiperSlide>
            <SwiperSlide className={styles.mvSlide01} >
              <Image src={homeKey03} alt="homeMV03" />
            </SwiperSlide>
            <p className={ styles.keyTtl }>トップページ</p>
        </Swiper>

        <div className={`${styles.cont} ${styles.cont01}`}>
          <div className='inner'>
            <div className={styles.flex}>
              <div className={styles.textBox}>
                <h2>ECサイトについて</h2>
                <p className={styles.text}>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
                <p className={`button ${styles.button}`}><Link href="/about">詳しくはこちら</Link></p>
              </div>
              <p className={styles.img}><Image src={homeImg01} alt="homeMV01" /></p>
            </div>
          </div>
        </div>

        <div className={`${styles.cont} ${styles.cont02}`}>
          <div className='inner'>
            <h2 className={styles.mainTtl}>スタッフブログ</h2>
            <div className={styles.scrollWrap}>
              <div className={styles.scroll}>
                { blog.map((blog) => (
                  <div key={blog.id} className={styles.flexItem}>
                    <Link href={`blog/${blog.id}`} className={`${styles.flex}`}>
                      <p className={styles.img}>
                        <Image
                          src={blog.thumbnail.url}
                          alt={blog.title}
                          width={150}
                          height={150}
                          style={{
                            width: '100%',
                            height: 'auto',
                          }}
                        />
                      </p>
                      <div className={styles.textBox}>
                        <h3 className={styles.itemTtl}>{ blog.title }</h3>
                        <p className={styles.date}>{ formatDate(blog.createdAt) }</p>
                        <p className={styles.text}>{ stripHtmlTagsAndLimit(blog.body, 50) }</p>
                      </div>
                    </Link>
                  </div>
                )) }
              </div>
            </div>
            <p className='button'><Link href="/blog">スタッフブログ一覧</Link></p>
          </div>
        </div>
      </main>
    </>
  )
}
