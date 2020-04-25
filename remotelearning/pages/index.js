import React from 'react'

import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import Dashboard from '../components/Dashboard'

function Home() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      {loading && <p>Loading login info...</p>}

      {!loading && !user && (
        <>
         <h1>Welcome to The Learning Curve</h1>
         <div className="card-login">
           <div className="card-body">
             <h4 className="card-title"> Please Login to get started </h4>
             <a href="/api/login" className="btn btn-primary">Login</a>
           </div>
         </div>
        </>
      )}

      {user && (
        <>
          <h1>Welcome {user.nickname}</h1>
          <p><img src={user.picture} alt="user picture" /></p>
          <p>name: {user.name}</p>
          <Dashboard/>
        </>
      )}
      <style jsx>{`
       p {
         color: cadetblue;
         text-align: center;
       }
     `}</style>
    </Layout>
  )
}

export default Home
