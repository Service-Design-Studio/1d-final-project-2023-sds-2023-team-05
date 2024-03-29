"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import AddToSession from "../add-to-session"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { DataTableViewOptions } from "./data-table-view-options"
import { authors, tags } from "./data/data"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  sessions?: any
}

export function DataTableToolbar<TData>({
  table,
  sessions,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const isAnyRowSelected = table.getSelectedRowModel().flatRows.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter FAQs..."
          value={
            (table.getColumn("question")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("question")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
          id="filter-faqs-input"
        />
        {table.getColumn("tag") && (
          <DataTableFacetedFilter
            column={table.getColumn("tag")}
            title="Tag"
            options={tags}
          />
        )}
        {table.getColumn("author") && (
          <DataTableFacetedFilter
            column={table.getColumn("author")}
            title="Author"
            options={authors}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
        {isAnyRowSelected && (
          // <Button
          //   variant="default"
          //   onClick={() => createNewSession()}
          //   className="h-8 px-2 lg:px-3"
          // >
          //   Create New Session
          //   <Plus className="ml-2 h-4 w-4" />
          // </Button>
          <AddToSession table={table} sessions={sessions} />
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}
