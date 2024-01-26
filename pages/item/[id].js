import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/ItemSingle.module.css'
import Meta from '../components/meta'
import { client } from '@/libs/client'
import { useEffect, useState } from 'react'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Navigation ,Swiper as SwiperCore } from "swiper";
SwiperCore.use([Thumbs]);
import "swiper/css"
import "swiper/css/thumbs"
import 'swiper/css/navigation';

//SSG
export const getStaticProps = async(context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "item" , contentId: id });

    return {
      props: {
        item: data,
      },
    };
};

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "item" });
    const paths = data.contents.map((content) => ({ params: { id: content.id } }));
    return {
        paths,
        fallback: false,
    };
};


export default function Item({ item }) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://takechannel.shop-pro.jp/?mode=cartjs&pid=165587675&style=normal_gray&name=n&img=n&expl=n&stock=n&price=y&optview=n&inq=n&sk=n';
    script.async = true;
  
    const cartElement = document.getElementsByClassName('cart')[0]; // ここで要素を選択
  
    cartElement.appendChild(script); // 選択した要素にスクリプトを追加
  
    return () => {
      cartElement.removeChild(script); // コンポーネントがアンマウントされたときにスクリプトを削除
    };
  }, []);

  return (
    <>
      <Head>
        <title>{ item.name }</title>
        <meta name="description" content="" />
        
        <Meta/>
      </Head>
      <main className={`common itemSingle ${styles.main}`}>
          <div className='key'>
              <p className='keyText'>商品詳細</p>
          </div>
          <div className={ styles.cont }>
              <div className='inner'>
                <div className={styles.flex}>
                  <div className={styles.imgBox}>
                    <Swiper
                      slidesPerView={1}
                      speed={1000}
                      thumbs={{ swiper: thumbsSwiper }}
                      className={styles.itemSwiper}
                      modules={[Navigation]}
                      navigation
                    >
                      { item.images.map((itemImg) => (
                        <SwiperSlide
                          key={itemImg.url}
                          className={styles.img}
                        >
                          <Image
                            src={itemImg.url}
                            alt={item.name}
                            width={500}
                            height={500}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <Swiper
                      slidesPerView={3}
                      speed={1000}
                      freeMode={true}
                      onSwiper={setThumbsSwiper}
                      className={styles.itemThumbnail}
                    >
                      { item.images.map((itemImg) => (
                        <SwiperSlide
                          key={itemImg.url}
                          className={styles.img}
                        >
                          <Image
                            src={itemImg.url}
                            alt={item.name}
                            width={150}
                            height={150}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className={styles.textBox}>
                    <h2 className={ styles.ttl }>{ item.name }</h2>
                    <p className={styles.textInfo}>{ item.info }</p>
                    <div className='cart'>
                    <form name="product_form" method="post" action="https://takechannel.shop-pro.jp/cart/proxy/basket/items/add" class={ styles.cartJs }>
                      <div class="cartjs_product_table">
                        <table>
                          <tbody>
                            <tr class="cartjs_product_num">
                              <th class={ styles.cartJsTh }>購入数</th>
                              <td>
                                <input type="text" name="product_num" value="1" class={ styles.cartJsInputNumber } />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="cartjs_cart_in">
                        <input className={ styles.cartJsSubmit } type="submit" value="カートに入れる" />
                      </div>
                      <div class="cartjs_product_info">
                        <input type="hidden" name="members_hash" value="e1e93086693a1f2924f53d111668edc8" />
                        <input type="hidden" name="shop_id" value="PA01476435" />
                        <input type="hidden" name="product_id" value={ item.cart } />
                        <input type="hidden" name="members_id" value="" />
                        <input type="hidden" name="back_url" value="" />
                        <input type="hidden" name="back_url_with_get" value="1" />
                        <input type="hidden" name="reference_token" value="e6404d21d82e4451898ab0a13937bc4b" />
                      </div>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </main>
    </>
  )
}