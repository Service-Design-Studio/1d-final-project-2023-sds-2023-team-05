import { getServerSession } from "next-auth/next"

import Card from "./Card"
import Form from "./Form"
import { options } from "./options"

export default async function Home() {
  const session = await getServerSession(options)
  return (
    <main className="flex min-h-screen items-center justify-center">
      {session ? <Card user={session.user?.name} /> : <Form />}
    </main>
  )
}
