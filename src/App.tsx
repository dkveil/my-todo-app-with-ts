import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global'
import { Routes, Route } from 'react-router';
import NavbarCart from './components/NavbarCart';
import Navbar from './components/Navbar/index';
import { AppWrapper } from './containers/container';
import styled from 'styled-components';
import Home from './components/Pages/Home';
import GlobalContextProvider from './context/GlobalContext';

const Test = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    background-color: ${({theme}) => theme.color.bgapp};
`
;

const App = () => {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppWrapper>
          <NavbarCart />
          <Routes>
            <Route path="/" element={
              <Test>
                <Home />
              </Test>
          }/>
          </Routes>
        </AppWrapper>
      </ThemeProvider>
    </GlobalContextProvider>
  );
}

export default App;
