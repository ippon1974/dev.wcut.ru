import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.wrapper}>
      <header>
        <h1 className={styles.headerH1}>Разработка веб сайтов</h1>
        <h2 className={styles.headerH2}>Технологический стек</h2>
      </header>
      <main className={styles.main}>
        <p><strong>На стороне клиента (Frontend)</strong>: JavaScript, React.js, Next.js, CSS.</p>
        <p><strong>На стороне сервера (Backend)</strong>: OS Linux, NGINX, Node.js, Nest.js, MySQL.</p>
      </main>
      <footer className={styles.footer}>
        <hr />
        <p>Электропочта: <span>dev@wcut.ru</span></p>
      </footer>
      </div>
    </div>
  );
}
