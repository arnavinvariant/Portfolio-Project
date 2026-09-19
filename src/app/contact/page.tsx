"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";
import { Github, Linkedin, Mail, Phone, Newspaper, BookOpen, GraduationCap } from "lucide-react";

export default function Contact() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main className={styles.main}>
      <motion.section 
        className={styles.section}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Contact</motion.h1>

        <motion.p className={styles.openingStatement} variants={fadeUpVariant}>
          For research collaborations, academic correspondence, preprint feedback, or general enquiries.
        </motion.p>

        {/* ── Academic & Professional ── */}
        <motion.p className={styles.sectionLabel} variants={fadeUpVariant}>Academic &amp; Professional</motion.p>
        <motion.div className={styles.contactList} variants={containerVariants}>

          <motion.a 
            href="https://orcid.org/0009-0003-0592-2530"
            target="_blank"
            rel="noreferrer"
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <BookOpen size={18} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>ORCID</h2>
            <span className={styles.cardValue}>0009-0003-0592-2530</span>
          </motion.a>

          <motion.a 
            href="https://scholar.google.com/citations?user=0ZMfzKcAAAAJ&hl=en"
            target="_blank"
            rel="noreferrer"
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <GraduationCap size={18} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>Google Scholar</h2>
            <span className={styles.cardValue}>Arnav Gupta</span>
          </motion.a>

          <motion.a 
            href="mailto:arnav.gupta.ai@outlook.com" 
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Mail size={18} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>Academic Email</h2>
            <span className={styles.cardValue}>arnav.gupta.ai@outlook.com</span>
          </motion.a>

          <motion.a 
            href="https://www.linkedin.com/in/arnavinvariant/" 
            target="_blank" 
            rel="noreferrer"
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Linkedin size={18} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>LinkedIn</h2>
            <span className={styles.cardValue}>in/arnavinvariant</span>
          </motion.a>

          <motion.a 
            href="https://github.com/arnavinvariant" 
            target="_blank" 
            rel="noreferrer"
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Github size={18} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>GitHub</h2>
            <span className={styles.cardValue}>@arnavinvariant</span>
          </motion.a>



        </motion.div>

        {/* ── Personal ── */}
        <motion.p className={styles.sectionLabel} variants={fadeUpVariant}>Personal</motion.p>
        <motion.div className={styles.contactList} variants={containerVariants}>

          <motion.a 
            href="mailto:arnavgupta6969@icloud.com" 
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Mail size={18} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>Personal Email</h2>
            <span className={styles.cardValue}>arnavgupta6969@icloud.com</span>
          </motion.a>

          <motion.a 
            href="tel:+9779863744666" 
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Phone size={18} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>Phone</h2>
            <span className={styles.cardValue}>+977 9863744666</span>
          </motion.a>

          <motion.a 
            href="https://substack.com/@arnavinvariant" 
            target="_blank" 
            rel="noreferrer"
            className={styles.contactCard}
            variants={fadeUpVariant}
          >
            <Newspaper size={18} strokeWidth={1.5} className={styles.icon} />
            <h2 className={styles.cardTitle}>Substack</h2>
            <span className={styles.cardValue}>@arnavinvariant</span>
          </motion.a>

        </motion.div>
      </motion.section>
    </main>
  );
}
