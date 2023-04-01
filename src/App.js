import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import UserList from './pages/UserList';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styled/theme';
import GlobalStyled from './components/styled/GlobalStyled';
import UserDetails from './pages/UserDetails';

function App() {

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyled/>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/users/:userId/posts" element={<UserDetails/>}/>
        </Routes>
      </Router>
      
    </div>
    </ThemeProvider>
  );
}

export default App;