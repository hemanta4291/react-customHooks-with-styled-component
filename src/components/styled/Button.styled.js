import styled from "styled-components";


export const BtnMediumPrimaryContained = styled.button`
    padding: 12px 15px;
    background: ${({theme})=>theme.color.success};
    border-radius: 6px;
    color: ${({theme})=>theme.color.white};
    font-size: ${({theme})=>theme.fontSize.fs_16};
    border: 1px solid ${({theme})=>theme.color.success};
    cursor: pointer;
    display: flex;
    align-items: center;
    grid-gap: 8px;
    transition: all linear 0.3s;
    
    & a{
        color: ${({theme})=>theme.color.white};
        
    }
    &:hover{
        background:${({theme})=>theme.color.white};
        color: ${({theme})=>theme.color.success};
    }
    &:hover a{
        color: ${({theme})=>theme.color.success};
    }
`

