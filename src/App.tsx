import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global'
import { Routes, Route } from 'react-router';
import NavbarCart from './components/NavbarCart';
import Navbar from './components/Navbar/index';
import { AppWrapper } from './containers/container';
import styled from 'styled-components';
import Home from './components/Pages/Home';

const Test = styled.div`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    background-color: ${({theme}) => theme.color.bgapp};
`
;

const App = () => {
  return (
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
  );
}

export default App;
