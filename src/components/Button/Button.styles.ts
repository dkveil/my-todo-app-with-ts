import styled from "styled-components";
import { theme } from "../../styles/theme";

export type ButtonStylesProps = {
    size?: string;
    active?: boolean;
}

export const Hamburger = styled.div<ButtonStylesProps>`
    display: flex;
    align-items: center;
    position: absolute;
    top: 17px;
    left: 21px;
    height: ${(props) => (props.size ? props.size : "40px")};
    width: ${(props) => (props.size ? props.size : "40px")};
    cursor: pointer;

    ${({theme}) => theme.mq.tablet}{
        left: 32px;
    }

    ${({theme}) => theme.mq.desktop}{
        display: none;
    }

    div {
        position: relative;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.color.font};
        z-index: 4;
        border-radius: 4px;
        transition: transform 0.2s;

        ${(props) => {
            if (props.active) {
                return `
                    background-color: transparent;
                `;
            } else {
                return `
                    background-color: ${theme.color.font};
                `;
            }
        }}

        ::before, ::after {
            position: absolute;
            content: "";
            width: 100%;
            height: 2px;
            background-color: ${({ theme }) => theme.color.font};
            border-radius: 4px;
            transition: transform 0.2s;
        }
        ::before {
            top: ${(props) => (props.active ? "0" : "8px")};
            transform: ${(props) => (props.active ? "rotate(45deg)" : "none")};
        }
        ::after {
            bottom: ${(props) => (props.active ? "0" : "8px")};
            transform: ${(props) => (props.active ? "rotate(-45deg)" : "none")};
        }
    }
`;