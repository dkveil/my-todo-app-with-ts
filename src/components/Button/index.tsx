import React from 'react';
import * as Btn from './Button.styles'
import { ButtonStylesProps } from './Button.styles'

interface ButtonProps extends ButtonStylesProps {
    buttontype: string;
    onClickHandler: () => void;
    children?: React.ReactNode
}

const Button = ({ buttontype, size, active, onClickHandler, children }: ButtonProps) => {
    switch (buttontype) {
        case "hamburger":
            return (
                <Btn.Hamburger
                    size={size}
                    active={active}
                    onClick={onClickHandler}
                >
                    <div />
                </Btn.Hamburger>
            );
        case "square":
            return (
                <Btn.Square
                    size={size}
                    onClick={onClickHandler}
                    >
                    {children}
                </Btn.Square>
            )
        case "transparent":
            return (
                <Btn.Transparent
                    onClick={onClickHandler}
                >
                    {children}
                </Btn.Transparent>
            )
        default:
            return null;
    }
};

export default Button;