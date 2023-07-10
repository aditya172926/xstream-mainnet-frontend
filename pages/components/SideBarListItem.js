import Image from "next/image";
import styles from "../../styles/Home.module.css";

const SideBarListItem = ({ name, img }) => {
  return (
    <>
      <div className={styles.link_icon}>
        <Image src={img} alt="icons" />
      </div>
      <div className={styles.link_text}>{name}</div>
    </>
  );
};

export default SideBarListItem;
