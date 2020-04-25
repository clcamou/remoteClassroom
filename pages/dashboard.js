import { useEffect, useRef } from 'react'

import Dashboard from "../components/Dashboard"
export default function dashboard() {
    const [user, { loading }] = useUser()   
    useEffect(() => {
      // redirect user to login if not authenticated
      if (!loading && !user) Router.replace('/login')
    }, [user, loading])
    return (
     <Dashboard username = {user}/>
    )
  }