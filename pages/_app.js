import Header from '../components/header'
import '../pages/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <>

      <title>
        Remote Learning
      </title>
      <main>
        <>
          <Component {...pageProps} />
        </>
      </main>
    </>
  )
}