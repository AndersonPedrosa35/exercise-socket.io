import React, { useState } from 'react'
import client from '../utils/client';

export default function Form() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form action="">
    <input
      type="text"
      className="input-name"
      onChange={ ({ target }) => setName(target.value) }
    />
    <input
      type="text"
      className="inputmessage"
      onChange={({ target }) => setMessage(target.value)}
    />
    <button
     type='button'
     className="send-button" onClick={() => {
      client.emit('message', { name, message });
    }}>Send</button>
  </form>
  )
}
