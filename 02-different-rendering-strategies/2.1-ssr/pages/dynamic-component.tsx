import dynamic from 'next/dynamic'
const Highlight = dynamic(() => import('../components/Highlight'), {
  ssr: false,
})

function DynamicPage() {
  return (
    <div>
      <Highlight code={`console.log('Hello, world! ')`} language="js" />
    </div>
  )
}

export default DynamicPage
