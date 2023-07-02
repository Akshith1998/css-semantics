import styles from "./leftview.module.scss";
import Logo from "../../../public/logo.jpeg";
import Image from "next/image";
import Link from "next/link";

export const LeftView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoDiv}>
        <Image src={Logo} className={styles.logo} alt="logo" />
      </div>
      <div className={styles.contentDiv}>
        <Link href="/button" className={styles.mainContent}>
          Button
        </Link>
        <Link href="/link" className={styles.mainContent}>
          Link
        </Link>
        <Link href="/image" className={styles.mainContent}>
          Image
        </Link>
      </div>
    </div>
  );
};
