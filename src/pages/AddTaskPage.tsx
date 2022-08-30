import TaskForm from "../components/Form";
import { Container } from "../containers/container";
import { useParams } from "react-router";
import SuccesBoard from "../components/SuccesBoard";

const AddTaskPage = () => {

    const params = useParams()

    return (
        <section>
            <Container>
                {params.status ? <SuccesBoard /> : <TaskForm />}
            </Container>
        </section>
    );
};

export default AddTaskPage;