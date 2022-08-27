import { Formik } from "formik";
import { useTasksContext } from './../context/TasksContext';
import DatePicker from 'react-datepicker'

type FormModel = {
    name: string;
    category: string;
    note: string;
    deadline?: string | undefined;
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
                    deadline: "",
                    priority: "no priority",
                    favorite: false,
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                    // AddTask(values.name)
                }}
            >
                {({ handleSubmit, values, handleChange }) => (
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
                                name="deadline"
                                type="date"
                                value={values.deadline}
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
                            <input name="favorite" type="checkbox" />
                        </div>



                        <button type="submit">test</button>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AddTaskPage;
