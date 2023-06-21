import React from "react";
import styles from "./leftview.module.scss";
import Logo from "../../../../public/logo.jpeg";
import Image from "next/image";

const Leftview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoDiv}>
        <Image src={Logo} className={styles.logo} alt="logo" />
      </div>
      <div className={styles.contentDiv}>
        <div className={styles.mainContent}>Dashboard</div>
        <div className={styles.mainContent}>Components</div>
        <div className={styles.mainContent}>Users</div>
      </div>
    </div>
  );
};

export default Leftview;
