import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { API_PROD_URL } from "@/config/site"

async function getSession(id: string) {
  const res = await fetch(`${API_PROD_URL}/sessions/${id}`)
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
    <div>
      <Accordion type="single" collapsible className="w-1/2 mx-auto">
        {session.faqs.map((faq: any, index: number) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
