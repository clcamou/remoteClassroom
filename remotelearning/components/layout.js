import Head from 'next/head'
import Header from './header'

function Layout({ user, loading = false, children }) {
  return (
    <>
      <Head>
        <title>Remote Classroom</title>
      </Head>

      <Header user={user} loading={loading} />

      <main>
        <div className="container">{children}</div>
      </main>

      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
      `}</style>
    </>
  )
}

export default Layout
