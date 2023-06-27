import { columns } from "@components/question-table/columns"
import { DataTable } from "@components/question-table/data-table"
import { z } from "zod"

import { API_PROD_URL } from "@/config/site"
import AddQuestion from "@/components/AddQuestion"
import { taskSchema } from "@/components/question-table/data/schema"

async function getFaqs() {
  const res = await fetch(`${API_PROD_URL}/faqs`, { cache: "no-store" })
  const faqs = await res.json()
  return z.array(taskSchema).parse(faqs)
}

export default async function FaqPage() {
  const tasks = await getFaqs()

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">Questions r here</p>
            <AddQuestion />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
