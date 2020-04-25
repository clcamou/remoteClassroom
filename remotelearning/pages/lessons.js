import React from 'react'
import Lessons_OverView from '../components/Assignment_Hub'
import { useFetchUser } from '../lib/user'
import Layout from '../components/layout'

function LessonsCard({ user }) {
    return (
        <>
        <h1> Lessons for {user.nickname} </h1>
        <Lessons_OverView/>
        </>
    )
}

