import React from "react";

type TasksContextProviderProps = {
    children: React.ReactNode
};

type taskProps = {
    id: string;
    title: string;
    category: string;
    note: string;
    createdAt: string;
    deadline?: string;
    priority: string;
    favorite: boolean;
    completed: boolean;
}

type TasksContextTypes = {
    tasks: taskProps[];
    AddTask: (task: taskProps) => void;
};

const TasksContext = React.createContext({} as TasksContextTypes)

type taskState = taskProps[]

type taskAction = {
    type: string;
    task: taskProps
}

const taskReducer = (state: taskState, action: taskAction) => {
    switch(action.type){
        case 'ADD':
            return [ ...state, action.task];
        case 'REMOVE':
            return state.filter(task => task.id !== action.task.id);
        case 'EDIT':
            return state.map(task => {
                if(action.task.id === task.id){
                    return action.task
                } else {
                    return task
                }
            });
        default:
            return state;
    }
};

export const useTasksContext = () => React.useContext(TasksContext);

const TasksContextProvider = ({ children }: TasksContextProviderProps) => {

    const [tasks, dispatch] = React.useReducer(taskReducer, [])

    const AddTask = (task: taskProps) => {
        dispatch({
            type: "ADD",
            task
        });
    }

    return (
        <TasksContext.Provider
            value={{
                tasks,
                AddTask
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContextProvider;