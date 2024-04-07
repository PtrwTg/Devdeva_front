import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import AddUserPage from './pages/AddUserPage/AddUserPage';
import EditUserPage from './pages/EditUserPage/EditUserPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUserPage />} />
        <Route path="/edit/:id" element={<EditUserPage />} />
      </Routes>
    </Router>
  );
}

export default App;