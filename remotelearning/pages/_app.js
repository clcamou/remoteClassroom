import Navbar from '../components/Navbar'
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
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