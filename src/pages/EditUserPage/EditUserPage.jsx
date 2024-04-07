import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './EditUserPage.module.css';

function EditUserPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users/${id}`);
      const { firstName, lastName, gender, birthDate } = response.data;
      setFirstName(firstName);
      setLastName(lastName);
      setGender(gender);
      setBirthDate(birthDate);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${id}`, {
        firstName,
        lastName,
        gender,
        birthDate,
      });
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.updateUser}><h2>Update User</h2></div>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.profilePictureSection}>
          <div className={styles.profilePicture}></div>
          <button className={styles.uploadButton}>Upload Profile Picture</button>
          <button className={styles.deleteButton}>Delete Picture</button>
        </div>
        <div className={styles.formSection}>
          <div className={styles.formRow}>
            <div className={styles.labelFieldA}>
              <label>First Name</label>
            </div>
            <div className={styles.labelFieldA}>
              <label>Last Name</label>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <input
                type="text"
                placeholder="Please enter First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className={styles.formField}>
              <input
                type="text"
                placeholder="Please enter Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.labelField}>
              <label>Gender</label>
            </div>
            <div className={styles.labelField}>
              <label>Birthday</label>
            </div>
          </div>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Please select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className={styles.formField}>
              <input
                type="text"
                placeholder="DD/MM/YYYY"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
              <span>
                <i className="fas fa-calendar-alt"></i>
              </span>
            </div>
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.cancelButton} onClick={handleCancel}>
              Cancel
            </button>
            <button className={styles.saveButton} onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserPage;