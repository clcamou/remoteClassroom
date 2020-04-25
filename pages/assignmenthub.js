import { useEffect } from 'react'
import AssignmentHub from './components/AssignmentHub'

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
     <AssignnmentHub data = {data}/>
    )
  }