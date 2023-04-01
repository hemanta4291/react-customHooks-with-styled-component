import React from 'react'
import { useParams } from 'react-router-dom'
import useUser from '../hooks/useUser';

const UserDetails = () => {
    const { userId } = useParams();
    const {user,isLoading,fetchError} = useUser(userId)

    console.log(user)

  return (
    <div>UserDetails</div>
  )
}

export default UserDetails