import { useLocation } from 'react-router-dom'
import { Container } from "../../containers/container";
import { useTasksContext } from "../../context/TasksContext";
import * as H from './Header.styles'

const Header = () => {
    const { numberOfTask } = useTasksContext()

    const location = useLocation()
    // const params = useParams()

    if(location.pathname === '/' || !location.pathname){
        return <>homePage</>
    }
    if(location.pathname === '/about'){
        return <>aboutPage</>
    }
    if(location.pathname === '/tasks'){
        return <>tasksPage</>
    }

    if(location.pathname === '/add-task'){
        return (
            <H.Wrapper>
                <Container>
                    <H.Content>
                        <H.Title>{numberOfTask ? "Add your new task to do! :)" : "Add your first task! :)"}</H.Title>
                    </H.Content>
                </Container>
            </H.Wrapper>
        )
    }

    return null
}
export default Header;