import React from "react";
import { v4 as uuidv4 } from 'uuid'

type TasksContextProviderProps = {
    children: React.ReactNode
};

type taskProps = {
    id: string;
    name: string;
    completed: boolean;
}

type TasksContextTypes = {
    tasks: taskProps[];
    AddTask: (name: string) => void;
};

const TasksContext = React.createContext({} as TasksContextTypes)

type taskState = taskProps[]

interface taskAction extends taskProps {
    type: string
}

const taskReducer = (state: taskState, action: taskAction) => {
    switch(action.type){
        case 'ADD':
            return [ ...state, {
                id: action.id,
                name: action.name,
                completed: action.completed
            }];
        case 'REMOVE':
            return state.filter(task => task.id !== action.id);
        case 'EDIT':
            return state.map(task => {
                if(action.id === task.id){
                    return { ...task }
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

    const AddTask = (name: string) => {
        dispatch({
            id: uuidv4(),
            name,
            completed: false,
            type: "ADD",
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