"use client"

import * as React from "react"
import { ArrowUpDown, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Session } from "./sessions-table"

export default function AddQuestionToExistingSession({
  sessions,
  session,
  setSession,
}: any) {
  const [open, setOpen] = React.useState(false)
  // console.log(sessions)

  const formattedSessions = sessions.map((session: Session) => {
    return {
      id: session.id,
      value: session.id,
      label: session.title,
    }
  })

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {session
            ? formattedSessions.find((sesh: any) => sesh.value == session)
                ?.label
            : "Select session..."}
          <ArrowUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search sessions..." className="h-9" />
          <CommandEmpty>No session found.</CommandEmpty>
          <CommandGroup>
            {formattedSessions.map((sesh: any) => (
              <CommandItem
                key={sesh.id}
                onSelect={(currentValue) => {
                  console.log(currentValue)
                  setSession(currentValue === session ? "" : currentValue)
                  setOpen(false)
                }}
                value={sesh.id.toString()}
              >
                {sesh.label}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    session === sesh.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
