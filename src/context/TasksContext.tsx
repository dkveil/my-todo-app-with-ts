import React from "react";
import { useLocation } from 'react-router-dom';

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
    numberOfTask: number;
    AddTask: (task: taskProps) => void;
    addingStatusSuccess: boolean;
    setSuccessStatus: () => void;
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
    const [addingStatusSuccess, setAddingStatusSucces] = React.useState<boolean>(false)

    const numberOfTask = tasks.length;

    const location = useLocation()

    const setSuccessStatus = () => setAddingStatusSucces(true);

    React.useEffect(() => {
        if(location.pathname !== "/add-task/success"){
            setAddingStatusSucces(false)
        }
    }, [location.pathname])



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
                numberOfTask,
                AddTask,
                addingStatusSuccess,
                setSuccessStatus,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContextProvider;