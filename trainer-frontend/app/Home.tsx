import AddQuestion from "@/components/AddQuestion"
import Questions from "@/components/Questions"

export default async function Page() {
  return (
    <>
      <div>
        <AddQuestion />
        <Questions />
      </div>
    </>
  )
}
