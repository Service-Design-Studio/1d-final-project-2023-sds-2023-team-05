"use client"

import { useState } from "react"

import { API_PROD_URL } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

import { Chat } from "./chatbot-table"
import { Textarea } from "./ui/textarea"
import { useToast } from "./ui/use-toast"

export default function EditChatbotResponse(chat: Chat) {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const [answer, setAnswer] = useState(chat.trained_response)
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    const res = await fetch(`${API_PROD_URL}/chats/${chat.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trained_response: answer,
      }),
    })
    if (!res.ok) {
      throw new Error("Something went wrong")
    } else {
      setOpen(false)
      toast({
        title: "Response Updated",
      })
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="link"
          id="add-question-button"
          className="text-blue-600 editButton"
          size={"icon"}
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]" id="edit-chatbot-dialog">
        <DialogHeader>
          <DialogTitle>Edit Chatbot Response</DialogTitle>
          <DialogDescription>
            This will be used to train the Kampung Kaki to answer such questions
            better.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Question:
            </Label>
            <div className="col-span-3 text-gray-600 text-sm">
              {chat.question}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Chatbot Response
            </Label>
            <div className="col-span-3 text-gray-600 text-sm">
              {chat.answer}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Flag Reason
            </Label>
            <div className="col-span-3 text-gray-600 text-sm">
              {chat.comment ? chat.comment : chat.reason}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="answer-input" className="text-right">
              Trained Response
            </Label>
            <Textarea
              value={answer}
              placeholder="It is believed that..."
              className="col-span-3 h-60"
              onChange={(e) => setAnswer(e.target.value)}
              id="answer-input"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" id="submit-question" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
