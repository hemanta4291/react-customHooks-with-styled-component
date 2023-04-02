import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import useUser from '../hooks/useUser';
import { PostSingle, ProfileTop, UserPostContainer, UserProfileContainer, UserProfileLeft, UserProfileRight, UserProfileRightTop, UserProfileWrapper } from '../components/styled/UserProfile.styled';
import ProfileImg from '../assets/profile.png'
import { BtnMediumPrimaryContained } from '../components/styled/Button.styled';
import GlobalError from '../components/GlobalError';
import GlobalLoading from '../components/GlobalLoading';

const UserProfile = () => {
  const { userId } = useParams();
  const { state } = useLocation();
  const { name, email, company } = state || {}
  const { user, isLoading, fetchError } = useUser(userId)

  //render logic
  let content = null

  if (isLoading) content = <GlobalLoading />

  if (!isLoading && fetchError) content = <GlobalError errorText={fetchError} />

  if (!isLoading && !fetchError && user.posts?.length > 0) {
    content = user.posts?.map((post) => (
      <PostSingle key={post.id}>
        <h6>{post.title}</h6>
        <p>{post.body}</p>
      </PostSingle>
    ))
  }

  console.log('render child')

  return (
    <UserProfileWrapper>
      <ProfileTop>
        <BtnMediumPrimaryContained><Link to="/">Back</Link></BtnMediumPrimaryContained>
        <h2 className='title'>User Profile</h2>
      </ProfileTop>

      <UserProfileContainer>
        <UserProfileLeft>
          <img src={ProfileImg} alt='profile' />
          <h6>{name}</h6>
          <p><span>Email : </span>{email}</p>
          <p><span>Company : </span> {company}</p>
        </UserProfileLeft>
        <UserProfileRight>
          <UserProfileRightTop>
            <h4>Post List</h4>
            <input placeholder='Search' />
          </UserProfileRightTop>
          <UserPostContainer isLoading={isLoading} fetchError={fetchError}>
            {
              content
            }
          </UserPostContainer>

        </UserProfileRight>
      </UserProfileContainer>
    </UserProfileWrapper>
  )
}

export default UserProfile