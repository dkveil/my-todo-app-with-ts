import React from "react";
import * as Cart from './TaskCart.styles'

type TaskCartProps = {
    title: string;
}
const TaskCart = ({title}: TaskCartProps) => {
    return (
        <Cart.Wrapper>
            {title}
        </Cart.Wrapper>
    )
}

export default TaskCart