import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data";
import styles from "./Experience.module.css";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="section" id="experience">
      <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
        <p className="section-eyebrow">Work History</p>
        <h2 className="section-title">Where I've <em>worked</em></h2>
      </motion.div>
      <div className={styles.timeline}>
        {experience.map((e, i) => {
          const cardRef = useRef(null);
          const cardInView = useInView(cardRef, { once: true, margin: "-60px" });
          return (
            <motion.div
              key={i}
              ref={cardRef}
              className={styles.item}
              initial={{ opacity: 0, x: -24 }}
              animate={cardInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <p className={styles.role}>{e.role}</p>
                    <p className={styles.company}>{e.company}</p>
                  </div>
                  <span className={styles.period}>{e.period}</span>
                </div>
                <ul className={styles.points}>
                  {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
