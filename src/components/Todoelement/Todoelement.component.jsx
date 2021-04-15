import React, { useState } from 'react'
import { TodoelementWrapper } from './Todoelement.styles'

const Todoelement = ({ children }) => {
  const [element, setElement] = useState(false)
  const handleClick = () => {
    setElement(!element)
  }
  return (
    <TodoelementWrapper onClick={handleClick} element={element}>
      {children}
    </TodoelementWrapper>
  )
}

export default Todoelement
