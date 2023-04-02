import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/styled/theme';
import GlobalStyled from './components/styled/GlobalStyled';
import UserLayout from './components/UserLayout';
import UserProfile from './pages/UserProfile';
import NotPageFound from './pages/NotPageFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <div className="App">
        <Router>
          <Routes>
            <Route element={<UserLayout />}>
              <Route path="/" element={<UserList />} />
              <Route path="/users/:userId/posts" element={<UserProfile />} />
              <Route path="*" element={<NotPageFound />} />
            </Route>
          </Routes>
        </Router>

      </div>
    </ThemeProvider>
  );
}

export default App;