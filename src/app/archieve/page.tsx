import Link from "next/link";
import styles from "./page.module.css";

export default function Portfolio() {
  return (
    <main>
      <Link href="/">
        <p>{"<-"} Back</p>
      </Link>
      <div className={styles.Projects}>
        <div className={styles.Project}>
          <h2>Project 1</h2>
          <p>Project description</p>
        </div>
      </div>
    </main>
  );
}
