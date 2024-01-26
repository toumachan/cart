import '@/styles/globals.css'
import '@/styles/common.css'
import Header from './components/header'
import ContactBox from './components/contactBox'
import Footer from './components/footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ContactBox />
      <Footer />
    </>
  )
}
