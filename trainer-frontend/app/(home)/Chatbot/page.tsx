import { columns } from "@components/question-table/columns"
import { DataTable } from "@components/question-table/data-table"

import { API_PROD_URL } from "@/config/site"
import ChatbotTable from "@/components/Chatbot-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



interface Session {
  id: string
  question: string
  answer: string
  flagged: boolean
  created_at: string
  updated_at: string
}

async function getSessions(): Promise<Session[]> {
  const res = await fetch(`${API_PROD_URL}/chats`, { cache: "no-store" })
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
          <Tabs defaultValue="flagged">
            <TabsList>
              <TabsTrigger value="flagged" id="flaggedresponses">Flagged </TabsTrigger>
              <TabsTrigger value="all" id="allresponses">All </TabsTrigger>
            </TabsList>
            <TabsContent value="flagged">
              <h2>View <b>flagged</b> responses from the chatbot. </h2>
              <ChatbotTable sessions={sessions} flagmode={true} />
            </TabsContent>
            <TabsContent value="all">
              <h2>View <b>all</b> responses from the chatbot. </h2>
              <ChatbotTable sessions={sessions} flagmode={false} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
