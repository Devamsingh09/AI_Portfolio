import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./About.module.css";

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <FadeIn>
        <p className="section-eyebrow">Who I Am</p>
        <h2 className="section-title">A bit about <em>me</em></h2>
      </FadeIn>

      <div className={styles.grid}>
        <FadeIn delay={0.1}>
          <div className={styles.text}>
            <p>I'm a <strong>Computer Science & Engineering</strong> student at the Indian Institute of Information Technology, Ranchi — graduating in 2026. I specialise in <strong>Generative AI, agentic systems, and machine learning</strong>.</p>
            <blockquote className={styles.quote}>
              "I build AI that works in the real world, not just in notebooks."
            </blockquote>
            <p>My work spans <strong>LangGraph orchestration</strong>, RAG pipelines, full-stack deployment with Docker & FastAPI, and classical ML — taking ideas end-to-end from research to production.</p>
            <p>Outside of building, I enjoy exploring new LLM architectures, contributing to open-source, and pushing the boundaries of what small teams can ship with modern AI tooling.</p>
          </div>
        </FadeIn>

        <div className={styles.cards}>
          {[
            {
              label: "Education",
              value: "BTech — Computer Science & Engineering",
              sub: "Indian Institute of Information Technology, Ranchi",
              badge: "🎓 CGPA: 7.5 / 10 · 2022 – 2026",
              delay: 0.1,
            },
            {
              label: "Certification",
              value: "IBM Professional Data Science Certificate",
              sub: "Data Viz · Web Scraping · ML · SQL · Preprocessing",
              badge: "✅ IBM Certified",
              delay: 0.2,
            },
            {
              label: "Location",
              value: "Jaunpur, Uttar Pradesh, India",
              sub: "Open to remote opportunities worldwide",
              badge: "🌐 Open to Remote",
              delay: 0.3,
            },
            {
              label: "National Ranking",
              value: "Top 3% — JEE Mains",
              sub: "Rank 5 · UPJEECUP State Diploma Exam",
              badge: "🏆 National Topper",
              delay: 0.4,
            },
          ].map((c) => (
            <FadeIn key={c.label} delay={c.delay}>
              <div className={styles.card}>
                <p className={styles.cardLabel}>{c.label}</p>
                <p className={styles.cardValue}>{c.value}</p>
                <p className={styles.cardSub}>{c.sub}</p>
                <span className={styles.badge}>{c.badge}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
