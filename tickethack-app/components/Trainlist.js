import styles from "../styles/Trainlist.module.css";

const Trainlist = () => {
  return (
    <div>
      <main className={styles.responseCard}>
        <img src="/openbook.gif" alt="Open book with globe in the middle" />
        <div className={styles.line}></div>
        <p>It's time to book your future trip !</p>
      </main>
    </div>
  );
};

export default Trainlist;
