import { useTasksContext } from "../context/TasksContext";
import TaskCart from '../components/TaskCart'
import { Container } from "../containers/container";
import { TaskPageWrapper, TaskPageContent, TasksWrapper } from "../containers/tasksPage.styles";

const TasksPage = () => {

    const Now = new Date()

    const { tasks } = useTasksContext();

    let completedTasks = tasks
        .filter((item) => item.completed)
        .sort((a, b) => {
            return (
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
        });

    let inProgressTasks = tasks.filter(item => {
        if(!item.completed && !item.deadline){
            return item
        }
        if(!item.completed && item.deadline){
            return new Date(item.deadline).getTime() > Now.getTime();
        }
    }).sort((a , b) => {
        return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    })


    let afterDeadlineTasks = tasks
        .filter((item) => {
            if (!item.completed && item.deadline) {
                return new Date(item.deadline).getTime() < Now.getTime();
            }
        })
        .sort((a, b) => {
            return (
                new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
        });

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
                                priority={item.priority}
                                createAt={item.createdAt}
                                deadline={item.deadline}
                                favorite={item.favorite}
                                completed={item.completed}
                                afterdeadline={true}
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
                                priority={item.priority}
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
                                priority={item.priority}
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