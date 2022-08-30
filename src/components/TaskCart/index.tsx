import React from "react";
import * as Cart from './TaskCart.styles'
import { useTasksContext } from './../../context/TasksContext';

type TaskCartProps = {
    id: string;
    title: string;
    category: string;
    note: string;
    createAt: string;
    deadline?: string;
    favorite: boolean;
    completed: boolean;
}

const TaskCart = ({id, title, category, note, createAt, deadline, favorite, completed}: TaskCartProps) => {

    const { changeStatusTask } = useTasksContext()

    return (
        <Cart.Wrapper>
            <Cart.Title>
                <span>
                    {completed ? "done" : null}
                    {title}
                </span>
                <span>
                    edit
                </span>
            </Cart.Title>
            <Cart.Content>

            </Cart.Content>
            <div onClick={() => changeStatusTask(id)}>
                click to complete
            </div>
        </Cart.Wrapper>
    )
}

export default TaskCart;