"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { columns } from "@components/question-table/columns"
import { DataTable } from "@components/question-table/data-table"
import { z } from "zod"

import { API_PROD_URL } from "@/config/site"
import AddQuestion from "@/components/AddQuestion"
import { taskSchema } from "@/components/question-table/data/schema"

async function getSessions(search: string) {
  const res = await fetch(`${API_PROD_URL}/sessions/${search}`, {
    cache: "no-store",
  })
  // const tasks = JSON.parse(data.toString())
  return await res.json()
  //   return z.array(taskSchema).parse(sessions.faqs)
}

export default async function TaskPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = searchParams.get("id") || ""

  const session = await getSessions(id)
  const faqs = z.array(taskSchema).parse(session.faqs)
  const title = session.title

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Session title: {title}
            </h2>
            <p className="text-muted-foreground">{title}</p>
            <AddQuestion />
          </div>
        </div>
        <DataTable data={faqs} columns={columns} />
      </div>
    </>
  )
}
