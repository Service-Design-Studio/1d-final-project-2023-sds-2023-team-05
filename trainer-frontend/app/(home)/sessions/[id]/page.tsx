import React from "react"

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
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}
