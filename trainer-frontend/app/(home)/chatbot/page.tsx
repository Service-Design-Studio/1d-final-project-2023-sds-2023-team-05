import { API_PROD_URL } from "@/config/site"
import ChatbotTable from "@/components/chatbot-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



interface Response {
  id: string
  question: string
  answer: string
  reason?: string
  comment?: string
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
<<<<<<< HEAD
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
=======
              <TabsTrigger value="flagged" id="flaggedresponses">
                Flagged{" "}
              </TabsTrigger>
              <TabsTrigger value="edited" id="editedresponses">
                Edited Responses
              </TabsTrigger>
              <TabsTrigger value="all" id="allresponses">
                All{" "}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="flagged">
              <h2 id="flagged-tab-sentence">
                Responses students have <b>flagged</b>.
              </h2>
              <ChatbotTable chats={responses} flagmode={"flagged"} />
            </TabsContent>
            <TabsContent value="edited">
              <h2 id="flagged-tab-sentence">
                Responses you have <b>edited</b>.{" "}
              </h2>
              <ChatbotTable chats={responses} flagmode={"edited"} />
            </TabsContent>
            <TabsContent value="all">
              <h2 id="all-tab-sentence">
                View <b>all</b> responses from the chatbot.{" "}
              </h2>
              <ChatbotTable chats={responses} flagmode={"all"} />
>>>>>>> f0dcb10e462b3a572f9355d7d3fa7b40f697a9e1
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
