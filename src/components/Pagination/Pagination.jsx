import styles from './Pagination.module.css';

function Pagination() {
  return (
    <div className={styles.pagination}>
      <span>&lt;</span>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>&gt;</span>
    </div>
  );
}

export default Pagination;