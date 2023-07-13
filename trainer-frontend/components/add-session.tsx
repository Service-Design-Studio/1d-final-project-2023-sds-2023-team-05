"use client"

import { useState } from "react"
import { Table } from "@tanstack/react-table"
import { Plus } from "lucide-react"

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

interface AddSessionProps<TData> {
  table: Table<TData>
}

export default function AddSession({ table }: AddSessionProps<any>) {
  const [title, setTitle] = useState("")

  const getSelectedRows = () => {
    const selectedRows = []

    for (const row of table.getSelectedRowModel().flatRows) {
      selectedRows.push(row.getValue("id"))
    }

    return selectedRows
  }

  async function createNewSession(title: string) {
    const selectedRows = getSelectedRows()

    if (title == "" || selectedRows.length == 0) {
      alert("Input title!")
      return
    }

    const res = await fetch(`${API_PROD_URL}/sessions`, {
      body: JSON.stringify({
        title: title,
        faqs: selectedRows,
        author: "Basil",
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

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    createNewSession(title)
    window.location.reload()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          className="h-8 px-2 lg:px-3"
          id="create-new-session-button"
        >
          Create New Session
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" id="new-session-dialog">
        <DialogHeader>
          <DialogTitle>Add Session</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3"
              id="add-session-title"
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
