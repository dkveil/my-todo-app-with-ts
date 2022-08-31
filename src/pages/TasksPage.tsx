import React from "react";
import { useTasksContext } from "../context/TasksContext";
import TaskCart from "../components/TaskCart";
import { Container } from "../containers/container";
import {
    TaskPageWrapper,
    TaskPageContent,
    TasksWrapper,
} from "../containers/tasksPage.styles";
import { sortTasks } from "../utils/sortingTasks.util";

const sortOptions = ["name", "date of create", "deadline time", "priority level", "favorite"]

const TasksPage = () => {

    const Now = new Date();
    const { tasks } = useTasksContext();
    const [sortOption, setSortOption] = React.useState({
        afterTheDeadline: "date of create",
        inProgress: "date of create",
        completed: "date of create",
    })
    const [wrappersCounter, setWrapperCounter] = React.useState(0)

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

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

    React.useEffect(() => {
        const wrappers = [afterDeadlineTasks, inProgressTasks, afterDeadlineTasks]

        wrappers.forEach(item => {
            if(item.length > 0){
                setWrapperCounter(prev => prev + 1)
            }
        })

    }, [afterDeadlineTasks, inProgressTasks, completedTasks])

    console.log(Math.floor(100 / 3))

    return (
        <TaskPageWrapper>
            <Container>
                <TaskPageContent>
                    {wrappersCounter === 0 && "add your first task"}
                    {wrappersCounter !== 0 && (
                        <>
                            {afterDeadlineTasks.length > 0 && (
                                <TasksWrapper>
                                    <h2>After the deadline</h2>
                                    <div style={{ marginBottom: "10px" }}>
                                        sort by:{" "}
                                        <select
                                            name="afterTheDeadline"
                                            value={sortOption.afterTheDeadline}
                                            onChange={handleChangeSelect}
                                        >
                                            {sortOptions.map((item) => (
                                                <option
                                                    key={`afterTheDeadline ${item}`}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {sortTasks(
                                        sortOption.afterTheDeadline,
                                        afterDeadlineTasks
                                    )?.map((item) => (
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
                                    ))}
                                </TasksWrapper>
                            )}
                            {inProgressTasks.length > 0 && (
                                <TasksWrapper>
                                    <h2>In progress</h2>
                                    <div style={{ marginBottom: "10px" }}>
                                        sort by:{" "}
                                        <select
                                            name="inProgress"
                                            value={sortOption.inProgress}
                                            onChange={handleChangeSelect}
                                        >
                                            {sortOptions.map((item) => (
                                                <option
                                                    key={`inProgress ${item}`}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {sortTasks(
                                        sortOption.inProgress,
                                        inProgressTasks
                                    )?.map((item) => (
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
                            )}
                            {completedTasks.length > 0 && (
                                <TasksWrapper>
                                    <h2>Completed</h2>
                                    <div style={{ marginBottom: "10px" }}>
                                        sort by:{" "}
                                        <select
                                            name="completed"
                                            value={sortOption.completed}
                                            onChange={handleChangeSelect}
                                        >
                                            {sortOptions.map((item) => (
                                                <option
                                                    key={`completed ${item}`}
                                                    value={item}
                                                >
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {sortTasks(
                                        sortOption.inProgress,
                                        completedTasks
                                    )?.map((item) => (
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
                            )}
                        </>
                    )}
                </TaskPageContent>
            </Container>
        </TaskPageWrapper>
    );
};

export default TasksPage;
