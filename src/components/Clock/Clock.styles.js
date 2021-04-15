import styled from 'styled-components'

export const ClockWrapper = styled.div`
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  width: fit-content;
  margin: auto;
`
export const TimeComponentContainer = styled.div`
  position: relative;
  margin: 0.5px;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  margin-bottom: 150px;
`
export const TimeValueContainer = styled.span`
  position: relative;
  display: block;
  width: 100px;
  height: 80px;
  background: #a98e9e;
  color: rgb(64, 61, 57);
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  z-index: 10;
`
export const TimeLabelContainer = styled.span`
  position: relative;
  width: 100px;
  height: 30px;
  font-size: 0.7em;
  color: rgb(64, 61, 57);
  letter-spacing: 0.2em;
  font-weight: 500;
  z-index: 9;
  box-shadow: none;
  background: #9d8789;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TimeValueContainerAlt = styled.span`
  position: relative;
  display: block;
  width: 100px;
  height: 80px;
  background: rgb(32, 32, 32);
  color: white;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  z-index: 10;
`
export const TimeLabelContainerAlt = styled.span`
  position: relative;
  width: 100px;
  height: 30px;
  font-size: 0.7em;
  color: white;
  letter-spacing: 0.2em;
  font-weight: 500;
  z-index: 9;
  box-shadow: none;
  background: rgb(51, 53, 51);
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
`
