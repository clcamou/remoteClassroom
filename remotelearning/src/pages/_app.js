import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <title>
        Remote Learning
      </title>
      
      <main>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  )
}