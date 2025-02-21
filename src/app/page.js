import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar";
import Header from "./header";
import { Nav } from "react-bootstrap";
import Maincontent from "./maincontent";

export default function Home() {
  return (
    <>
      <Header/>
      <Maincontent/>
    </>
  );
}
