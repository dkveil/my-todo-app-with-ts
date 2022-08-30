import { Container } from "../containers/container";

const HomePage = () => {
    return (
        <div style={{height: '200vh'}}>
            <Container>
                <div style={{ width: "100%", backgroundColor: "cyan" }}>
                    homepage
                </div>
            </Container>
        </div>
    );
};

export default HomePage;
