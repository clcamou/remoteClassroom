import React from 'react';

import Layout from '../components/Layout';
import { useFetchUser } from '../../lib/user';

export default function About() {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <h1>About</h1>
      <p>
        At the Learning Curve, anyone can learn anywhere. Lessons, quizzes, and assignments can be accessed without a constant internet connection. 
      </p>
    </Layout>
  )
  }