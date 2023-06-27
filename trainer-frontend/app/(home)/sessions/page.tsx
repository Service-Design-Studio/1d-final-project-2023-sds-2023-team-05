import { columns } from "@components/question-table/columns"
import { DataTable } from "@components/question-table/data-table"
import { z } from "zod"

import { API_PROD_URL } from "@/config/site"
import AddQuestion from "@/components/AddQuestion"
import { taskSchema } from "@/components/question-table/data/schema"

async function getSessions() {
  const res = await fetch(`${API_PROD_URL}/sessions/2`, { cache: "no-store" })
  const sessions = await res.json()
  return sessions
}

export default async function SessionPage() {
  const sessions = await getSessions()
  const faqs = z.array(taskSchema).parse(sessions.faqs)

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Session page</h2>
            <p className="text-muted-foreground">Session title</p>
            <AddQuestion />
          </div>
        </div>
        <DataTable data={faqs} columns={columns} />
      </div>
    </>
  )
}
