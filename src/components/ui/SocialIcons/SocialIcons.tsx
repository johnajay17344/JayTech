import styles from "./SocialIcons.module.css";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";



export default function SocialIcons() {
  return (
    <div className={styles.icons}>
      <Link href="#" className={styles.icon1}>
        <FaInstagram />
      </Link>
      <Link href="#" className={styles.icon2}>
        <FaLinkedin />
      </Link>
      <Link href="#" className={styles.icon3}>
        <MdEmail />
      </Link>
      <Link href="#" className={styles.icon4}>
        <FaGithub />
      </Link>
      <Link href="#" className={styles.icon5}>
        <FaXTwitter />
      </Link>
    </div>
  );
}