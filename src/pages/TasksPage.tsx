import { useTasksContext } from "../context/TasksContext";
import TaskCart from '../components/TaskCart'

const TasksPage = () => {

    const Now = new Date()

    const { tasks } = useTasksContext();

    const completedTasks = tasks.filter(item => item.completed)
    const inProgressTasks = tasks.filter(item => {
        if(!item.completed && !item.deadline){
            return item
        }
        if(!item.completed && item.deadline){
            return new Date(item.deadline).getTime() > Now.getTime();
        }
    })
    const afterDeadlineTasks =  tasks.filter(item => {
        if(!item.completed && item.deadline){
            return new Date(item.deadline).getTime() < Now.getTime()
        }
    })

    return (
        <>
            <div>

            </div>
            <div>
                <h2>in progress</h2>
                {inProgressTasks.map(item => (
                    <TaskCart
                        title={item.title}
                    />
                ))}
            </div>
            <div>
                <h2>after the deadline</h2>
                {afterDeadlineTasks.map(item => (
                    <TaskCart
                        title={item.title}
                    />
                ))}
            </div>

            <h2>completed</h2>
            <hr/>
        </>
    );
}

export default TasksPage;