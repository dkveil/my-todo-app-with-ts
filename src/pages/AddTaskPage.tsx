import { Formik } from "formik";

type FormModel = {
    name: string;
}

const AddTaskPage = () => {
    return (
        <>
            <Formik<FormModel>
                initialValues={{
                    name: "",
                }}

                onSubmit={(values) => {
                    alert(JSON.stringify(values))
                }}
            >
                {({handleSubmit, values, handleChange}) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Title</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            onChange={handleChange}
                            value={values.name}
                        />

                        <button type="submit">test</button>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AddTaskPage;
