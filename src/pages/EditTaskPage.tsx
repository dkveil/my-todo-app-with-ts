import React from "react";
import { useParams } from 'react-router';
import TaskForm from "../components/Form";
import { useTasksContext } from "../context/TasksContext";
import SuccesBoard from "../components/SuccesBoard";
import { Container } from "../containers/container";
import { motion } from "framer-motion"

const EditTaskPage = () => {

    const { tasks } = useTasksContext()
    const params = useParams()

    const task = tasks.find(item => item.id === params.id)

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Container>
                {params.status === "success" ? (
                    <SuccesBoard />
                ) : (
                    <TaskForm taskValues={task} />
                )}
            </Container>
        </motion.section>
    );
}

export default EditTaskPage;