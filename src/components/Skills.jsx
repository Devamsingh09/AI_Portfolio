import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "../data";
import styles from "./Skills.module.css";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="section" id="skills">
      <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
        <p className="section-eyebrow">Tech Stack</p>
        <h2 className="section-title">What I <em>work with</em></h2>
      </motion.div>
      <div className={styles.grid}>
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            className={styles.card}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.icon}>{s.icon}</div>
            <p className={styles.title}>{s.title}</p>
            <div className={styles.tags}>
              {s.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
