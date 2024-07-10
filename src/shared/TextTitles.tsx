import React from 'react'

type Props = {
  children: React.ReactNode
}

const TextTitles = ({ children }: Props) => {
  return (
    <p className="basis-3/5 font-ubuntu text-4xl">
      {children}
    </p>
  )
}

export default TextTitles