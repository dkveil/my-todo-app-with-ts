import React from "react";
import { useLocation, useParams } from 'react-router-dom';

type TasksContextProviderProps = {
    children: React.ReactNode
};

export type taskProps = {
    id: string;
    title: string;
    category: string;
    priority:
        | "no priority"
        | "low priority"
        | "medium priority"
        | "high priority";
    note: string;
    createdAt: string;
    deadline?: string;
    favorite: boolean;
    completed: boolean;
};

type TasksContextTypes = {
    tasks: taskProps[];
    numberOfTask: number;
    AddTask: (task: taskProps) => void;
    EditTask: (task: taskProps) => void;
    addingStatusSuccess: boolean;
    editingStatusSuccess: boolean;
    setAddingSuccessStatus: () => void;
    setEditingSuccessStatus: () => void;
    changeStatusTask: (id: string) => void;
};

const TasksContext = React.createContext({} as TasksContextTypes)

type taskState = taskProps[]

type taskAction = {
    type: string;
    task: taskProps;
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
        case 'CHANGE_STATUS':
            return state.map(task => {
                if(action.task.id === task.id){
                    return {...task, completed: !task.completed}
                } else {
                    return task
                }

            })
        default:
            return state;
    }
};

export const useTasksContext = () => React.useContext(TasksContext);

const TasksContextProvider = ({ children }: TasksContextProviderProps) => {

    const params = useParams()
    console.log(params.id)

    const [tasks, dispatch] = React.useReducer(taskReducer, [])
    const [addingStatusSuccess, setAddingStatusSucces] = React.useState<boolean>(false)
    const [editingStatusSuccess, setEditingStatusSucces] = React.useState<boolean>(false)

    const numberOfTask = tasks.length;

    const location = useLocation()

    const setAddingSuccessStatus = () => setAddingStatusSucces(true);
    const setEditingSuccessStatus = () => setEditingStatusSucces(true);

    React.useEffect(() => {
        if(location.pathname !== "/add-task/success"){
            setAddingStatusSucces(false)
        }
        if(params.id && params.status){
            setEditingStatusSucces(false)
        }
    }, [location.pathname, params])

    const AddTask = (task: taskProps) => {
        dispatch({
            type: "ADD",
            task
        });
    }

    const EditTask = (task: taskProps) => {
        dispatch({
            type: "EDIT",
            task
        })
    }

    const changeStatusTask = (id: string) => {
        const task = tasks.find(item => item.id === id)

        if(task){
            dispatch({
                type: "CHANGE_STATUS",
                task
            });
        }
    }

    return (
        <TasksContext.Provider
            value={{
                tasks,
                numberOfTask,
                AddTask,
                EditTask,
                addingStatusSuccess,
                editingStatusSuccess,
                setAddingSuccessStatus,
                setEditingSuccessStatus,
                changeStatusTask
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export default TasksContextProvider;