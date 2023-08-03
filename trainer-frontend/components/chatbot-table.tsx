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

import EditChatbotResponse from "./edit-chatbot-response"
import RemoveFlag from "./remove-flag"

interface ChatProps {
  chats: Chat[]
  flagmode: "flagged" | "edited" | "all"
}

export interface Chat {
  id: string
  question: string
  answer: string
  flagged: boolean
  created_at: string
  updated_at: string
  reason?: string
  comment?: string
  trained_response?: string
  learner?: string
}

function ChatbotTable({ chats, flagmode }: ChatProps) {
  const router = useRouter()

  const filteredQuestions = chats.filter((chat) => {
    if (flagmode === "flagged") {
      return chat.flagged && !chat.trained_response
    } else if (flagmode === "edited") {
      return chat.trained_response
    } else {
      return true
    }
  })

  return (
    <div>
      <Table id="chatbot-table">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Question</TableHead>
            <TableHead className="w-[600px]">Answer</TableHead>
            {flagmode != "all" && (
              <TableHead className="w-[200px]">Flagged Reason</TableHead>
            )}
            {flagmode == "edited" && (
              <TableHead className="w-[200px]">Edited Response</TableHead>
            )}
            {flagmode != "all" && <TableHead className="w-[50px]"></TableHead>}
            {flagmode == "flagged" && (
              <TableHead className="w-[50px]"></TableHead>
            )}

            {flagmode == "all" && (
              <TableHead className="w-[200px]">Flagged</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredQuestions.map((chat) => (
            <TableRow>
              <TableCell className="font-medium sessionClasscodes">
                {chat.question}
              </TableCell>
              <TableCell className="sessionTitle">{chat.answer}</TableCell>
              {(flagmode == "edited" || flagmode == "flagged") && (
                <>
                  <TableCell>
                    {chat.comment ? chat.comment : chat.reason}
                    {chat.learner && (
                      <>
                        <span className="font-light italic">
                          {" "}
                          ({chat.learner})
                        </span>
                      </>
                    )}
                  </TableCell>
                  {flagmode == "edited" && (
                    <TableCell>{chat.trained_response}</TableCell>
                  )}
                  <TableCell>
                    <EditChatbotResponse {...chat} />
                  </TableCell>
                  {flagmode == "flagged" && (
                    <>
                      <TableCell className="w-10">
                        <RemoveFlag id={chat.id} />
                      </TableCell>
                    </>
                  )}
                </>
              )}

              {flagmode == "all" && (
                <TableCell>
                  {chat.flagged ? "Flagged" : "Not Flagged"}
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
