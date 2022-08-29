import React from "react";
import { Formik } from "formik";
import { useTasksContext } from "../../context/TasksContext";
import { v4 as uuidv4 } from "uuid";
import {Wrapper, Button} from "./Form.styles";
import FormField from './FormField'

type FormModel = {
    title: string;
    category: string;
    note: string;
    deadline?: string;
    priority: string;
    favorite: boolean;
};

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

const TaskForm = () => {
    const { AddTask } = useTasksContext();


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
                    e: React.ChangeEvent<HTMLInputElement>
                ) => {
                    setFieldValue("favorite", e.target.checked);
                };

                return (
                    <Wrapper onSubmit={handleSubmit}>
                        <FormField
                            fieldtype="text"
                            inputtype="text"
                            inputname="title"
                            inputvalue={values.title}
                            isLabel={true}
                            labelText="Task title - *required"
                            onChangeInputHandler={handleChange}
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
                            onChangeTextAreaHandler={handleChange}
                        />
                        <FormField
                            fieldtype="select"
                            inputname="category"
                            inputtype="select"
                            inputvalue={values.category}
                            isLabel={true}
                            labelText="Category"
                            onChangeSelectHandler={handleChange}
                            options={categoryOptions}
                        />
                        <FormField
                            fieldtype="date"
                            inputname="deadline"
                            inputtype="datetime-local"
                            isLabel={true}
                            labelText="Deadline"
                            onChangeInputHandler={(e) =>
                                dateOnChange(e.currentTarget.value)
                            }
                        />
                        <FormField
                            fieldtype="select"
                            inputname="priority"
                            inputtype="select"
                            inputvalue={values.priority}
                            isLabel={true}
                            labelText="Priority"
                            onChangeSelectHandler={handleChange}
                            options={priorityOptions}
                        />

                        <FormField
                            fieldtype="checkbox"
                            inputstyletype="checkbox-star"
                            inputtype="checkbox"
                            inputname="favorite"
                            inputchecked={values.favorite}
                            isLabel={true}
                            labelText="favorite?"
                            labeltype="checkbox"
                            onChangeInputHandler={(e: React.ChangeEvent<HTMLInputElement>) => checkboxOnChange(e)}
                        />
                        <Button type="submit">Add task</Button>
                    </Wrapper>
                );
            }}
        </Formik>
    );
};

export default TaskForm;
