import { API_PROD_URL } from "@/config/site"
import AddSession from "@/components/add-session"
import SessionsTable from "@/components/sessions-table"

interface Session {
  id: string
  classcode: string
  author: string
  title: string
}

async function getSessions(): Promise<Session[]> {
  const res = await fetch(`${API_PROD_URL}/sessions`, { cache: "no-store" })
  const sessions = await res.json()
  return sessions
}

export default async function SessionPage() {
  const sessions = await getSessions()

  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Session page
              </h2>
              <p className="text-muted-foreground">Sessions contain FAQs</p>
              <AddSession />
            </div>
          </div>
          <SessionsTable sessions={sessions} />
        </div>
      </section>
    </>
  )
}
