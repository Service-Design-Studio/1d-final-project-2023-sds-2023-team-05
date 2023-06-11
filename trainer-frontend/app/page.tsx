import { getServerSession } from "next-auth/next"

import Form from "../components/LoginForm"
import Home from "./Home"
import { options } from "./helpers/auth/authOptions"

export default async function App() {
  const session = await getServerSession(options)
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {session ? <Home /> : <Form />}
    </main>
  )
}
