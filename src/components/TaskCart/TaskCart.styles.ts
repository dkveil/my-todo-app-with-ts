import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: cyan;
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.color.font};
    padding: 10px;
    margin-bottom: 5px;
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
            :first-child{
                gap: 2px;
            }
            :nth-child(2){
                position: relative;
                cursor: pointer;

                :hover:before{
                    opacity: 1;
                    visibility: visible;
                }

                :before{
                    content: attr(data-hover);
                    font-size: .8rem;
                    visibility: hidden;
                    opacity: 0;
                    position: absolute;
                    width: fit-content;
                    z-index: 1;
                    top: 80%;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }


    }
`

export const Content = styled.div`
    height: 100px;
`