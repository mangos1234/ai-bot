'use client';

import React, { useState } from 'react'
import { evaluate } from './actions';

export default function Home() {
  const [inputState, setInputState] = useState('')
  const [conversation, setConversation] = useState<{
    user: string,
    message: string
  }[]>([])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setConversation(prev => [...prev, { user: 'User', message: inputState }]);
    const value = await evaluate(inputState)
    setConversation(prev => [...prev, { user: 'MillieBot', message: value }]);
    setInputState('')
  }
  return (
    <main className="max-w-[75ch] mx-auto text-lg sm:max-w-[50ch] sm:text-base h-screen flex justify-center items-center flex-col">
      <div className="p-4 overflow-scroll md:max-h-96">
        {conversation.map((message, index) => (
          <p key={index} className="mb-2">
            <strong>{message.user}:</strong> {message.message}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 w-full">
        <div className="mb-2">
          <input
            type="text"
            value={inputState}
            onChange={(e) => setInputState(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
        </div>
      </form>
    </main>
  )
}