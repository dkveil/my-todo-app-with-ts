import TaskForm from "../components/Form";
import { Container } from "../containers/container";
import { useParams } from "react-router";
import SuccesBoard from "../components/SuccesBoard";
import { motion } from 'framer-motion'

const AddTaskPage = () => {

    const params = useParams()

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
        >
            <Container>
                {params.status ? <SuccesBoard /> : <TaskForm />}
            </Container>
        </motion.section>
    );
};

export default AddTaskPage;