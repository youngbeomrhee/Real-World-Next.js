function ProcessBrowserPage() {
  return (
    <>
      <main>
        <p> I'm running on the {process.browser ? 'client' : 'server'} </p>
      </main>
    </>
  )
}

export default ProcessBrowserPage
