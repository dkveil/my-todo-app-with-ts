import * as Nav from './Navbar.styles'
import Button from "../Button";
import { useGlobalContext } from '../../context/GlobalContext';
import { Container } from '../../containers/container';

const Navbar = () => {

    const { barActive, openBar, closeBar } = useGlobalContext();

    return (
        <Nav.Wrapper>
            <Container>
                <Nav.Content>
                    <div>
                        <Button buttontype="hamburger" size='30px' active={barActive} onClickHandler={
                            barActive ? closeBar : openBar
                        }/>
                    </div>
                    <div></div>
                </Nav.Content>
            </Container>
        </Nav.Wrapper>
    )
}

export default Navbar;