import React from 'react'
import LoadingImg from '../assets/Loading_icon.gif'
import { GlobalLoadingWrapper } from './styled/GlobalLoading.styled'

const GlobalLoading = ({imgSize=""}) => {
  return (
    <GlobalLoadingWrapper imgSize={imgSize}>
        <img src={LoadingImg} alt="loading"/>
    </GlobalLoadingWrapper>
  )
}

export default GlobalLoading