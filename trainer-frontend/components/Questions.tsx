async function getData() {
  const res = await fetch("https://faqapi-service-mgn7slqt5a-as.a.run.app/faqs")
  return res.json()
}

export default async function Questions() {
  // Initiate both requests in parallel
  const artistData = getData()

  // Wait for the promises to resolve
  const [artist] = await Promise.all([artistData])

  return (
    <>
      <div>
        {artist.map((artist) => (
          <pre>{JSON.stringify(artist)}</pre>
        ))}
      </div>
    </>
  )
}
