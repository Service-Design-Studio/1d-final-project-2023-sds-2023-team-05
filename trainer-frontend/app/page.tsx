import { getServerSession } from "next-auth/next"

import { SiteHeader } from "@/components/site-header"

import Home from "./(home)/page"
import { options } from "./helpers/auth/authOptions"

export default async function App() {
  const session = await getServerSession(options)
  return (
    <div>
      <>
        <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <Home />
        </main>
      </>
    </div>
  )
}
