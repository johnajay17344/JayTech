import styles from "./SocialIcons.module.css";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import {Socials} from "./data";


export default function SocialIcons() {
  return (
    <div className={styles.icons}>
      <Link href={Socials.instagram} className={styles.icon1} target="_blank">
        <FaInstagram />
      </Link>
      <Link href={Socials.linkedin} className={styles.icon2} target="_blank">
        <FaLinkedin />
      </Link>
      <Link href={Socials.email} className={styles.icon3} target="_blank">
        <MdEmail />
      </Link>
      <Link href={Socials.github} className={styles.icon4} target="_blank">
        <FaGithub />
      </Link>
      <Link href={Socials.twitter} className={styles.icon5} target="_blank">
        <FaXTwitter />
      </Link>
    </div>
  );
}