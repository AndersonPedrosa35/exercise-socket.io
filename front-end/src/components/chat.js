import React, { useState, useEffect } from 'react';
import client from '../utils/client';
import Form from './Form';

export default function Chat() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
    { isLoading && <h1>Carregando...</h1> }
    <Form />
    
    </div>

  )
}