import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Routes, Route } from "react-router";
import NavbarCart from "./components/NavbarCart";
import Navbar from "./components/Navbar/index";
import { Wrapper, AppWrapper } from "./containers/container";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TasksPage from "./pages/TasksPage";
import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import GlobalContextProvider from "./context/GlobalContext";
import TasksContextProvider from "./context/TasksContext";

const App = () => {
    return (
        <GlobalContextProvider>
            <TasksContextProvider>
                <ThemeProvider theme={theme}>
                    <GlobalStyles />
                    <Wrapper>
                        <NavbarCart />
                        <AppWrapper>
                            <Navbar />
                            <Header />
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/about" element={<AboutPage />} />
                                <Route path="/tasks" element={<TasksPage />} />
                                <Route path="/add-task" element={<AddTaskPage />}/>
                                <Route path="/add-task/:status" element={<AddTaskPage />}/>
                                <Route path="/edit-task/:id/" element={<EditTaskPage />}/>
                                <Route path="/edit-task/:id/:status" element={<EditTaskPage />}/>
                            </Routes>
                        </AppWrapper>
                    </Wrapper>
                </ThemeProvider>
            </TasksContextProvider>
        </GlobalContextProvider>
    );
};

export default App;
