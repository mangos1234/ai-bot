'use client';

import React, { useState } from 'react'
import { evaluate } from './actions';

export default function Home() {
  const [inputState, setInputState] = useState('')
  const [user, setUser] = useState<string>('')
  const [response, setResponse] = useState<string>('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('submit')
    setUser(inputState)
    const value = await evaluate(inputState)
    
    console.log(value)
    setResponse(value);
    setInputState('')
  }
  return (
    <main>
      <div className="bg-gray-50">
        <p>user: {user}</p>
        <p>MillieBot: {response}</p>
      </div>
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