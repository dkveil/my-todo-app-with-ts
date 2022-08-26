import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Routes, Route } from "react-router";
import NavbarCart from "./components/NavbarCart";
import Navbar from "./components/Navbar/index";
import { AppWrapper } from "./containers/container";
import styled from "styled-components";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TasksPage from "./pages/TasksPage";
import AddTaskPage from "./pages/AddTaskPage";
import GlobalContextProvider from "./context/GlobalContext";
import TasksContextProvider from "./context/TasksContext";

const Test = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${({ theme }) => theme.color.bgapp};
`;

const App = () => {
    return (
        <GlobalContextProvider>
            <TasksContextProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <AppWrapper>
                        <NavbarCart />
                        <Test>
                            <Navbar />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/tasks" element={<TasksPage />} />
                                <Route
                                    path="/add-task"
                                    element={<AddTaskPage />}
                                />
                            </Routes>
                        </Test>
                    </AppWrapper>
                </ThemeProvider>
            </TasksContextProvider>
        </GlobalContextProvider>
    );
};

export default App;
