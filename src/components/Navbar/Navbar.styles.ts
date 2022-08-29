import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 64px;
    background-color: ${({theme}) => theme.color.bgapp};
    border-bottom: 1px solid ${({theme}) => theme.color.font};

    ${({theme}) => theme.mq.desktop}{
        position: static;
        border: none;
    }
`

export const Content = styled.div`
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
`