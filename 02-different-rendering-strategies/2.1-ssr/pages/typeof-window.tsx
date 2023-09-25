function ProcessBrowserPage() {
  const side = typeof window === 'undefined' ? 'server' : 'client'
  return (
    <>
      <main>
        <p>You&apos;re currently on the {side}-side.</p>
      </main>
    </>
  )
}

export default ProcessBrowserPage
