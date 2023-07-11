import Link from "next/link"
import { columns } from "@components/question-table/columns"
import { DataTable } from "@components/question-table/data-table"
import { z } from "zod"

import { API_LOCAL_URL, API_PROD_URL } from "@/config/site"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AddQuestion from "@/components/AddQuestion"
import { taskSchema } from "@/components/question-table/data/schema"
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
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Session page</h2>
            <p className="text-muted-foreground">Sessions contain FAQs</p>
          </div>
        </div>
        <SessionsTable sessions={sessions} />
      </div>
    </>
  )
}
