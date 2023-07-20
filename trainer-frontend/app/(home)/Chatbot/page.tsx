import { columns } from "@components/question-table/columns"
import { DataTable } from "@components/question-table/data-table"

import { API_PROD_URL } from "@/config/site"
import AddQuestion from "@/components/AddQuestion"
import ChatbotTable from "@/components/chatbot-table"

async function getFaqs() {
  const res = await fetch(`${API_PROD_URL}/faqs`, { cache: "no-store" })
  const faqs = await res.json()
  return faqs
}



interface Session {
  id: string
  classcode: string
  author: string
  title: string
}

async function getSessions(): Promise<Session[]> {
  const res = await fetch(`${API_PROD_URL}/sessions`, { cache: "no-store" })
  const sessions = await res.json()
  return sessions
}

export default async function FaqPage() {
  const sessions = await getSessions()

  return (
    <>
      <section className="">
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Chatbot</h2>
            </div>
          </div>
          <ChatbotTable sessions={sessions} />
        </div>
      </section>
    </>
  )
}
