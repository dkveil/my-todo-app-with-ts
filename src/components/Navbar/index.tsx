import * as Nav from './Navbar.styles'
import Button from "../Button";
import { useGlobalContext } from '../../context/GlobalContext';

const Navbar = () => {

    const { barActive, openBar, closeBar } = useGlobalContext();

    return (
        <Nav.Wrapper>
            <div>
                <Button buttontype="hamburger" size='30px' active={barActive} onClickHandler={
                    barActive ? closeBar : openBar
                }/>
            </div>
            <div></div>
        </Nav.Wrapper>
    )
}

export default Navbar;