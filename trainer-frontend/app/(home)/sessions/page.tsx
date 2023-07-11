import { columns } from "@components/question-table/columns"
import { DataTable } from "@components/question-table/data-table"
import { z } from "zod"

import { API_PROD_URL } from "@/config/site"
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

async function getSessions() {
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
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Class Code</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* <pre>{JSON.stringify(sessions, null, 2)}</pre> */}
      </div>
    </>
  )
}
