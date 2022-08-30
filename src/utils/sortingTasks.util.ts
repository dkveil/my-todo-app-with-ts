import { taskProps } from "../context/TasksContext";

export const sortTasks = (type: string, tasks: taskProps[]) => {
    let sortedTasks;

    const priorityNumber = {
        "no priority": 0,
        "low priority": 1,
        "medium priority": 2,
        "high priority": 3,
    }

    if(tasks){
        if(type === "name"){
        }

        if(type === "date of create"){
            sortedTasks = tasks.sort((a, b) => {
                return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            })
        }
        if(type === "priority level"){
            sortedTasks = tasks.sort((a, b) => {
                return priorityNumber[b.priority] - priorityNumber[a.priority]
            })
        }
        if(type === "favorite"){

        }
    }


    return sortedTasks;
}