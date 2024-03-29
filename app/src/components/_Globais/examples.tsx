'use client';

import { useRouter } from 'next/navigation';
import React from 'react'


function examples() {
  const router = useRouter()
    
  
  return (
    <button type='button' onClick={() => {
        router.push('/examples')
    }}>
        Go to examples
    </button>
  )
}

export default examples