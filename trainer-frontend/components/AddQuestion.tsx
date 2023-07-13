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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AddQuestion() {
  const [answer, setAnswer] = useState("")
  const [question, setQuestion] = useState("")
  const [tag, setTag] = useState("") // Add state for the tag
  const [author, setAuthor] = useState("Basil")

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (question == "") {
      alert("Fill question properly!")
      return
    }
    if (answer == "") {
      alert("Fill answer properly!")
      return
    }

    const res = await fetch(`${API_PROD_URL}/faqs`, {
      body: JSON.stringify({
        answer,
        question,
        tag,
        author,
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
    setTag("")

    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" id="add-question-button">
          Add Question
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" id="new-question-dialog">
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
              id="question-input"
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
              id="answer-input"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tag" className="text-right">
              Tag
            </Label>
            <Select onValueChange={setTag}>
              <SelectTrigger className="w-[278px]" id="tag-selector">
                <SelectValue
                  placeholder="What religion is this related to?"
                  id="tag-select"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem id="Christianity-selector" value="Christianity">Christianity</SelectItem>
                <SelectItem id="Islam-selector" value="Islam">Islam</SelectItem>
                <SelectItem id="Buddhism-selector" value="Buddhism">Buddhism</SelectItem>
              </SelectContent>
            </Select>
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
