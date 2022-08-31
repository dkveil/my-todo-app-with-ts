import React from "react";
import { useParams } from 'react-router';
import TaskForm from "../components/Form";
import { useTasksContext } from "../context/TasksContext";

const EditTaskPage = () => {

    const { tasks } = useTasksContext()
    const params = useParams()

    const task = tasks.find(item => item.id === params.id)

    return (
        <>
            <TaskForm
                taskValues={task}
            />
        </>
    )
}

export default EditTaskPage;