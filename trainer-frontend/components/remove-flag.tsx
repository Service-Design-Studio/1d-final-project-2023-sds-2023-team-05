import { API_PROD_URL } from "@/config/site"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

import { toast } from "./ui/use-toast"

export default function RemoveFlag({ id }: { id: string }) {
  const unflag = async (e: React.MouseEvent) => {
    e.preventDefault()
    const res = await fetch(`${API_PROD_URL}/chats/flagged/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!res.ok) {
      throw new Error("Something went wrong")
    } else {
      toast({
        title: "Response unflagged",
      })
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="link" className="text-red-500" size={"icon"}>
          Unflag
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Unflag Response?</AlertDialogTitle>
          <AlertDialogDescription>
            A student flagged this response because they deemed it
            inappropriate. Are you sure you want to unflag it?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={unflag}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
