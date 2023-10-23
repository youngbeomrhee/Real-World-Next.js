export default function Highlight(props: { text: string }) {
  return (
    <>
      <span>
        <b>{props.text}</b>
      </span>
      <style jsx global>{`
        span {
          background: yellow;
          font-weight: bold;
        }
      `}</style>
    </>
  )
}
