import React from 'react'
import { Formik } from "formik";
import { useTasksContext } from './../context/TasksContext';
import { v4 as uuidv4 } from "uuid";
import * as Form from '../components/Form/Form.styles'
import { Wrapper } from './../components/Navbar/Navbar.styles';

type FormModel = {
    title: string;
    category: string;
    note: string;
    deadline?: string;
    priority: string;
    favorite: boolean;
};

const AddTaskPage = () => {
    const { AddTask } = useTasksContext()

    return (
        <div>
            <Formik<FormModel>
                initialValues={{
                    title: "",
                    category: "default",
                    note: "",
                    deadline: undefined,
                    priority: "no priority",
                    favorite: false,
                }}
                onSubmit={(values) => {
                    AddTask({
                        id: uuidv4(),
                        title: values.title,
                        category: values.category,
                        note: values.note,
                        createdAt: new Date().toISOString(),
                        deadline: values.deadline,
                        priority: values.priority,
                        favorite: values.favorite,
                        completed: false,
                    });
                }}
            >
                {({ handleSubmit, values, handleChange, setFieldValue }) => {

                    const dateOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                        if(e.target.value){
                            setFieldValue("deadline", new Date(e.target.value).toISOString())
                        } else {
                            setFieldValue("deadline", undefined)
                        }
                    }

                    const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("favorite", e.target.checked)
                    }

                    return (
                        <Form.Wrapper onSubmit={handleSubmit}>
                            <Form.Field fieldtype="text">
                                <Form.Label>Title</Form.Label>
                                <Form.Input
                                    type="text"
                                    name="title"
                                    onChange={handleChange}
                                    value={values.title}
                                />
                            </Form.Field>

                            <Form.Field fieldtype="textarea">
                                <Form.Label>note</Form.Label>
                                <Form.TextArea
                                    name="note"
                                    onChange={handleChange}
                                    value={values.note}
                                />
                            </Form.Field>

                            <Form.Field fieldtype="select">
                                <Form.Label>category</Form.Label>
                                <Form.Select
                                    name="category"
                                    onChange={handleChange}
                                    value={values.category}
                                >
                                    <Form.Option value="default">
                                        default
                                    </Form.Option>
                                    <Form.Option value="wish list">
                                        wish list
                                    </Form.Option>
                                    <Form.Option value="personal">
                                        personal
                                    </Form.Option>
                                    <Form.Option value="work">work</Form.Option>
                                    <Form.Option value="shopping">
                                        shopping
                                    </Form.Option>
                                    <Form.Option value="other">
                                        other
                                    </Form.Option>
                                </Form.Select>
                            </Form.Field>

                            <Form.Field fieldtype="date">
                                <Form.Label>Deadline</Form.Label>
                                <Form.Input
                                    type="datetime-local"
                                    name="deadline"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => dateOnChange(e)}
                                />
                            </Form.Field>

                            <Form.Field fieldtype="select">
                                <Form.Label>Priority</Form.Label>
                                <Form.Select
                                    name="priority"
                                    onChange={handleChange}
                                    value={values.priority}
                                >
                                    <Form.Option value="no priority">
                                        no priority
                                    </Form.Option>
                                    <Form.Option value="low priority">
                                        low priority
                                    </Form.Option>
                                    <Form.Option value="medium priority">
                                        medium priority
                                    </Form.Option>
                                    <Form.Option value="high priority">
                                        high priority
                                    </Form.Option>
                                </Form.Select>
                            </Form.Field>

                            <Form.Field fieldtype="checkbox">
                                <Form.Input
                                    inputtype='checkbox-star'
                                    name="favorite"
                                    checked={values.favorite}
                                    type="checkbox"
                                    onChange={checkboxOnChange}
                                    />
                                    <Form.Label>favorite?</Form.Label>
                            </Form.Field>

                            <Form.Button type="submit">Add task</Form.Button>
                        </Form.Wrapper>
                    );}}
            </Formik>
        </div>
    );
};

export default AddTaskPage;
