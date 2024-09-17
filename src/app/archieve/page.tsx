import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Fynsdistrikt from "../../../public/fynsdistrikt.png";

export default function Portfolio() {
	return (
		<main>
			<Link href="/">
				<p>{"<-"} Back</p>
			</Link>
			<div className={styles.Projects}>
				<div className={styles.Project}>
					<div className={styles.imageContainer}>
						<Image
							src={Fynsdistrikt}
							className={styles.image}
							alt="Picture of fynsdistrikt website"
						/>
					</div>
					<div className={styles.descriptionBox}>
						<h2>Fynsdistrikt</h2>
						<p>
							A scout website for a summer scout camp. It has a
							activity system and registration system. It is built
							in React with firebase as an backend and auth
							server.
						</p>
						<a
							href="https://fynsdistrikt.smallbenji.tech"
							className={styles.Link}
						>
							<div className={styles.Button}>
								<h3>Visit</h3>
							</div>
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
