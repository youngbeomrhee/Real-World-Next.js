import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return (
    <>
      <button className="button">{children}</button>
      <style jsx>{`
        .button {
          padding: 1em;
          border-radius: 1em;
          border: none;
          background: green;
          color: white;
        }
      `}</style>
    </>
  )
}

export default Button
