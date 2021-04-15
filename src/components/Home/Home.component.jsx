import React from 'react'
import Clock from '../Clock'
import Weather from '../Weather'
import Todo from '../Todo'

import { HomeWrapper } from './Home.styles'

const Home = () => {
  return (
    <HomeWrapper>
      <Clock />
      <Weather />
      <Todo />
    </HomeWrapper>
  )
}
export default Home
