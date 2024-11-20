import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';

import '@fontsource/roboto/400.css';
import { Header } from './components/layout/Header';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
};

export default App;
