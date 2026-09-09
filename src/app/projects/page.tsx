"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

export default function Projects() {
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
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Projects</motion.h1>

        {/* ── Featured: NietzscheGPT ── */}
        <motion.div className={styles.featuredCard} variants={fadeUpVariant}>
          <div className={styles.projectHeader}>
            <span className={styles.projectType}>PHILOSOPHICAL TEXT GENERATION</span>
            <span className={styles.projectYear}>2026</span>
          </div>
          <h2 className={styles.featuredTitle}>NietzscheGPT</h2>
          <p className={styles.projectProse}>
            What happens when you fine-tune a language model on the complete philosophical works of a single author? Fine-tuned GPT-2 Medium (355M parameters) on Nietzsche&apos;s entire English corpus — 25 books, ~2.2M tokens — to generate philosophical text in his unmistakable voice; trained on Apple M3 Pro via MPS backend in ~4 hours and published on Hugging Face.
          </p>
          <div className={styles.projectLinks}>
            <a href="https://huggingface.co/arnavinvariant/NietzscheGPT" target="_blank" rel="noreferrer" className={styles.projectLink}>
              View on Hugging Face &rarr;
            </a>
          </div>
        </motion.div>

        {/* ── 2-column grid ── */}
        <motion.div className={styles.projectsGrid} variants={containerVariants}>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>TECHNICAL IMPLEMENTATION</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>Transformer from Scratch</h2>
            <p className={styles.projectProse}>
              Building understanding from the ground up — implemented the full Transformer encoder from first principles, bridging mathematical derivations and working PyTorch code in a modular notebook.
            </p>
            <ul className={styles.projectBullets}>
              <li>Sinusoidal positional encoding, multi-head self-attention, position-wise FFN, residual connections, layer normalization — all from scratch.</li>
              <li>Trained on a synthetic autoregressive task to verify correctness end-to-end.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/arnavinvariant/Transformer-from-scratch" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>DATA VISUALIZATION</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>10D Hypercube Visualization</h2>
            <p className={styles.projectProse}>
              Geometric structure rarely survives projection. This project constructs a 10-dimensional hypercube and systematically studies what each dimensionality reduction method preserves and destroys.
            </p>
            <ul className={styles.projectBullets}>
              <li>1,024 vertices; 5,120 edges — visualized under PCA, t-SNE, and layer-stratified views.</li>
              <li>Comparative panels illustrating preservation and distortion across projections.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/arnavinvariant/10D-Visualization" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>COMPUTER VISION</span>
              <span className={styles.projectYear}>2025</span>
            </div>
            <h2 className={styles.projectTitle}>Live Emotion Detection</h2>
            <p className={styles.projectProse}>
              A real-time 7-class facial emotion classifier designed for high-throughput inference without sacrificing temporal stability.
            </p>
            <ul className={styles.projectBullets}>
              <li>DeepFace with MTCNN detection; temporal smoothing via 10-frame sliding window.</li>
              <li>Frame-skipping for throughput, overlaid confidence bars and FPS counter.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://github.com/arnavinvariant/Emotion_Detection" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Repository &rarr;
              </a>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>
    </main>
  );
}
