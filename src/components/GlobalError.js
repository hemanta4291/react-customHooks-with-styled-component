import React from 'react'
import { GlobalErrorWrapper } from './styled/GlobalError'

const GlobalError = ({errorText=""}) => {
  return (
    <GlobalErrorWrapper>
        <h6>{errorText}</h6>
    </GlobalErrorWrapper>
  )
}

export default GlobalError