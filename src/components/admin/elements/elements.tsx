import React from "react";
import styles from "./elements.module.scss";

const Elements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.subHeader}>
        <div className={styles.subHeaderHeading}>ALL COMPONENTS</div>
        <div className={styles.addNewDiv}>
          <button className={styles.addNew}>Add New</button>
        </div>
      </div>
    </div>
  );
};

export default Elements;
