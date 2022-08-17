import React, { useState } from "react"

const Button = () => {
  const [value, setValue] = useState(0)

  const handleSum = () => {
    setValue(value + 1)
  }

  const handleSubtract = () => {
    setValue(value - 1)
  }

  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleSum}>Somar 1</button>
      <button onClick={handleSubtract}>Subtrair 1</button>
    </>
  )
}

export default Button
