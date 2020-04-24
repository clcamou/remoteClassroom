import { useEffect, useRef } from 'react'
import {useRouter} from "next/router"
import Quiz from "../components/Quiz"
export default function quiz() {
    let router = useRouter()
    const [user, { loading }] = useUser()   
    useEffect(() => {
      // redirect user to login if not authenticated
      if (!loading && !user) Router.replace('/login')
    }, [user, loading])
    let data = fetch("/api/getassignmentcontent", {
        body: {
            assignment_id: router.assignment_id
        }
    })
    let assignment_id = router.assignment_id
    let user_id = user.user_id
    return (
     <Quiz data = {data} assignment_id = {assignment_id} user_id = {user_id}/>
    )
  }