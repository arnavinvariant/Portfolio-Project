"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

export default function About() {
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
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Biography</motion.h1>

        <div className={styles.layoutGrid}>
          
          {/* ── Left Sidebar: Quick Facts ── */}
          <motion.aside className={styles.sidebar} variants={fadeUpVariant}>
            <div className={styles.factGroup}>
              <h3 className={styles.factLabel}>Affiliation</h3>
              <p className={styles.factValue}>Independent Researcher</p>
            </div>
            
            <div className={styles.factGroup}>
              <h3 className={styles.factLabel}>Location</h3>
              <p className={styles.factValue}>Nepal</p>
            </div>

            <div className={styles.factGroup}>
              <h3 className={styles.factLabel}>Research Direction</h3>
              <p className={styles.factValue}>
                Pure mathematics — optimization, matrix analysis, calculus
              </p>
            </div>

            <div className={styles.factGroup}>
              <h3 className={styles.factLabel}>Correspondence</h3>
              <p className={styles.factValue}>
                <a href="mailto:arnav.gupta.ai@outlook.com" className={styles.sidebarLink}>arnav.gupta.ai@outlook.com</a>
              </p>
            </div>
          </motion.aside>

          {/* ── Right Column: Narrative ── */}
          <div className={styles.mainColumn}>
            
            <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
              <div className={styles.prose}>
                <p className="dropcap">
                  My work is moving toward pure mathematics — optimization, matrix analysis, and calculus. Three published preprints in ML theory and NLP constitute the empirical and theoretical foundation from which this direction emerged.
                </p>
                <p>
                  The ML work spans spectral geometry of learned representations (a label-free saturation index for few-shot stopping rules, validated across 49 tasks and three frozen backbones), verifier exploitation in NLI-guided iterative refinement, and singular-subspace alignment bounds for norm-constrained low-rank updates. Each investigation was grounded in the mathematical structures that determine when and why learning systems succeed or fail.
                </p>
              </div>

              <blockquote className={styles.pullQuote}>
                All investigations conducted independently. All code, methodology, and writing is my own.
              </blockquote>
            </motion.div>

            {/* ── Philosophy ── */}
            <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
              <h2 className={styles.blockTitle}>Philosophy</h2>
              <div className={styles.prose}>
                <p>
                  Existentialist philosophy is a second, sustained thread in my work. A published preprint on Zenodo critically re-examines the argumentative structure of Camus&apos;s <em>Myth of Sisyphus</em>, arguing that its famous conclusion enacts the very &ldquo;philosophical suicide&rdquo; Camus critiques in Kierkegaard and Husserl. I write on these themes — meaning, authenticity, absurdity — on <a href="https://substack.com/@arnavinvariant" target="_blank" rel="noreferrer">Substack</a>.
                </p>
              </div>
            </motion.div>

            {/* ── Mathematics Coursework ── */}
            <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
              <h2 className={styles.blockTitle}>Mathematics Coursework</h2>
              <span className={styles.blockSubtitle}>MIT OpenCourseWare — Self-Directed</span>
              <div className={styles.courseGrid}>
                <div className={styles.courseCard}>
                  <span className={styles.courseNumber}>18.01</span>
                  <div className={styles.courseInfo}>
                    <span className={styles.courseName}>Single Variable Calculus</span>
                    <span className={styles.courseDetail}>Differential and integral calculus with rigorous problem-solving.</span>
                  </div>
                  <span className={styles.courseStatus}>Completed</span>
                </div>
                <div className={styles.courseCard}>
                  <span className={styles.courseNumber}>18.06</span>
                  <div className={styles.courseInfo}>
                    <span className={styles.courseName}>Linear Algebra</span>
                    <span className={styles.courseDetail}>Matrix theory, eigendecomposition, SVD, orthogonality, and ML applications.</span>
                  </div>
                  <span className={styles.courseStatus}>Completed</span>
                </div>
                <div className={styles.courseCard}>
                  <span className={styles.courseNumber}>18.02</span>
                  <div className={styles.courseInfo}>
                    <span className={styles.courseName}>Multivariable Calculus</span>
                    <span className={styles.courseDetail}>Vector calculus, partial derivatives, multiple integrals, line &amp; surface integrals, and gradient fields.</span>
                  </div>
                  <span className={`${styles.courseStatus} ${styles.inProgress}`}>In Progress</span>
                </div>
              </div>
            </motion.div>

            {/* ── Other Interests ── */}
            <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
              <h2 className={styles.blockTitle}>Other Interests</h2>

              <div className={styles.interestGrid}>
                <div className={styles.interestBlock}>
                  <h3 className={styles.interestTitle}>Speedcubing & Trivia</h3>
                  <p className={styles.interestText}>
                    3×3 Rubik&apos;s Cube average: 22.39s (PR 13.69s). Geography enthusiast (guessed 143/197 flags in 18 minutes).
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </motion.section>
    </main>
  );
}
