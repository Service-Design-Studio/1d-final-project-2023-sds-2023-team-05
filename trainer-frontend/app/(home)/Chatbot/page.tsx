import { API_PROD_URL } from "@/config/site"
import ChatbotTable from "@/components/chatbot-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



interface Response {
  id: string
  question: string
  answer: string
  flagged: boolean
  created_at: string
  updated_at: string
}

async function getResponses(): Promise<Response[]> {
  const res = await fetch(`${API_PROD_URL}/chats`, { cache: "no-store" })
  const responses = await res.json()
  return responses
}

export default async function FaqPage() {
  const responses = await getResponses()

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
              <ChatbotTable sessions={responses} flagmode={true} />
            </TabsContent>
            <TabsContent value="all">
              <h2>View <b>all</b> responses from the chatbot. </h2>
              <ChatbotTable sessions={responses} flagmode={false} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
