import { Container } from "../containers/container";
import { motion } from 'framer-motion'

const HomePage = () => {
    return (
        <motion.div
            style={{ height: "200vh" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Container>
                <div style={{ width: "100%", backgroundColor: "cyan" }}>
                    homepage
                </div>
            </Container>
        </motion.div>
    );
};

export default HomePage;
