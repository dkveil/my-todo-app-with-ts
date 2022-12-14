import * as Board from "./SuccesBoard.styles";
import Button from "../Button";
import { useTasksContext } from "../../context/TasksContext";
import { useNavigate } from 'react-router-dom';

const SuccesBoard = () => {
    const { addingStatusSuccess, editingStatusSuccess } = useTasksContext();
    const navigate = useNavigate()

    return (
        <Board.Wrapper>
            <h1>
                {addingStatusSuccess &&
                "Your task has been added successfully! :)"}
                {editingStatusSuccess && "Your task has been edited successfully! :)"}
                {(!addingStatusSuccess && !editingStatusSuccess) && "Hey! Something went wrong! :("}
            </h1>
            <p>
                {addingStatusSuccess || editingStatusSuccess
                    ? "what do you wanna do now?"
                    : "Back to tasks page fast!"}
            </p>
            <Board.ButtonsContainer>
                {addingStatusSuccess || editingStatusSuccess? (
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
