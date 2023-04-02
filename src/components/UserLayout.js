import React from 'react'
import { MainContainer } from './styled/MainContainer.styled'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <MainContainer>
        <Outlet/>
    </MainContainer>
  )
}

export default UserLayout