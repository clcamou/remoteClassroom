import { useEffect } from 'react'
import { useUser } from '../lib/hooks'
import Assignment_Hub from "../components/Assignment_Hub"

export default async function assignmenthub() {
    const [user, { loading }] = useUser()   
    useEffect(() => {
      // redirect user to login if not authenticated
      if (!loading && !user) Router.replace('/login')
    }, [user, loading])

    let data = await fetch("/api/getallstudentassignments", {
        method: "GET",
        body: {
            user_id: user.user_id
        }
    })
    return (
     <Assignnment_Hub data = {data}/>
    )
  }