import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Otherbody from "@/components/Otherbody";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <Link href="/about">About</Link>
        <div className="row">
          <div className="col-3">HI</div>
          <div className="col-3">HI</div>
          <div className="col-3">HI</div>
          <div className="col-3">HI</div>
        </div>
      </div>
    </>
  );
}
