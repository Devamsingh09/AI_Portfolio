import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievements, certifications } from "../data";
import styles from "./Achievements.module.css";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="section section-alt">
      <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
        <p className="section-eyebrow">Recognition</p>
        <h2 className="section-title">Certs & <em>Achievements</em></h2>
      </motion.div>

      <div className={styles.grid}>
        <div>
          <p className={styles.blockTitle}>📜 Certifications</p>
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              className={`${styles.card} ${styles.cert}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            >
              <div className={`${styles.icon} ${styles.iconCert}`}>{c.icon}</div>
              <div>
                <p className={styles.cardTitle}>{c.title}</p>
                <p className={styles.cardSub}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <p className={styles.blockTitle}>🏆 Achievements</p>
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              className={`${styles.card} ${styles.ach}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            >
              <div className={`${styles.icon} ${styles.iconAch}`}>{a.icon}</div>
              <div>
                <p className={styles.cardTitle}>{a.title}</p>
                <p className={styles.cardSub}>{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
