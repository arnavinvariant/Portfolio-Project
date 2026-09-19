"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { Download } from "lucide-react";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } }
  };

  const stripVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const stripItemVariant: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
  };

  const stripLinks = [
    { tag: "Biography", title: "Pure mathematics, ML pedigree & philosophical inquiry", href: "/about" },
    { tag: "Publications", title: "Four preprints across mathematics, ML theory & philosophy", href: "/publications" },
    { tag: "Experience", title: "ML/NLP research background & internship", href: "/experience" },
    { tag: "Contact", title: "Academic & professional enquiries, ORCID & social links", href: "/contact" },
  ];

  return (
    <main className={styles.main}>
      {/* ── Editorial 3-Column Hero ── */}
      <motion.section
        className={styles.heroSection}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className={styles.heroGrid}>
          
          {/* Column 1: Dossier Facts */}
          <motion.div className={styles.dossierCol} variants={fadeUpVariant}>
            <div className={styles.dossierItem}>
              <span className={styles.dossierValue}>FOUR</span>
              <span className={styles.dossierLabel}>PREPRINTS</span>
            </div>
            <div className={styles.dossierItem}>
              <span className={styles.dossierValue}>NEPAL</span>
              <span className={styles.dossierLabel}>INDEPENDENT</span>
            </div>
            <div className={styles.dossierItem}>
              <span className={styles.dossierValue}>MATHEMATICS</span>
              <span className={styles.dossierLabel}>& PHILOSOPHY</span>
            </div>
            <div className={styles.dossierItem}>
              <span className={styles.dossierValue}>ML/NLP</span>
              <span className={styles.dossierLabel}>PUBLISHED WORK</span>
            </div>
          </motion.div>

          {/* Column 2: Center Typography */}
          <motion.div className={styles.centerCol} variants={fadeUpVariant}>
            <h1 className={styles.heroTitle}>
              Arnav<br />Gupta.
            </h1>
            <p className={styles.heroStatement}>
              Emerging in pure mathematics, with published research in machine learning theory and existentialist philosophy. My current work concerns optimization, matrix analysis, and the structures underlying learning and meaning.
            </p>
            <div className={styles.heroActions}>
              <Link href="/about" className={styles.primaryAction}>
                Read Biography
              </Link>
              <a
                href="/Arnav_Gupta_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryAction}
              >
                <Download size={13} strokeWidth={1.5} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Column 3: Portrait Frame */}
          <motion.div className={styles.portraitCol} variants={fadeUpVariant}>
            <div className={styles.imageFrame}>
              <Image
                src="/profile.png"
                alt="Arnav Gupta"
                fill
                priority
                className={styles.heroImage}
              />
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* ── Magazine Strip ── */}
      <motion.div
        className={styles.magazineStrip}
        initial="hidden"
        animate="visible"
        variants={stripVariants}
      >
        <div className={styles.stripGrid}>
          {stripLinks.map((item) => (
            <motion.div key={item.href} variants={stripItemVariant}>
              <Link href={item.href} className={styles.stripItem}>
                <span className={styles.stripTag}>{item.tag}</span>
                <h3 className={styles.stripTitle}>{item.title}</h3>
                <span className={styles.stripArrow}>&rarr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
