import React from "react";
import Leftview from "../../../components/admin/leftview/leftview";
import Elements from "@/components/admin/elements/elements";
import styles from "./elements.module.scss";

const Page = () => {
  return (
    <div className={styles.container}>
      <Leftview />
      <Elements />
    </div>
  );
};

export default Page;
