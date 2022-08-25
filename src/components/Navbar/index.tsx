import * as Nav from './Navbar.styles'
import Button from "../Button";

const Navbar = () => {
    return (
        <Nav.Wrapper>
            <div>
                <Button buttontype="hamburger" size='30px' active={false}/>
            </div>
            <div></div>
        </Nav.Wrapper>
    )
}

export default Navbar;