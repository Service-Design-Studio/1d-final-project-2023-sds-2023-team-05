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

interface SessionProps {
  sessions: Session[]
  flagmode: boolean
}

interface Session {
  id: string
  question: string
  answer: string
  flagged: boolean
  created_at: string
  updated_at: string
  reason: string
  comment: string
}

function ChatbotTable({ sessions, flagmode }: SessionProps) {
  const router = useRouter()

  const filteredSessions = flagmode
    ? sessions.filter((session) => session.flagged)
    : sessions
  return (
    <div>
      <Table id="sessions-table">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Question</TableHead>
            <TableHead className="w-[600px]">Answer</TableHead>
            {flagmode && (
              <TableHead className="w-[200px]">Flagged Reason</TableHead>
            )}
            {!flagmode && <TableHead className="w-[200px]">Flagged</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSessions.map((session) => (
            <TableRow>
              <TableCell className="font-medium sessionClasscodes">
                {session.question}
              </TableCell>
              <TableCell className="sessionTitle">{session.answer}</TableCell>
              {flagmode && (
                <TableCell>
                  {session.comment ? session.comment : session.reason}
                </TableCell>
              )}
              {!flagmode && (
                <TableCell>
                  {session.flagged ? "Flagged" : "Not Flagged"}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default ChatbotTable
