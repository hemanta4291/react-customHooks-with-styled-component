import styled from "styled-components";

export const ProfileTop = styled.div``
export const UserProfileWrapper = styled.div`
    ${ProfileTop}{
        display: flex;
        flex-direction: column;
        align-items: center;

        & h2{
            margin: 24px 0 0 0;
        }
    }
`
export const UserProfileContainer = styled.div`
    grid-gap:30px;
    padding: 40px 0 0 0;


`
export const UserProfileLeft = styled.div`
    border: 1px solid ${({theme})=>theme.color.border};
    border-radius:6px;
    padding: 24px 16px;
    text-align:center;
    max-width:450px;
    width: 100%;
    margin: 0 auto 80px auto;

    & img {
        width: 100px;
        height: 100px;
        object-fit:cover;
    }

    & h6{
        margin: 8px 0 16px 0;
        font-weight:${({theme})=>theme.fontWeight.fw_600};
    }

    & p{
        line-height :${({theme})=>theme.lineHeight.lh_32};
    }

    & span{
        font-weight:${({theme})=>theme.fontWeight.fw_600};
    }

`
export const UserProfileRight = styled.div`
    padding: 32px 24px;
    border: 1px solid ${({theme})=>theme.color.border};
    border-radius: 6px;
`

export const UserProfileRightTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 40px 0;

    & input{
            {
            border: 1px solid ${({theme})=>theme.color.border};
            font-size: ${({theme})=>theme.fontSize.fs_16};
            height: 40px;
            border-radius: 6px;
            padding: 16px;
            max-width: 400px;
            width: 100%;

            &:focus{
                outline: 0;
            }
         }
    }

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.mobile}){
            flex-direction:column;

            & input{
                margin: 16px 0 0 0;
                max-width: 100%;
            }
         }

`
export const UserPostContainer = styled.div`
    display: grid;
    grid-template-columns: ${({isLoading,fetchError})=> isLoading ? "repeat(1,1fr)" : fetchError ? "repeat(1,1fr)": 'repeat(2,1fr)'};
    grid-gap: 30px;

    @media only screen and (max-width: ${({theme})=>theme.breakPoint.small}){
        grid-template-columns:repeat(1,1fr);
    }
`

export const PostSingle = styled.div`
    border: 1px solid ${({theme})=>theme.color.border};
    min-height:200px;
    border-radius:6px;
    padding: 16px;
    text-align:center;


    & h6{
        padding:0 0 12px 0;
    }
`
