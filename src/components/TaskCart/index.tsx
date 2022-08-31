import * as Cart from './TaskCart.styles'
import { useTasksContext } from './../../context/TasksContext';
import { MdDone } from 'react-icons/md'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { GrInProgress } from 'react-icons/gr'
import { BsExclamationLg } from "react-icons/bs";
import { formatToDate } from "../../utils/isoFormatToDate.util";
import { AiFillStar } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import Button from '../Button'
import { useNavigate } from 'react-router-dom';

type TaskCartProps = {
    id: string;
    title: string;
    category: string;
    note: string;
    priority: string;
    createAt: string;
    deadline?: string;
    favorite: boolean;
    completed: boolean;
    afterdeadline?: boolean;
};

const TaskCart = ({id, title, category, note, priority, createAt, deadline, favorite, completed, afterdeadline}: TaskCartProps) => {

    const { changeStatusTask, DeleteTask } = useTasksContext()
    const navigate = useNavigate()

    let icon = completed ? <MdDone /> : (afterdeadline ? <BsExclamationLg /> : <GrInProgress />);

    return (
        <Cart.Wrapper onClick={() => console.log(Number(title))}>
            <Cart.Title>
                <div>
                    <span>
                        {icon}
                        {title}
                    </span>
                    <span data-hover="edit">
                        {favorite ? (
                            <AiFillStar
                                style={{ fontSize: "26px", color: "#bd9800" }}
                            />
                        ) : null}
                        <HiOutlineDotsHorizontal
                            onClick={() => navigate(`../edit-task/${id}`)}
                        />
                        <IoCloseOutline
                            onClick={() => DeleteTask(id)}
                        />
                    </span>
                </div>
                <div>
                    <span>{category}</span>
                    {deadline ? (
                        <span style={{ color: "red", fontWeight: "bold" }}>
                            to {formatToDate(deadline)}
                        </span>
                    ) : null}
                </div>
            </Cart.Title>
            <Cart.Content isNote={Boolean(note)}>
                {note ? <>{note}</> : "any note to this task"}
            </Cart.Content>
            <div>
                <div
                    style={{ fontSize: ".9rem" }}
                    onClick={() => console.log(Boolean(note))}
                >
                    created at: {formatToDate(createAt)}
                </div>
                {priority !== "no priority" ? (
                    <div>
                        <Cart.Priority level={priority}>
                            {priority}
                        </Cart.Priority>
                    </div>
                ) : null}
                <Button
                    buttontype="transparent"
                    onClickHandler={() => changeStatusTask(id)}
                >
                    {completed ? (
                        <>
                            not done?
                            <IoCloseOutline />
                        </>
                    ) : (
                        <>
                            done?
                            <MdDone />
                        </>
                    )}
                </Button>
            </div>
        </Cart.Wrapper>
    );
}

export default TaskCart;