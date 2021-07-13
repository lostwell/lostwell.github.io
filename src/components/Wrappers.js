import styled from 'styled-components'
// import { colors } from '../constants/styles'

const withNoPointerEvents = (component) =>{
  const ResultWrapper = styled(component)`
    pointer-events: none;
  `

  return (props) =>{
    return (
      <ResultWrapper {...props} />
    )
  }
}

export {
  withNoPointerEvents
}