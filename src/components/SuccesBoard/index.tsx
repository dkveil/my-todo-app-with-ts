import * as Board from './SuccesBoard.styles'
import Button from '../Button';

const SuccesBoard = () => {
    return (
        <Board.Wrapper>
            <h1>Your task has been added successfully! :)</h1>
            <p>what do you wanna do now?</p>
            <Board.ButtonsContainer>
                <Button
                    buttontype='square'
                    onClickHandler={() => console.log('')}>
                        Add one more task
                </Button>
                <Button
                    buttontype='square'
                    onClickHandler={() => console.log('')}>
                        Go to task page
                </Button>
            </Board.ButtonsContainer>
        </Board.Wrapper>
    );
}

export default SuccesBoard;