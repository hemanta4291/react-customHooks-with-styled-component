import styled from "styled-components";

export const GlobalErrorWrapper = styled.div`

    background:${({theme})=>theme.color.wraning};
    width: 100%;
    display: flex;
    justify-content:center;
    padding: 24px;
    border-radius:6px;
    
    & h6{
        color: ${({theme})=>theme.color.white};
    }
`