import { useTasksContext } from "../context/TasksContext";

const TasksPage = () => {

    const { tasks} = useTasksContext();

    const handleClick = () => {
        console.log(tasks)
    }

    return (
        <>
            <h2>after the deadline</h2>
            <h2 onClick={handleClick}>in progress</h2>
            <h2>completed</h2>
            <hr/>
            {tasks.map(item => (
                <div>{item.title}</div>
            ))}
        </>
    );
}

export default TasksPage;