import styled from "styled-components";

export const GlobalLoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    & img {
        width: ${(props)=>props.imgSize === 'large' ? '100%' : props.imgSize === 'medium' ? '60%' : props.imgSize === "small" ? "40%" : ''};
    }

`