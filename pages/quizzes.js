import { useEffect, useRef } from 'react'
import Quizzes_All from "../components/Quizzes_All"

export default async function quizzes() {
    const [user, { loading }] = useUser()   

    let data = await fetch("/api/getavailablequizzes", {
        method: "GET",
        body: {user}
    })
    return (
     <Quizzes_All data = {data}/>
    )
  }