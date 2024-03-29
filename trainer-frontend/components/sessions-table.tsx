"use client"

import { useRouter } from "next/navigation"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface SessionProps {
  sessions: Session[]
}

export interface Session {
  id: string
  classcode: string
  author: string
  title: string
}

function SessionsTable({ sessions }: SessionProps) {
  const router = useRouter()
  return (
    <div>
      <Table id="sessions-table">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Class Code</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Title</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions.map((session) => (
            <TableRow
              key={session.id}
              className="cursor-pointer hover:bg-slate-50"
              onClick={() => router.push(`/sessions/${session.id}`)}
              id={`session-${session.id}`}
            >
              <TableCell className="font-medium sessionClasscodes">
                {session.classcode}
              </TableCell>
              <TableCell className="sessionAuthor">{session.author}</TableCell>
              <TableCell className="sessionTitle">{session.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default SessionsTable
