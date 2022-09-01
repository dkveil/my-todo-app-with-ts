import { useLocation } from 'react-router-dom'
import { Container } from "../../containers/container";
import { useTasksContext } from "../../context/TasksContext";
import * as H from './Header.styles'
import { motion } from 'framer-motion'

const Header = () => {
    const { numberOfTask } = useTasksContext()

    const location = useLocation()

    if(location.pathname === '/' || !location.pathname){
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <H.Wrapper>homePage</H.Wrapper>
            </motion.div>
        );
    }
    if(location.pathname === '/about'){
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <H.Wrapper>aboutPage</H.Wrapper>
            </motion.div>
        );

    }
    if(location.pathname === '/tasks'){
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <H.Wrapper>
                    <Container>
                        <H.Content>
                            <H.Title>
                                {numberOfTask
                                    ? "Your things to do:"
                                    : "Here will be your thinks to do :)"}
                            </H.Title>
                        </H.Content>
                    </Container>
                </H.Wrapper>
            </motion.div>
        );
    }

    if(location.pathname === '/add-task'){
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <H.Wrapper>
                    <Container>
                        <H.Content>
                            <H.Title>
                                {numberOfTask
                                    ? "Add your new task to do! :)"
                                    : "Add your first task! :)"}
                            </H.Title>
                        </H.Content>
                    </Container>
                </H.Wrapper>
            </motion.div>
        );
    }

    return null
}
export default Header;