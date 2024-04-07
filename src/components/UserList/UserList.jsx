import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './UserList.module.css';
import Pagination from '../Pagination/Pagination';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (searchText = '') => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${searchText}`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = (searchText) => {
    fetchUsers(searchText);
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const formatDate = (dateString) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const [day, month, year] = dateString.split('/');
    const monthName = months[parseInt(month) - 1];
    return `${day} ${monthName} ${year}`;
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Profile picture</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={styles.profileCircle}>
                  {getInitials(user.firstName, user.lastName)}
                </div>
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{formatDate(user.birthDate)}</td>
              <td>
                <button className={styles.editButton}><Link className={styles.noUnderline} to={`/edit/${user._id}`}>Edit</Link></button>
                <button className={styles.deleteButton} onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.paginationContainer}>
        <Pagination />
      </div>
    </div>
  );
}

export default UserList;