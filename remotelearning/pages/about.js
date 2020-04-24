import React from 'react'

import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'

function About() {
  const { user, loading } = useFetchUser()

  return (
    <Layout user={user} loading={loading}>
      <h1>About</h1>
      <p>
       Welcome to our digital classroom. Here at The Learning Curve we strive to bridge the education gap by providing a platform that allows students anywhere to learn and grow. Our app allows students to store their information and work offline. Once they are able to reconnect to the internet, their assignments and quizzes will get sent back to the teacher. 
      </p>
    </Layout>
  )
}

export default About
