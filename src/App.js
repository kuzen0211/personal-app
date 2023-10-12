import { Route, Routes } from 'react-router-dom';
import './App.css';
// import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import Account from './pages/Account/Account';
import Task from './pages/Task/Task';

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="/account" element={<Account />} />
        <Route path="/task" element={<Task />} />
      </Route>
    </Routes>
  );
};

export default App;
