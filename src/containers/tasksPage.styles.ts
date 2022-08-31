import styled from "styled-components";

export const TaskPageWrapper = styled.section`
`

export const TaskPageContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    ${({theme}) => theme.mq.desktop}{
        flex-direction: row;
        height: 75vh;
    }
`



export const TasksWrapper = styled.div`
    width: 100%;
    border-radius: 10px;
    flex-grow: 1;

    h2{
        font-size: 1.4rem;
        font-weight: 500;
        font-family: ${({theme}) => theme.font.family.primary};
        margin-bottom: 20px;
    }

    ${({theme}) => theme.mq.desktop}{
        padding: 10px 5px;
    }
`