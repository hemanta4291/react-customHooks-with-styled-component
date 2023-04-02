import React from 'react'
import GlobalError from '../components/GlobalError'
import { BtnMediumPrimaryContained } from '../components/styled/Button.styled'
import { Link } from 'react-router-dom'

const NotPageFound = () => {
  return (
    <div>
        <BtnMediumPrimaryContained style={{marginBottom:"24px"}}>
            <Link to="/">Back to home</Link>
        </BtnMediumPrimaryContained>
        <GlobalError errorText="Not Found Page"/>
    </div>
  )
}

export default NotPageFound