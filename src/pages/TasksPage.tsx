import { useTasksContext } from "../context/TasksContext";
import TaskCart from '../components/TaskCart'
import { Container } from "../containers/container";
import { TaskPageWrapper, TaskPageContent, TasksWrapper } from "../containers/tasksPage.styles";

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
        <TaskPageWrapper>
            <Container>
                <TaskPageContent>
                    <TasksWrapper>
                        <h2>After the deadline</h2>
                        {afterDeadlineTasks.map((item) => (
                            <TaskCart
                                id={item.id}
                                title={item.title}
                                category={item.category}
                                note={item.note}
                                createAt={item.createdAt}
                                deadline={item.deadline}
                                favorite={item.favorite}
                                completed={item.completed}
                            />
                        ))}
                    </TasksWrapper>
                    <TasksWrapper>
                        <h2>In progress</h2>
                        {inProgressTasks.map((item) => (
                            <TaskCart
                                id={item.id}
                                title={item.title}
                                category={item.category}
                                note={item.note}
                                createAt={item.createdAt}
                                deadline={item.deadline}
                                favorite={item.favorite}
                                completed={item.completed}
                            />
                        ))}
                    </TasksWrapper>
                    <TasksWrapper>
                        <h2>Completed</h2>
                        {completedTasks.map((item) => (
                            <TaskCart
                                id={item.id}
                                title={item.title}
                                category={item.category}
                                note={item.note}
                                createAt={item.createdAt}
                                deadline={item.deadline}
                                favorite={item.favorite}
                                completed={item.completed}
                            />
                        ))}
                    </TasksWrapper>
                </TaskPageContent>
            </Container>
        </TaskPageWrapper>
    );
}

export default TasksPage;