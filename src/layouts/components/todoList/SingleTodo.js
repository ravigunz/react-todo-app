import React from 'react'

export default function SingleTodo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid grey', padding: '10px'}}>
        <input type={'checkbox'} />
        <p>First Item</p>
        <button>Delete</button>
    </div>
  )
}
