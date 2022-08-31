import React from "react";
import { useParams } from 'react-router';
import TaskForm from "../components/Form";
import { useTasksContext } from "../context/TasksContext";
import SuccesBoard from "../components/SuccesBoard";
import { Container } from "../containers/container";

const EditTaskPage = () => {

    const { tasks } = useTasksContext()
    const params = useParams()

    const task = tasks.find(item => item.id === params.id)

    console.log(params)

    return (
        <section>
            <Container>
                {params.status === "success" ? <SuccesBoard/> : <TaskForm taskValues={task} />}
            </Container>
        </section>
    );
}

export default EditTaskPage;