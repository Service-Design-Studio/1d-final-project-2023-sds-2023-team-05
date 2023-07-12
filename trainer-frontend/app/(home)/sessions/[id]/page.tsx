import React from "react"

import { API_PROD_URL } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

async function getSession(id: string) {
  const res = await fetch(`${API_PROD_URL}/sessions/${id}`, {
    cache: "no-store",
  })
  const session = await res.json()
  return session
}

export default async function SessionPage({
  params,
}: {
  params: { id: string }
}) {
  const session = await getSession(params.id)
  return (
    <section className="container flex flex-col mt-5 w-1/2 mx-auto">
      <h2 className="text-2xl font-bold tracking-tight flex">
        {session.title}
      </h2>
      <p className="text-muted-foreground flex">Author: {session.author}</p>
      <p className="text-muted-foreground flex">Code: {session.classcode}</p>
      <Separator className="mt-4" />
      <Accordion type="single" collapsible className="">
        {session.faqs.map((faq: any, index: number) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
