import { useUser, fetcher } from '../lib/hooks';
import useSWR from 'swr';
import Link from 'next/link';


function UserList() {
  const { data: { users } = {} } = useSWR('/api/users', fetcher)
  return (
    <>
      <h2>All users</h2>
      {!!users?.length && (
        <ul>
          {users.map(user => (
            <li key={user.username}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default function HomePage() {
  const [user] = useUser()
  return (
    <>
      <h1>
        Welcome
      </h1>
      <h2> Please Login or Sign Up</h2>
      <ol><Link href="/signup">
        <a>Sign up</a>
      </Link></ol>

      <ol>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </ol>
     
     
      {user && <p>Currently logged in as: {JSON.stringify(user)}</p>}
      <UserList />
      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  )
}