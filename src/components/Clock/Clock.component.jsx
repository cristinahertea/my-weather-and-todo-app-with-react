import React, { useState, useEffect } from 'react'
import {
  ClockWrapper,
  TimeComponentContainer,
  TimeValueContainer,
  TimeLabelContainer,
  TimeValueContainerAlt,
  TimeLabelContainerAlt,
} from './Clock.styles'

const Clock = () => {
  const [time, setTime] = useState('')
  //load from js -cdm in react-cdm=component did mount
  useEffect(() => {
    setInterval(() => {
      let [hour, minute, second] = new Date().toLocaleTimeString().split(':')
      setTime([hour, minute, second])
    }, 500)
  }, [])

  //const setClock(hours,minutes,seconds)=new Date().getTime
  return (
    <ClockWrapper>
      <TimeComponentContainer>
        <TimeValueContainer>{time[0]}</TimeValueContainer>
        <TimeLabelContainer>hours</TimeLabelContainer>
      </TimeComponentContainer>
      <TimeComponentContainer>
        <TimeValueContainer>{time[1]}</TimeValueContainer>
        <TimeLabelContainer>minutes</TimeLabelContainer>
      </TimeComponentContainer>
      <TimeComponentContainer>
        <TimeValueContainerAlt>{time[2]}</TimeValueContainerAlt>
        <TimeLabelContainerAlt>hours</TimeLabelContainerAlt>
      </TimeComponentContainer>
    </ClockWrapper>
  )
}
export default Clock
