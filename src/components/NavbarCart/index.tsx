import * as NavCart from './NavbarCart.styles'
import {
    AiOutlineHome,
    AiOutlineInfoCircle,
    AiOutlineFolderOpen,
    AiOutlinePlusCircle,
} from "react-icons/ai";
import { useGlobalContext } from '../../context/GlobalContext';

const navitems = [
    {
        name: "Home",
        path: "/",
        icon: <AiOutlineHome style={{ marginRight: "10px" }} />,
    },
    {
        name: "About",
        path: "/about",
        icon: <AiOutlineInfoCircle style={{ marginRight: "10px" }} />,
    },
    {
        name: "Tasks",
        path: "/tasks",
        icon: <AiOutlineFolderOpen style={{ marginRight: "10px" }} />,
    },
    {
        name: "Add task",
        path: "/add-task",
        icon: <AiOutlinePlusCircle style={{ marginRight: "10px" }} />,
    },
];

const NavbarCart = () => {

    const { barActive, closeBar } = useGlobalContext()

    return (
        <NavCart.Wrapper opened={barActive}>
            <NavCart.LogoWrapper>
                <NavCart.Logo to="/">
                    .my todo app
                </NavCart.Logo>
            </NavCart.LogoWrapper>
            <nav>
                <NavCart.NavList>
                    {navitems.map(item => (
                        <NavCart.NavItem id={item.name} onClick={closeBar}>
                            <NavCart.NavLink to={item.path}>
                                {item.icon && item.icon}
                                {item.name}
                            </NavCart.NavLink>
                        </NavCart.NavItem>
                    ))}
                </NavCart.NavList>
            </nav>
        </NavCart.Wrapper>
    )
}

export default NavbarCart;