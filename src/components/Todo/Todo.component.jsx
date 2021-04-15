import React, { useState } from 'react'
import Todoelement from '../Todoelement'
import { InputField, TodoWrapper, AddToDo } from './Todo.styles'

const Todo = () => {
  const [toDoList, setToDoList] = useState([])
  const [inputValue, setInputValue] = useState()

  const handleClick = () => updateTodo()
  const handleChange = (e) => setInputValue(e.target.value)
  const handleKeyPress = (e) => e.keyCode === 13 && updateTodo()

  const updateTodo = () => {
    setToDoList([...toDoList, inputValue])
    setInputValue('')
  }

  return (
    <TodoWrapper>
      <h1>Do Me</h1>
      <InputField
        type='text'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <AddToDo onClick={handleClick}>+</AddToDo>
      <Todoelement>
        {toDoList.map((el) => {
          return <div>{el}</div>
        })}
      </Todoelement>
    </TodoWrapper>
  )
}
export default Todo
