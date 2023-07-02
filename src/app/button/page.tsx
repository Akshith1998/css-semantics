import Button from "@/components/Elements/button/button";
import { LeftView } from "@/components/leftView/leftView";
import styles from "./button.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <LeftView />
      <Button />
    </div>
  );
}
