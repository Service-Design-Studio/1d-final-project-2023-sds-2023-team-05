import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { columns } from "@components/question-table/columns"
import { DataTable } from "@components/question-table/data-table"
import { z } from "zod"

import AddQuestion from "@/components/AddQuestion"
import { taskSchema } from "@/components/question-table/data/schema"
import { UserNav } from "@/components/user-nav"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  // const data = await fs.readFile(
  //   path.join(process.cwd(), "components/tasks/data/tasks.json")
  // )

  const res = await fetch(
    "https://faqapi-service-mgn7slqt5a-as.a.run.app/faqs",
    { cache: "no-store" }
  )
  // const tasks = JSON.parse(data.toString())
  const faqs = await res.json()
  console.log(faqs)
  return z.array(taskSchema).parse(faqs)
}

export default async function TaskPage() {
  const tasks = await getTasks()

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
