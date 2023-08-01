"use client"

import { useRef, useState } from "react"
import { Loader2 } from "lucide-react"

import { API_PROD_URL, CHATBOT_URL } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
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

import { Textarea } from "./ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip"

interface AddQuestionProps {
  sessionID?: string
}

async function fetchBotResponse(question) {
  const res = await fetch(`${CHATBOT_URL}/chatbot/query`, {
    body: JSON.stringify({
      question: question,
      // session_id: '123456789',
      session_id: Date.now(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })

  if (!res.ok) {
    alert("Error...")
  }

  const data = await res.json()

  return data.ai_response
}

export default function AddQuestion({ sessionID }: AddQuestionProps) {
  const [answer, setAnswer] = useState("")
  const [question, setQuestion] = useState("")
  const [tag, setTag] = useState("") // Add state for the tag
  const [author, setAuthor] = useState("Basil")
  const [loading, setLoading] = useState(false)

  const questionInputRef = useRef(null) // Create a ref for the question input

  const handleAIsubmit = async () => {
    if (answer == "") {
      console.log("generate answer")
      const questionValue = questionInputRef.current.value
      if (questionValue.trim() === "") {
        alert("Please put a question in.")
        return
      }
      setLoading(true)

      let fill = await fetchBotResponse(questionValue)
      setAnswer(fill)
      setLoading(false)
    }
  }

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
    if (tag == "") {
      alert("Fill tag properly!")
      return
    }

    if (!sessionID) {
      // this is creating without a session, the normal /faqs endpoint
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
    } else if (sessionID) {
      // this is creating inside a session
      const res = await fetch(`${API_PROD_URL}/sessions/${sessionID}`, {
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
      <DialogContent className="sm:max-w-[525px]" id="new-question-dialog">
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
              ref={questionInputRef}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Why does...?"
              className="col-span-3"
              id="question-input"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tag" className="text-right">
              Tag
            </Label>
            <Select onValueChange={setTag}>
              <SelectTrigger className="w-[352px]" id="tag-selector">
                <SelectValue
                  placeholder="What religion is this related to?"
                  id="tag-select"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem id="Christianity-selector" value="Christianity">
                  Christianity
                </SelectItem>
                <SelectItem id="Islam-selector" value="Islam">
                  Islam
                </SelectItem>
                <SelectItem id="Buddhism-selector" value="Buddhism">
                  Buddhism
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="answer-input" className="text-right">
              Answer
            </Label>
            {/* <Input
              value={answer}
              placeholder="It is believed that..."
              className="col-span-3"
              onChange={(e) => setAnswer(e.target.value)}
              id="answer-input"
            /> */}
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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                {!loading ? (
                  <Button
                    type="submit"
                    disabled={answer !== ""}
                    id="ai-assist"
                    variant="secondary"
                    onClick={handleAIsubmit}
                  >
                    AI Assist
                  </Button>
                ) : (
                  <Button variant={"secondary"} disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    AI Assist
                  </Button>
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Use AI to generate an answer to the question.
                  <br /> You can edit the answer after.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button type="submit" id="submit-question" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
