import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/global'
import { Routes, Route } from 'react-router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<div>test</div>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
