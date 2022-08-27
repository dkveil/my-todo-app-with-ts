import styled from "styled-components";
import { theme } from '../../styles/theme'

type FieldType = {
    fieldtype: "text" | "textarea" | "date" | "select" | "checkbox";
}

type InputType = {
    inputtype?: "checkbox-star"
}

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem 10rem;
    width: 520px;

`

export const Field = styled.div<FieldType>`
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    border: 2px solid ${({theme}) => theme.color.formfieldborder};
    margin-bottom: 2rem;
    width: 520px;

    input, textarea, select {
        background-color: ${({theme}) => theme.colorformfieldbg};
        padding: 13px 15px;
    }

    select {
        padding: 13px 14px;
    }

    ${(props) => {
        switch(props.fieldtype){
            case 'text':
                return`
                    height: 55px;
                `
            case 'textarea':
                return`
                    height: 120px;
                `
            case 'select':
                return`
                    height: 55px;
                `
            case 'date':
                return`
                    height: 55px
                `
            case 'checkbox':
                return`
                    height: 30px;
                    border: none;
                    border-radius: 0;
                    overflow: visible;
                `
        }
    }}
`

export const Label = styled.div`
    display: none;
    position: absolute;
    font-size: 16px;
    left: 17px;
    top: 18px;
    color: ${({theme}) => theme.color.font};
`

export const Input = styled.input<InputType>`

    ${(props) => {
        switch(props.inputtype){
            case 'checkbox-star':
                return`
                    position: relative;
                    font-size: 42px;
                    cursor: pointer;
                    visibility: hidden;

                    :before{
                        top: -150%;
                        position: absolute;
                        color: yellow;
                        content: "\\2605";
                        visibility: visible;
                    }

                    :checked:before{
                        content: "\\2606";
                    }

                `
                default:
                    return`
                        width: 100%;
                        height: 100%;
                        color: ${theme.color.font};
                        font-size: 16px;
                        font-family: ${theme.font.family.primary};
                        border: none;
                    `
            }
        }}
`

export const TextArea = styled.textarea`
    color: ${({theme}) => theme.color.font};
    font-size: 16px;
    font-family: ${({theme}) => theme.font.family.primary};
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
`

export const Select = styled.select`
    color: ${({theme}) => theme.color.font};
    font-family: ${({theme}) => theme.font.family.primary};
    font-size: 16px;
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid ${({theme}) => theme.color.formfieldbg};

    :-moz-focusring{
        color: transparent;
        text-shadow: 0 0 0 white;
    }
`

export const Option = styled.option`
    border: none;
    outline: none;
`

export const Button = styled.button`
    font-family: ${theme.font.family.primary};
    font-size: 16px;
    background-color: ${theme.color.formbtnbg};
    width: 520px;
    height: 45px;
    color: ${theme.color.formbtnfont};
    border-radius: 10px;
    border: none;
`