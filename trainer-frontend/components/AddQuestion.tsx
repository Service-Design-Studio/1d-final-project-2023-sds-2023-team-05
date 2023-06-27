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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AddQuestion() {
  const [answer, setAnswer] = useState("")
  const [question, setQuestion] = useState("")

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    const res = await fetch(`${API_PROD_URL}/faqs`, {
      body: JSON.stringify({
        answer,
        question,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    if (!res.ok) {
      alert("Error creating question")
    }

    setAnswer("")
    setQuestion("")

    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Question</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Question</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Question
            </Label>
            <Input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Why does...?"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Answer
            </Label>
            <Input
              value={answer}
              placeholder="It is believed that..."
              className="col-span-3"
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
