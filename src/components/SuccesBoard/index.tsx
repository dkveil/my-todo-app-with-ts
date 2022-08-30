import * as Board from "./SuccesBoard.styles";
import Button from "../Button";
import { useTasksContext } from "../../context/TasksContext";
import { useNavigate } from 'react-router-dom';

const SuccesBoard = () => {
    const { addingStatusSuccess } = useTasksContext();
    const navigate = useNavigate()

    return (
        <Board.Wrapper>
            <h1>
                {addingStatusSuccess
                    ? "Your task has been added successfully! :)"
                    : "Hey! Something went wrong! :("}
            </h1>
            <p>
                {addingStatusSuccess
                    ? "what do you wanna do now?"
                    : "Back to tasks page fast!"}
            </p>
            <Board.ButtonsContainer>
                {addingStatusSuccess ? (
                    <>
                        <Button
                            buttontype="square"
                            onClickHandler={() => navigate("../add-task")}
                        >
                            Add one more task
                        </Button>
                        <Button
                            buttontype="square"
                            onClickHandler={() => navigate("../tasks")}
                        >
                            Go to task page
                        </Button>
                    </>
                ) : (
                    <Button
                        buttontype="square"
                        onClickHandler={() => navigate("../tasks")}
                    >
                        Back to home page
                    </Button>
                )}
            </Board.ButtonsContainer>
        </Board.Wrapper>
    );
};

export default SuccesBoard;
