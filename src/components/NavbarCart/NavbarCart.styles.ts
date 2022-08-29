import styled from "styled-components";
import { Link } from "react-router-dom";

type WrapperTypes = {
    opened: boolean;
}

export const Wrapper = styled.div<WrapperTypes>`
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: ${({theme}) => theme.color.bgcart};
    transform: ${(props) => props.opened ? 'translateX(0)': 'translateX(-100%)'};
    box-shadow: 0 0 .3rem ${({theme}) => theme.color.bgcartshadow};
    z-index: 3;
    padding: 0 30px;
    transition: transform .2s;


    ${({theme}) => theme.mq.desktop}{
        padding: 0 4rem;
        position: static;
        width: 400px;
        height: 100%;
        min-height: 100vh;
        transform: none;
    }
`

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30vh;
`

export const Logo = styled(Link)`
    font-size: 2.15rem;
    font-weight: 700;
    text-decoration: none;
    color: ${({theme}) => theme.color.font};
`

export const NavList = styled.ul`
    list-style: none;

`

export const NavItem = styled.li`
    margin: .6rem 0;
`

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    color: ${({theme}) => theme.color.font};
    text-decoration: none;

    &:hover{
        color: ${({theme}) => theme.color.fonthover};
    }
`