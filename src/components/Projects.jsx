import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "../data";
import styles from "./Projects.module.css";

function ProjectCard({ p, i }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.body}>
        <p className={styles.number}>{p.number}</p>
        <h3 className={styles.title}>{p.title}</h3>
        <p className={styles.date}>▸ {p.date}</p>
        <p className={styles.desc}>{p.description}</p>
        <ul className={styles.highlights}>
          {p.highlights.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <div className={styles.tech}>
          {p.tech.map((t) => <span key={t} className={styles.chip}>{t}</span>)}
        </div>
      </div>
      <div className={styles.actions}>
        <a href={p.github} target="_blank" rel="noreferrer" className={styles.btnGh}>⌥ GitHub</a>
        {p.hasDemo && (
          <a href={p.demo} target="_blank" rel="noreferrer" className={styles.btnDemo}>↗ Live Demo</a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className="section section-alt" id="projects">
      <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
        <p className="section-eyebrow">Portfolio</p>
        <h2 className="section-title">Things I've <em>built</em></h2>
      </motion.div>
      <div className={styles.list}>
        {projects.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
      </div>
    </section>
  );
}
