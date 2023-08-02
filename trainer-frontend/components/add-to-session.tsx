"use client"

import { useState } from "react"
import { Table } from "@tanstack/react-table"
import { Plus } from "lucide-react"

import { API_PROD_URL } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

import AddQuestionToExistingSession from "./session-dropdown"
import { useToast } from "./ui/use-toast"

interface AddToSession<TData> {
  table?: Table<TData>
  sessions?: any
}

export default function AddToSession({ table, sessions }: AddToSession<any>) {
  const [session, setSession] = useState("")
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const getSelectedRows = () => {
    const selectedRows = []

    if (!table) return

    for (const row of table.getSelectedRowModel().flatRows) {
      selectedRows.push(row.original.id)
    }

    return selectedRows
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    const res = await fetch(`${API_PROD_URL}/sessions/${session}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        faq_ids: getSelectedRows(),
      }),
    })
    if (!res.ok) {
      throw new Error("Something went wrong")
    } else {
      setOpen(false)
      toast({
        title: "Questions added successfully!",
      })
      table?.resetRowSelection()
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="h-8 px-2 lg:px-3"
          id="create-new-session-button"
        >
          Add To Existing Session
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" id="new-session-dialog">
        <DialogHeader>
          <DialogTitle>Add To Existing Session</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <AddQuestionToExistingSession
              sessions={sessions}
              session={session}
              setSession={setSession}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            id="add-session-submit-button"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
