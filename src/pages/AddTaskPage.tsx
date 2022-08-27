import { Formik } from "formik";
import { useTasksContext } from './../context/TasksContext';
import DatePicker from 'react-datepicker'
import React, { ChangeEvent, ChangeEventHandler } from 'react';


type FormModel = {
    name: string;
    category: string;
    note: string;
    deadline?: string;
    priority: string;
    favorite: boolean;
};

const AddTaskPage = () => {
    const { AddTask } = useTasksContext()

    return (
        <>
            <Formik<FormModel>
                initialValues={{
                    name: "",
                    category: "default",
                    note: "",
                    deadline: undefined,
                    priority: "no priority",
                    favorite: false,
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                    // AddTask(values.name)
                }}
            >
                {({ handleSubmit, values, handleChange, setFieldValue }) => {

                    const dateOnChange = (date?: Date) => {
                        if(date){
                            setFieldValue("deadline", date.toISOString())
                        } else {
                            setFieldValue("deadline", undefined)
                        }
                    }

                    const checkboxOnChange = (e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("favorite", e.target.checked)
                    }

                    return (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Title</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    onChange={handleChange}
                                    value={values.name}
                                />
                            </div>

                            <div>
                                <label htmlFor="note">note</label>
                                <textarea
                                    name="note"
                                    placeholder="name"
                                    onChange={handleChange}
                                    value={values.note}
                                />
                            </div>

                            <div>
                                <label htmlFor="category">category</label>
                                <select
                                    name="category"
                                    onChange={handleChange}
                                    value={values.category}
                                >
                                    <option value="default">default</option>
                                    <option value="wish list">wish list</option>
                                    <option value="personal">personal</option>
                                    <option value="work">work</option>
                                    <option value="shopping">shopping</option>
                                    <option value="other">other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="deadline">Deadline</label>
                                <input
                                    type="datetime-local"
                                    name="deadline"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => dateOnChange(new Date(e.target.value))}
                                />
                            </div>

                            <div>
                                <label htmlFor="priority">Priority</label>
                                <select
                                    name="priority"
                                    onChange={handleChange}
                                    value={values.priority}
                                >
                                    <option value="no priority">no priority</option>
                                    <option value="low priority">low priority</option>
                                    <option value="medium priority">
                                        medium priority
                                    </option>
                                    <option value="high priority">high priority</option>
                                </select>
                            </div>

                            <div>
                                <input
                                name="favorite"
                                checked={values.favorite}
                                type="checkbox"
                                onChange={checkboxOnChange}
                                />
                            </div>



                            <button type="submit">test</button>
                        </form>
                )}}
            </Formik>
        </>
    );
};

export default AddTaskPage;
