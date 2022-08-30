import React from "react";
import * as Cart from './TaskCart.styles'
import { useTasksContext } from './../../context/TasksContext';
import { MdDone } from 'react-icons/md'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { GrInProgress } from 'react-icons/gr'
import { BsExclamationLg } from "react-icons/bs";
import { formatToDate } from "../../utils/isoFormatToDate.util";

type TaskCartProps = {
    id: string;
    title: string;
    category: string;
    note: string;
    createAt: string;
    deadline?: string;
    favorite: boolean;
    completed: boolean;
    afterdeadline?: boolean
}

const TaskCart = ({id, title, category, note, createAt, deadline, favorite, completed, afterdeadline}: TaskCartProps) => {

    const { changeStatusTask } = useTasksContext()

    let icon = completed ? <MdDone /> : (afterdeadline ? <BsExclamationLg /> : <GrInProgress />);


    return (
        <Cart.Wrapper>
            <Cart.Title>
                <div>
                    <span>
                        {icon}
                        {title}
                    </span>
                    <span data-hover="edit">
                        <HiOutlineDotsHorizontal />
                    </span>
                </div>
                <div>
                    <span>{category}</span>
                    {deadline ? <span>to {formatToDate(deadline)}</span> : null}
                </div>
            </Cart.Title>
            <Cart.Content></Cart.Content>
            <button onClick={() => changeStatusTask(id)}>
                {completed ? "click to uncomplete" : "click to completed"}
            </button>
        </Cart.Wrapper>
    );
}

export default TaskCart;