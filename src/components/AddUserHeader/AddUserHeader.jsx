import React from 'react';
import styles from './AddUserHeader.module.css';

function AddUserHeader({ onAddUser }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create new User</h2>
      <button className={styles.addButton} onClick={onAddUser}>
        Add +
      </button>
    </div>
  );
}

export default AddUserHeader;