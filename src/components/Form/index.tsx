import React from "react";
import { Formik } from "formik";
import { useTasksContext } from "../../context/TasksContext";
import { v4 as uuidv4 } from "uuid";
import * as Form from "./Form.styles";
import FormField from './FormField'
import { ChangeEvent } from 'react'

type FormModel = {
    title: string;
    category: string;
    note: string;
    deadline?: string;
    priority: string;
    favorite: boolean;
};

const TaskForm = () => {
    const { AddTask } = useTasksContext();

    const categoryOptions = [
        {
            name: 'default'
        },
        {
            name: 'wish list'
        },
        {
            name: 'personal'
        },
        {
            name: 'work'
        },
        {
            name: 'shopping'
        },{
            name: 'other'
        }
    ]

    const priorityOptions = [
        {
            name: "no priority"
        },
        {
            name: "low priority"
        },
        {
            name: "medium priority"
        },
        {
            name: "high priority"
        }
    ]

    return (
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

                alert(values.favorite)

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

            validate={(values) => {
                let errors = {
                    title: ""
                }

                if(!values.title){
                    errors.title = "Hey! I can't add a task if you leave this field empty!"
                }

                return errors
            }}
        >
            {({ handleSubmit, values, handleChange, setFieldValue, errors }) => {

                const dateOnChange = (
                    date: string
                ) => {
                    if (date) {
                        setFieldValue(
                            "deadline",
                            new Date(date).toISOString()
                        );
                    } else {
                        setFieldValue("deadline", undefined);
                    }
                };

                const checkboxOnChange = (
                    e: ChangeEvent<HTMLInputElement>
                ) => {
                    setFieldValue("favorite", e.target.checked);
                };

                return (
                    <Form.Wrapper onSubmit={handleSubmit}>
                        <FormField
                            fieldtype="text"
                            inputtype="text"
                            inputname="title"
                            inputvalue={values.title}
                            isLabel={true}
                            labelText="Task title - *required"
                            onChangeHandler={handleChange}
                            error={errors.title}
                        />
                        <FormField
                            fieldtype="textarea"
                            inputname="note"
                            inputtype="textarea"
                            inputvalue={values.note}
                            isLabel={true}
                            labelText="note"
                            labeltype="textarea"
                            onChangeHandler={handleChange}
                        />
                        <FormField
                            fieldtype="select"
                            inputname="category"
                            inputtype="select"
                            inputvalue={values.category}
                            isLabel={true}
                            labelText="Category"
                            onChangeHandler={handleChange}
                            options={categoryOptions}
                        />
                        <FormField
                            fieldtype="date"
                            inputname="deadline"
                            inputtype="datetime-local"
                            isLabel={true}
                            labelText="Deadline"
                            onChangeHandler={(e) =>
                                dateOnChange(e.target.value)
                            }
                        />
                        <FormField
                            fieldtype="select"
                            inputname="priority"
                            inputtype="select"
                            inputvalue={values.priority}
                            isLabel={true}
                            labelText="Priority"
                            onChangeHandler={handleChange}
                            options={priorityOptions}
                        />

                        {/* <FormField
                            fieldtype="checkbox"
                            inputstyletype="checkbox-star"
                            inputtype="checkbox"
                            inputname="favorite"
                            inputchecked={values.favorite}
                            isLabel={true}
                            labelText="favorite?"
                            labeltype="checkbox"
                            onChangeHandler={checkboxOnChange}
                        /> */}

                        <Form.Field fieldtype="checkbox">
                            <Form.Input
                                inputtype="checkbox-star"
                                name="favorite"
                                checked={values.favorite}
                                type="checkbox"
                                onChange={checkboxOnChange}
                            />
                            <Form.Label labeltype="checkbox">
                                favorite?
                            </Form.Label>
                        </Form.Field>

                        <Form.Button type="submit">Add task</Form.Button>
                    </Form.Wrapper>
                );
            }}
        </Formik>
    );
};

export default TaskForm;
