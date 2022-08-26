import { useTasksContext } from "../context/TasksContext";

const TasksPage = () => {

    const { tasks } = useTasksContext();

    return (
        <>
            <h2>after the deadline</h2>
            <h2>in progress</h2>
            <h2>completed</h2>
        </>
    );
}

export default TasksPage;