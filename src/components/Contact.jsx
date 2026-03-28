import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Contact.module.css";

const contactLinks = [
  { icon: "✉️", label: "Email", value: "devamsingh0009@gmail.com", href: "mailto:devamsingh0009@gmail.com" },
  { icon: "📞", label: "Phone", value: "+91 8707808583", href: "tel:+918707808583" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/devamsingh", href: "https://linkedin.com/in/devamsingh" },
  { icon: "🐙", label: "GitHub", value: "github.com/Devamsingh09", href: "https://github.com/Devamsingh09" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className={styles.blob} />
      <motion.div
        ref={ref}
        className={styles.inner}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <p className="section-eyebrow" style={{ justifyContent: "center" }}>Let's Connect</p>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "1rem" }}>
          Got a project <em>in mind?</em>
        </h2>
        <p className={styles.tagline}>
          I'm actively looking for <strong>internships, full-time roles, and freelance projects</strong> in AI/ML.
          Let's build something remarkable.
        </p>

        <div className={styles.grid}>
          {contactLinks.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={styles.link}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            >
              <div className={styles.linkIcon}>{c.icon}</div>
              <div>
                <p className={styles.linkLabel}>{c.label}</p>
                <p className={styles.linkValue}>{c.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="mailto:devamsingh0009@gmail.com"
          className={styles.emailBig}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          📬 &nbsp; devamsingh0009@gmail.com &nbsp; →
        </motion.a>
      </motion.div>
    </section>
  );
}
