import { ReactNode } from 'react'

export default function FancyButton({ children }: { children: ReactNode }) {
  return (
    <>
      <button className="button">{children}</button>
      <style jsx>{`
        .button {
          padding: 2em;
          border-radius: 2em;
          background: purple;
          color: white;
          font-size: bold;
          border: pink solid 2px;
        }
      `}</style>
    </>
  )
}
