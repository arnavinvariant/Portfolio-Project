"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main className={styles.main}>
      <motion.section 
        className={styles.section}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Experience</motion.h1>

        <motion.div className={styles.experienceList} variants={containerVariants}>
          
          {/* ── Featured: Independent Researcher ── */}
          <motion.div className={`${styles.experienceItem} ${styles.featured}`} variants={fadeUpVariant}>
            <div className={styles.itemHeader}>
              <h2 className={styles.company}>Independent Researcher</h2>
              <span className={styles.date}>2025 — Present</span>
            </div>
            <div className={styles.itemSubHeader}>
              <span className={`${styles.role} ${styles.rolePill}`}>Mathematics · ML Theory · Philosophy</span>
            </div>
            <p className={styles.focusStatement}>
              Published research spanning optimization and matrix perturbation theory, spectral geometry of learned representations, verifier exploitation in NLI pipelines, and existentialist philosophy.
            </p>
            <ul className={styles.bulletList}>
              <li>Proved a Wedin-type singular-subspace alignment bound for norm-constrained asymmetric low-rank updates, connecting LoRA-style adaptation to matrix perturbation theory.</li>
              <li>Introduced the spectral saturation index S(K) — a closed-form, label-free stopping rule for few-shot label acquisition, validated across 49 real tasks and three frozen backbones.</li>
              <li>First controlled empirical documentation of verifier exploitation in zero-gradient, prompt-only iterative refinement; designed a 3-condition annotation-free detection protocol.</li>
              <li>Published a critical reexamination of the argumentative structure of Camus’s Myth of Sisyphus, arguing the conclusion enacts the philosophical suicide Camus critiques.</li>
            </ul>
          </motion.div>

          {/* ── Suvidha Foundation ── */}
          <motion.div className={styles.experienceItem} variants={fadeUpVariant}>
            <div className={styles.itemHeader}>
              <h2 className={styles.company}>Suvidha Foundation</h2>
              <span className={styles.date}>Sep 2025 — Nov 2025</span>
            </div>
            <div className={styles.itemSubHeader}>
              <span className={styles.role}>Machine Learning Intern</span>
            </div>
            <ul className={styles.bulletList}>
              <li>Researched multi-document abstractive summarization with transformer-based models under mentorship of a PhD in NLP.</li>
              <li>Built a proof-of-concept summarization system incorporating hierarchical context aggregation across multiple source documents.</li>
              <li>Participated in community outreach programs supporting underserved populations alongside technical work.</li>
            </ul>
          </motion.div>



        </motion.div>
      </motion.section>
    </main>
  );
}
