import { useTasksContext } from "../context/TasksContext";
import TaskCart from "../components/TaskCart";
import { Container } from "../containers/container";
import {
    TaskPageWrapper,
    TaskPageContent,
    TasksWrapper,
} from "../containers/tasksPage.styles";
import { sortTasks } from "../utils/sortingTasks.util";
import { taskProps } from "../context/TasksContext";

const TasksPage = () => {
    const Now = new Date();

    const { tasks } = useTasksContext();

    const completedTasks = tasks.filter((item) => item.completed);

    const inProgressTasks = tasks
        .filter((item) => {
            if (!item.completed && !item.deadline) {
                return item;
            }
            if (!item.completed && item.deadline) {
                return new Date(item.deadline).getTime() > Now.getTime();
            }
        })

    const afterDeadlineTasks = tasks
        .filter((item) => {
            if (!item.completed && item.deadline) {
                return new Date(item.deadline).getTime() < Now.getTime();
            }
        })

    return (
        <TaskPageWrapper>
            <Container>
                <TaskPageContent>
                    <TasksWrapper>
                        <h2>After the deadline</h2>
                        <div style={{ marginBottom: "10px" }}>
                            sort by:{" "}
                            <select>
                                <option>name</option>
                                <option>date of create</option>
                                <option>deadline time</option>
                                <option>priority level</option>
                                <option>favorite</option>
                            </select>
                        </div>
                        {sortTasks("date of create", afterDeadlineTasks)?.map((item) => (
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
                        <div style={{ marginBottom: "10px" }}>
                            sort by:{" "}
                            <select>
                                <option>name</option>
                                <option>date of create</option>
                                <option>deadline time</option>
                                <option>priority level</option>
                                <option>favorite</option>
                            </select>
                        </div>
                        {sortTasks("priority level", inProgressTasks)?.map((item) => (
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
                        <div style={{ marginBottom: "10px" }}>
                            sort by:{" "}
                            <select>
                                <option>name</option>
                                <option>date of create</option>
                                <option>deadline time</option>
                                <option>priority level</option>
                                <option>favorite</option>
                            </select>
                        </div>
                        {sortTasks("date of create", completedTasks)?.map(
                            (item) => (
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
                            )
                        )}
                    </TasksWrapper>
                </TaskPageContent>
            </Container>
        </TaskPageWrapper>
    );
};

export default TasksPage;
