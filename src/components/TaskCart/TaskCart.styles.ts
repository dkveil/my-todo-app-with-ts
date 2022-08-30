import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: cyan;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.color.font};
    padding: 10px;
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Content = styled.div`
    height: 100px;
`