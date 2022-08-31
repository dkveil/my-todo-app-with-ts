import { useTasksContext } from "../context/TasksContext";
import TaskCart from "../components/TaskCart";
import { Container } from "../containers/container";
import {
    TaskPageWrapper,
    TaskPageContent,
    TasksWrapper,
} from "../containers/tasksPage.styles";
import { sortTasks } from "../utils/sortingTasks.util";

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
            else return null
        })

    const afterDeadlineTasks = tasks
        .filter((item) => {
            if (!item.completed && item.deadline) {
                return new Date(item.deadline).getTime() < Now.getTime();
            }
            else return null
        })


    const test = [
        {
            name: "zzz"
        },
        {
            name: "aaa"
        }
    ]

    const sortedTest = test.sort((a, b) => {
        if(a.name > b.name){
            return 1
        } else if (a.name < b.name){
            return -1
        }
        return 0
    })

    console.log(sortedTest)


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
                        {sortTasks("date of create", afterDeadlineTasks)?.map(
                            (item) => (
                                <TaskCart
                                    key={item.id}
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
                            )
                        )}
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
                        {sortTasks("priority level", inProgressTasks)?.map(
                            (item) => (
                                <TaskCart
                                    key={item.id}
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
                        {sortTasks("favorite", completedTasks)?.map((item) => (
                            <TaskCart
                                key={item.id}
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
};

export default TasksPage;
