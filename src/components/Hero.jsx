import { motion } from "framer-motion";
import photo from "../assets/photo.js";
import styles from "./Hero.module.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* BG blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* LEFT */}
      <div className={styles.left}>
        <motion.div className={styles.eyebrow} {...fadeUp(0.1)}>
          Available for Opportunities
          <span className={styles.dot} />
        </motion.div>

        <h1 className={styles.h1}>
          {["Devam", "Singh", "AI / ML"].map((word, i) => (
            <motion.span
              key={word}
              className={`${styles.word} ${i === 2 ? styles.gradient : ""}`}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
              {i < 1 && " "}
              {i === 1 && <br />}
            </motion.span>
          ))}
        </h1>

        <motion.p className={styles.sub} {...fadeUp(0.6)}>
          CS Engineering student at <strong>IIIT Ranchi</strong> building intelligent systems —
          from agentic chatbots to NL-to-SQL pipelines using{" "}
          <strong>LangGraph, Groq, FastAPI</strong> & modern ML stacks.
        </motion.p>

        <motion.div className={styles.actions} {...fadeUp(0.75)}>
          <a href="#projects" className="btn btn-primary">View My Work →</a>
          <a href="mailto:devamsingh0009@gmail.com" className="btn btn-outline">📩 Get in Touch</a>
        </motion.div>
      </div>

      {/* RIGHT — Photo */}
      <motion.div className={styles.right} {...fadeUp(0.4)}>
        <div className={styles.photoFrame}>
          <div className={styles.photoInner}>
            <img src={photo} alt="Devam Singh" className={styles.photo} />
          </div>
          <div className={`${styles.badge} ${styles.b1}`}>🤖 LangGraph Expert</div>
          <div className={`${styles.badge} ${styles.b2}`}>🎓 IIIT Ranchi · 2026</div>
          <div className={`${styles.badge} ${styles.b3}`}>⚡ Top 3% JEE Mains</div>
        </div>
      </motion.div>
    </section>
  );
}
