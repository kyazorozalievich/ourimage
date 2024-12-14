"use client"
import scss from "./Footer.module.scss";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";

const Footer = () => {
 return (
  <section className={scss.Footer}>
   <div className="container">
    <div className={scss.content}>
        <h1>I love You <BsFillArrowThroughHeartFill />
        </h1>
    </div>
   </div>
  </section>
 );
};

export default Footer;
