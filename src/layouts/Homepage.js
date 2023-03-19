import React from 'react'
import MainNavigation from './common/MainNavigation'
import NewTaskAdd from './components/homepage/NewTaskAdd'
import TodoList from './homepage/TodoList'

export default function Homepage() {
  return (
    <div>
      <MainNavigation />
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div>
      <h2>ToDo List</h2>
      <NewTaskAdd />
      <div style={{ margingTop: '20px'}}>
      <TodoList />
      </div>
      </div>
</div>
    </div>
  )
}
