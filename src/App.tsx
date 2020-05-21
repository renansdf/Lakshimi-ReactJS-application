import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import AppProvider from './hooks/AppProvider';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>
      </Router>

      <GlobalStyles />
    </>
  );
};

export default App;
