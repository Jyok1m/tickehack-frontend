import styles from "../styles/Home.module.css";
import Titlecard from "./Titlecard";
import Inputform from "./Inputform";
import Trainlist from "./Trainlist";

function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>Tickethack</h1>
        <img src="/TGV transparent.gif" alt="logo" className={styles.logo} />
        <div className={styles.headerBtns}>
          <a href="">Cart</a>
          <a href="">Bookings</a>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.landing}>
          <div className={styles.titleCard}>
            <Titlecard />
          </div>
          <div className={styles.queryForm}>
            <Inputform />
            <Trainlist />
          </div>
        </div>
      </main>

      <main className={styles.home}></main>

      <footer className={styles.footer}></footer>
    </>
  );
}

export default Home;
