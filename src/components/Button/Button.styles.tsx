import styled from "styled-components";
import { theme } from "../../styles/theme";

export type ButtonStylesProps = {
    size?: string;
    active?: boolean;
}

export const Hamburger = styled.div<ButtonStylesProps>`
    display: flex;
    align-items: center;
    height: ${(props) => (props.size ? props.size : "40px")};
    width: ${(props) => (props.size ? props.size : "40px")};
    cursor: pointer;

    div {
        position: relative;
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.color.font};
        z-index: 2;
        border-radius: 4px;

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