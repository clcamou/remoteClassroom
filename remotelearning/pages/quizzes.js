import { useEffect, useRef } from 'react'
import { useUser } from '../lib/hooks'
import Quizzes_All from "../components/Quizzes_All"
export default function quizzes() {
    const [user, { loading }] = useUser()   
    useEffect(() => {
      // redirect user to login if not authenticated
      if (!loading && !user) Router.replace('/login')
    }, [user, loading])

    let data = await fetch("/api/getavailablequizzes", {
        method: "GET",
        body: {
            user_id: user.user_id
        }
    })
    return (
     <Quizzes_All data = {data}/>
    )
  }