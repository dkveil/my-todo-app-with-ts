import { useTasksContext } from "../context/TasksContext";

const TasksPage = () => {

    const { tasks, AddTask } = useTasksContext();

    const handleClick = () => {
        AddTask('task')
    }
    console.log(tasks)

    return (
        <>
            <h2>after the deadline</h2>
            <h2 onClick={handleClick}>in progress</h2>
            <h2>completed</h2>
            <hr/>
            {tasks.map(item => (
                <>{item.name}</>
            ))}
        </>
    );
}

export default TasksPage;