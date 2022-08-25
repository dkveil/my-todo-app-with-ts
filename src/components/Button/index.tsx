import styled from "styled-components";
import * as Btn from './Button.styles'
import { ButtonStylesProps } from './Button.styles'

interface ButtonProps extends ButtonStylesProps {
    buttontype: string;
    onClickHandler: () => void;
}

const Button = ({ buttontype, size, active, onClickHandler }: ButtonProps) => {
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
        default:
            return null;
    }
};

export default Button;