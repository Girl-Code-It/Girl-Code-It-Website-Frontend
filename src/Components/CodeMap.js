import React, { Component } from "react";
import CodeMapCard from "./CodeMapCard";
import Pic from "./undraw1.png";
import styles from "../Css/CodeMap.module.css";


export default class CodeMap extends Component {
  render() {
    return (
      <div>
        <hr style={{ width: "50%", textAlign: "center" }} />
        <h1 class={styles.Codemaps}>
          Our <span style={{ color: "rgb(0, 141, 200)" }}>CodeMaps</span>
        </h1>
        <div className={styles.app}>
          <div className={styles.row}>
            <div className={styles.card1}>
              <CodeMapCard
                codeMap={{
                  imgUrl:
                    "https://img.icons8.com/ios/50/000000/c-plus-plus-logo.png",
                  name: "C++ for Beginners"
                }}
              />
            </div>
            <div className={styles.card2}>
              <CodeMapCard
                codeMap={{
                  imgUrl: "https://img.icons8.com/wired/64/000000/code.png",
                  name: "Front-Web Dev"
                }}
              />
            </div>{" "}
          </div>

          <div className={styles.row}>
            <div className={styles.card3}>
              <CodeMapCard
                codeMap={{
                  imgUrl:
                    "https://img.icons8.com/ios/50/000000/c-plus-plus-logo.png",
                  name: "Advanced C++"
                }}
              />
            </div>
            <div className={styles.card4}>
           <CodeMapCard
             codeMap={{
               imgUrl:
               "https://img.icons8.com/carbon-copy/100/000000/react.png",
               name: "Frontend (ReactJS)"
             }}
           />
         </div>
       </div>

       <div className={styles.card5}>
         <CodeMapCard
           codeMap={{
             imgUrl:
             "https://img.icons8.com/wired/64/000000/java-coffee-cup-logo.png",
             name: "Java for Beginners"
           }}
         />
       </div>
       <div className="col col-md-4">
         <div className={styles.container}>
           <img class={styles.img2} src={Pic} alt="" />
           <div className={styles.card6}>
             <CodeMapCard
               codeMap={{
                 imgUrl: "https://img.icons8.com/wired/64/000000/java-coffee-cup-logo.png",
                 name: "Advanced Java"
               }}
             />
           </div>
         </div>
       </div>

       <hr style={{ width: "50%", textAlign: "center" }} />
     </div>
     </div>
   );
 }
}
