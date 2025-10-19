'use client'
import React from 'react'
import { useState } from 'react'
const ChatForm = ({
    onSendMessage,
  } : {
    onSendMessage : (message : string) => void;
  }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    if(message.trim() !== ""){
      onSendMessage(message);
      setMessage("")
    }
  }
  return (
    <form onSubmit={handleSubmit} className='flex mt-4 gap-2'>
      <input type="text" 
      onChange={(e)=> setMessage(e.target.value)}
      className='flex-1 px-2 py-2 rounded-lg border-2 focus:outline-none' placeholder='Type your message here...' />
      <button type='submit' className="px-4 py-2 rounded-lg bg-blue-500 text-white">
        Send
      </button>
    </form>
  )
}

export default ChatForm
