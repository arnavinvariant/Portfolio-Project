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
              <h3 className={styles.factLabel}>Status</h3>
              <p className={styles.factValue}>Independent Researcher</p>
            </div>
            
            <div className={styles.factGroup}>
              <h3 className={styles.factLabel}>Location</h3>
              <p className={styles.factValue}>Nepal</p>
            </div>
            
            <div className={styles.factGroup}>
              <h3 className={styles.factLabel}>Current Level</h3>
              <p className={styles.factValue}>Grade 10 · 15 years old</p>
            </div>

            <div className={styles.factGroup}>
              <h3 className={styles.factLabel}>Research Focus</h3>
              <p className={styles.factValue}>
                Geometric and spectral properties of learned representations; NLI auditing in iterative refinement.
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
                  My work is animated by a structural question: when does the spectral and geometric character of a learned representation determine what a learning system can and cannot do — and what does that imply about when pipelines will fail?
                </p>
                <p>
                  My research pursues this from complementary angles. One preprint (arXiv, 2026) introduces the spectral saturation index <em>S(K) = erank(Σ̂⁽ᴷ⁾_W)/K</em>, a label-free stopping rule for few-shot label acquisition validated across 49 tasks and three backbones. The other (Research Square, 2026) provides the first controlled empirical documentation of verifier exploitation in NLI-guided iterative refinement.
                </p>
              </div>

              <blockquote className={styles.pullQuote}>
                Operating without institutional affiliation, advisor, or supervised compute — from Nepal, at fifteen.
              </blockquote>

              <div className={styles.prose}>
                <p>
                  Both investigations were conducted independently, alongside a full formal school curriculum, without access to institutional compute, an academic supervisor, or a research group. All code, methodology, and writing is my own. I build the systems I study from first principles, emphasizing rigorous empirical evaluation and theoretical grounding.
                </p>
              </div>
            </motion.div>

            {/* ── Technical Skills ── */}
            <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
              <h2 className={styles.blockTitle}>Technical Stack</h2>
              <dl className={styles.skillGrid}>
                <div className={styles.skillRow}>
                  <dt className={styles.skillCategory}>Languages</dt>
                  <dd className={styles.skillItems}>Python, C++, SQL</dd>
                </div>
                <div className={styles.skillRow}>
                  <dt className={styles.skillCategory}>Libraries</dt>
                  <dd className={styles.skillItems}>PyTorch, TensorFlow, Hugging Face Transformers, Scikit-learn, NumPy, Pandas, Matplotlib, XGBoost</dd>
                </div>
                <div className={styles.skillRow}>
                  <dt className={styles.skillCategory}>Tools</dt>
                  <dd className={styles.skillItems}>Git, Docker, CUDA, REST APIs, LaTeX, Obsidian, Zotero</dd>
                </div>
              </dl>
            </motion.div>

            {/* ── Mathematics Coursework ── */}
            <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
              <h2 className={styles.blockTitle}>Mathematics</h2>
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
                    <span className={styles.courseDetail}>Matrix theory, eigendecomposition, orthogonality, and ML applications.</span>
                  </div>
                  <span className={`${styles.courseStatus} ${styles.inProgress}`}>In Progress</span>
                </div>
              </div>
            </motion.div>

            {/* ── Other Interests ── */}
            <motion.div className={styles.contentBlock} variants={fadeUpVariant}>
              <h2 className={styles.blockTitle}>Other Pursuits</h2>

              <div className={styles.interestGrid}>
                <div className={styles.interestBlock}>
                  <h3 className={styles.interestTitle}>Philosophy</h3>
                  <p className={styles.interestText}>
                    Deeply drawn to Existentialism and Absurdism — confronting the questions of meaning and authenticity. I publish essays on these themes on <a href="https://substack.com/@arnavinvariant" target="_blank" rel="noreferrer">Substack</a>.
                  </p>
                </div>

                <div className={styles.interestBlock}>
                  <h3 className={styles.interestTitle}>Mathematics &amp; Physics</h3>
                  <p className={styles.interestText}>
                    Captivated by the formal structures underlying the physical world, which continuously informs my approach to machine learning at a foundational level.
                  </p>
                </div>

                <div className={styles.interestBlock}>
                  <h3 className={styles.interestTitle}>Speedcubing &amp; Trivia</h3>
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
