import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './SearchBar.module.css';


function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleAddUser = () => {
    navigate('/add');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Users List</h2>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      <div className={styles.divadd}>
        <button className={styles.addButton} onClick={handleAddUser}>
          Add +
        </button>
      </div>
    </div>
  );
}

export default SearchBar;