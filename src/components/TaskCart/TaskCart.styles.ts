import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.color.font};
    padding: 10px;
    margin-bottom: 5px;
    height: 240px;
    background-color: ${({theme}) => theme.color.bgcart};
    overflow: hidden;
    width: 100%;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;

    div:nth-child(2){
        display: flex;
        justify-content: space-between;
        font-size: .8rem;
        margin-top: 1px;
    }

    div:first-child{
        display: flex;
        justify-content: space-between;
        width: 100%;

        span{
            display: flex;
            align-items: center;
            font-weight: bold;
            :first-child{
                gap: 2px;
            }
            :nth-child(2){
                cursor: pointer;
            }
        }


    }
`

type ContentProps = {
    isNote: boolean;
}

export const Content = styled.div<ContentProps>`
    display: flex;
    overflow-wrap: anywhere;
    word-wrap: break-all;
    max-width: inherit;
    flex-grow: 1;
    margin: 10px 0;
    overflow-Y: scroll;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

    ${(props) => {
        if(!props.isNote){
            return`
                display: flex;
                justify-content: center;
                align-items: center;
            `
        }}
    }
`

type PriorityProps = {
    level: string
}

export const Priority = styled.div<PriorityProps>`
    border-radius: 5px;
    padding: 3px 6px;
    margin: 3px 0;
    width: fit-content;
    color: ${({theme}) => theme.color.bgapp};

    ${(props) => {
        switch(props.level){
            case 'low priority':
                return `
                    background-color: green;
                `
            case 'medium priority':
                return `
                    background-color: orange;
                `
            case 'high priority':
                return `
                    background-color: red;
                `
        }
    }}
`