import styled from "styled-components";
import { theme } from '../../styles/theme'

export type FieldType = {
    fieldtype: "text" | "textarea" | "date" | "select" | "checkbox";
    error?: boolean;
    active?: boolean;
}

type InputType = {
    inputtype?: "checkbox-star"
}

export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
`

export const Field = styled.div<FieldType>`
    position: relative;
    overflow: visible;
    border-radius: 12px;

    background-color: ${({theme}) => theme.colorformfieldbg};
    margin-bottom: 2rem;
    width: 100%;

    ${(props) => {
        if(props.error){
            return`
                border: 2px solid red;
            `
        } else if(props.active){
            return`
                border: 2px solid ${theme.color.formactive};
            `
        } else {
            return`
                border: 2px solid ${theme.color.formfieldborder};
            `
        }
    }}

    input, textarea, select {
        border-radius: 12px;
        background-color: inherit;
        padding: 13px 15px;
    }

    select {
        padding: 13px 14px;
        border-radius: 12px;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    ${(props) => {
        switch(props.fieldtype){
            case 'text':
                return`
                    height: 50px;
                `
            case 'textarea':
                return`
                    height: 120px;
                `
            case 'select':
                return`
                    height: 50px;
                        :after{
                        content: '<>';
                        letter-spacing: 2px;
                        position: absolute;
                        font-weight: bold;
                        font-size: 14px;
                        top: 55%;
                        color: ${theme.color.font};
                        transform: rotate(90deg) translateX(-50%);
                        right: 8px;
                        pointer-events: none;
                    }
                `
            case 'date':
                return`
                    height: 50px
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

type LabelType = {
    labeltype?: "textarea" | "checkbox";
    error?: boolean;
    active?: boolean;
}

export const Label = styled.div<LabelType>`

    position: absolute;
    color: ${theme.color.formfieldborder};
    z-index: 1;

    ${(props) => {
        if(props.error){
            return`
                color: red;
            `
        } else if(props.active){
            return`
                color: ${theme.color.formactive};
            `
        } else{
            return`
                color: ${theme.color.formfieldborder};
            `
        }
    }}

    ${(props) => {
        switch(props.labeltype){
            case 'checkbox':
                return`
                    left: 45px;
                    top: 48%;
                    transform: translateY(-50%)
                `
            default:
                return`
                    font-size: 14px;
                    top: -20%;
                    top: ${props.labeltype === "textarea" ? "-10%" : "-20%"};
                    left: 8px;
                    background-color: ${theme.color.bgapp};
                    padding: 2px;
                `
        }
    }}

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
                        color: #bd9800;
                        content: "\\2606";
                        visibility: visible;
                    }

                    :checked:before{
                        content: "\\2605";
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
    position: relative;
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

export const ErrorMsg = styled.div`
    font-size: 12px;
    margin: 5px auto 0 4px;
    color: red;
`

export const Button = styled.button`
    font-family: ${theme.font.family.primary};
    font-size: 16px;
    background-color: ${theme.color.formbtnbg};
    width: 100%;
    height: 45px;
    color: ${theme.color.formbtnfont};
    border-radius: 10px;
    border: none;

    :hover{
        background-color: ${theme.color.formbtnbghover};
    }

    :active{
        background-color: ${theme.color.formactive};
    }
`