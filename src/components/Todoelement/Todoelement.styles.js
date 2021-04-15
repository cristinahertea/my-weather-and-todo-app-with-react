import styled from 'styled-components'

export const TodoelementWrapper = styled.div`
  text-decoration: ${(props) => (props.element ? 'line-through' : 'none')};
  -webkit-text-decoration: ${(props) =>
    props.element ? 'line-through' : 'none'};
`
