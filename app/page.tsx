'use client';

import React, { useState } from 'react'
import { evaluate } from './actions';

export default function Home() {
  const [inputState, setInputState] = useState('')
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submit')
    const value = await evaluate(inputState)
    console.log(value)
    setInputState('')
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={inputState} onChange={(input) => {
            setInputState(input.target.value)
          }} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </main>
  )
}