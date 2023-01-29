import styles from "../styles/Inputform.module.css";

const Inputform = () => {
  return (
    <div>
      <main className={styles.inputCard}>
        <div className={styles.inputField}>
          <input type="text" placeholder="Departure (Paris, Lyon, Marseille..)" />
          <input type="text" placeholder="Arrival (Paris, Lyon, Marseille..)" />
          <input type="date" />
          <input type="time" />
        </div>
        <button className={styles.search}>Search</button>
      </main>
    </div>
  );
};

export default Inputform;
