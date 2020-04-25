import React from 'react'

// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from './lib/user'
import Layout from './components/layout'
import Assignment_Overview from './components/Assignment_Overview'

function ProfileCard({ user }) {
  return (
    <>
      <h1>Profile</h1>

      <div>

        <img src={user.picture} alt="user picture" />
        <p>Username: {user.nickname}</p>
        <p>Email: {user.name}</p>
      </div>
    </>
  )
}

function Profile() {
  const { user, loading } = useFetchUser({ required: true })

  return (
    <>
    <p><Layout user={user} loading={loading}>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
    </Layout></p>
     <style jsx>{`
       p {
         color: cadetblue;
         text-align: center;
       }
     `}</style>
     </>
  )
}

export default Profile
