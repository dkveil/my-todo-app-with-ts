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
    AddTask: (id: number, name: string) => void;
};

const TasksContext = React.createContext({} as TasksContextTypes)

type taskState = taskProps[]

interface taskAction extends taskProps {
    type: string
}

const taskReducer = (state: taskState, action: taskAction) => {
    switch(action.type){
        case 'ADD':
            return [ ...state, { id: action.id, name: action.name }];
        case 'REMOVE':
            return state;
        case 'EDIT':
            return state;
        default:
            return state;
    }
};

export const useTasksContext = () => React.useContext(TasksContext);

const TasksContextProvider = ({ children }: TasksContextProviderProps) => {

    const [tasks, dispatch] = React.useReducer(taskReducer, [])

    const AddTask = (id: number, name: string) => {
        dispatch({
            id,
            name,
            type: 'ADD'
        })
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