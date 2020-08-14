import React from "react";
import styles from "../CSS/Footer.module.css";
import { GrInstagram } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { FaRegEnvelope } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import gci from "../../homepage/assets/footer.png";
export default function Footer() {
  return (
<footer fixed="bottom" className="footer">
<div class="container">
<div class="row">
  <div class="col-md-3 col-12">
  <div className="box">
    <img src={gci} alt="" className={styles.img} />
  </div>
  </div>
  <div class="col-md-3 col-12" id={styles.p1}>
    <h5 className={styles.title}>Links</h5>
    <ul className={styles.list} id={styles.type1}>
      <li> Terms And Conditions</li>
      <li id={styles.type2}>Privacy Policy</li>
    </ul>
  </div>
  <div class="col-md-3 col-12" id={styles.p2}>
    <h5 className={styles.title}>Products</h5>
    <ul className={styles.list} id={styles.type3}>
      <li>Codemaps</li>
      <li id={styles.type4}>Opportunity calendar</li>
    </ul>
  </div>
  <div class=" col-md-3 col-12" id={styles.p3}>
    <h5 className={styles.title}>Contact us</h5>
    <ul className={styles.list} id={styles.type5}>
      <li><MdPhone className={styles.fa} />(+91) 83848-13292</li>
      <li><FaRegEnvelope className={styles.fa} />girlcodeit@gmail.com</li>
    </ul>
  </div>
  </div>
    <hr />
  <div className="row">
    <div className="col" id={styles.s}>
    &copy; {new Date().getFullYear()} Girl Code It | All Rights Reserved
    </div>
    <div className="col-md-4 col-12 ">
      <GrInstagram className={styles.icon} />
      <FaTwitterSquare className={styles.icon} />
      <GrLinkedin className={styles.icon} />
    </div>
  </div>
</div>
</footer>
  );
}
