import React from "react";

type TasksContextProviderProps = {
    children: React.ReactNode
};

type taskProps = {
    id: number;
    name: string;
}

type TasksContextTypes = {
    tasks: taskProps[];
    Test: () => void;
}


const TasksContext = React.createContext({} as TasksContextTypes)

export const useTasksContext = () => React.useContext(TasksContext);

const TasksContextProvider = ({ children }: TasksContextProviderProps) => {

    const [tasks, setTasks] = React.useState<taskProps[]>([
        {
            id: 1,
            name: 'test'
        }
    ])

    const Test = () => {
        console.log('test')
    }

    return (
        <TasksContext.Provider value={{
            Test,
            tasks
        }}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContextProvider;