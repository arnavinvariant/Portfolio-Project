"use client";

import { motion, Variants } from "framer-motion";
import styles from "./page.module.css";

export default function Publications() {
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
        <motion.h1 className={styles.pageTitle} variants={fadeUpVariant}>Publications & Preprints</motion.h1>

        <motion.div className={styles.projectsGrid} variants={containerVariants}>

          {/* ── Paper 3: Singular-Subspace Alignment ── */}
          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>PREPRINT</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>Singular-Subspace Alignment in Norm-Constrained Asymmetric Low-Rank Updates</h2>
            <p className={styles.projectAuthor}>Arnav Gupta · Independent Researcher · Zenodo, 2026</p>
            <p className={styles.projectDescription}>A geometric analysis of how norm-constrained low-rank updates align with the singular subspaces of the pretrained gradient.</p>
            <div className={styles.abstractBlock}>
              <h3 className={styles.abstractTitle}>Abstract</h3>
              <p>We study the singular-subspace geometry of an asymmetric low-rank update X=BA under a Frobenius-norm constraint. For the affine linearization of a smooth matrix loss, factorized first-order stationarity pairs singular subspaces of the gradient, while the factorized second-order condition selects the leading r subspaces exactly. For a nonlinear loss, let G and G̃ denote the gradients at the pretrained and adapted points. Under full-rank factors, an active constraint, a positive multiplier, and suitable spectral separation, we prove a Wedin-type bound: the alignment error is at most βc/δr(G,G̃), where β is the gradient-Lipschitz constant and c is the update budget. If βc &lt; γG/4, this is bounded by 4βc/(3γG) relative to the pretrained gradient. Globally smooth constructions, including a convex one, attain the same asymptotic order. For r=1, exact alignment can fail outside this perturbative regime at a genuine factorized second-order stationary point. The results concern stationary-point geometry, not algorithmic convergence.</p>
            </div>
            <ul className={styles.projectBullets}>
              <li>Proved a Wedin-type alignment bound for asymmetric low-rank updates under a Frobenius-norm constraint, connecting LoRA-style adaptation to singular-subspace geometry.</li>
              <li>Showed that factorized second-order stationarity selects the leading r singular subspaces of the gradient exactly under the affine linearization.</li>
              <li>Established that for r=1, exact alignment can fail outside the perturbative regime at a genuine factorized second-order stationary point.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://doi.org/10.5281/zenodo.22845046" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Zenodo Preprint &rarr;
              </a>
            </div>
          </motion.div>

          {/* ── Paper 4: Assertion and Argument (Camus) ── */}
          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>PREPRINT · PHILOSOPHY</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>Assertion and Argument: Reexamining Happiness in Camus&apos;s The Myth of Sisyphus</h2>
            <p className={styles.projectAuthor}>Arnav Gupta · Independent Researcher · PhilPapers, 2026</p>
            <p className={styles.projectDescription}>A critical analysis of whether Camus substantiates or merely posits the conclusion that one must imagine Sisyphus happy.</p>
            <div className={styles.abstractBlock}>
              <h3 className={styles.abstractTitle}>Abstract</h3>
              <p>Albert Camus&apos;s The Myth of Sisyphus culminates in its most frequently cited assertion: &ldquo;One must imagine Sisyphus happy.&rdquo; This paper critically evaluates whether the essay substantiates this conclusion or merely posits it. Camus introduces the concept of philosophical suicide — a leap wherein a thinker, having reached the boundaries of reason, transcends these limits to arrive at an unconditioned conclusion, thereby compromising the clarity demanded by the absurd. He identifies this phenomenon in the works of Kierkegaard, Chestov, and Husserl. This paper contends that a similar structure is evident in Camus&apos;s own conclusion, as it transitions from Sisyphus&apos;s acceptance of his fate to his proclaimed happiness. Following an analysis of Camus&apos;s definition of philosophical suicide and a thorough examination of the argument developed in the essay&apos;s central sections, the paper scrutinizes specific instances in the final chapter where the essay&apos;s assertive confidence exceeds what has been demonstrated. Subsequently, it considers the most robust defenses of the conclusion and argues that neither adequately bridges the identified gap. While the essay&apos;s diagnosis of the absurd remains compelling, its concluding line performs the very evasion Camus critiques elsewhere.</p>
            </div>
            <ul className={styles.projectBullets}>
              <li>Argues that Camus&apos;s own conclusion in The Myth of Sisyphus enacts the very &ldquo;philosophical suicide&rdquo; he critiques in Kierkegaard, Chestov, and Husserl.</li>
              <li>Identifies the specific inferential gap between Sisyphus&apos;s acceptance of fate and his proclaimed happiness, unaddressed by the essay&apos;s two strongest defenses.</li>
              <li>Affirms the diagnosis of the absurd while contending that the essay&apos;s concluding line exceeds what its own argument can demonstrate.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://philpapers.org/rec/GUPAAA-3" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View on PhilPapers &rarr;
              </a>
            </div>
          </motion.div>
          
          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>PREPRINT</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>Verifier Exploitation in NLI-Guided Iterative Refinement</h2>
            <p className={styles.projectAuthor}>Arnav Gupta · Independent Researcher, Nepal · Research Square, 2026</p>
            <p className={styles.projectDescription}>A Controlled Empirical Analysis.</p>
            <div className={styles.abstractBlock}>
              <h3 className={styles.abstractTitle}>Abstract</h3>
              <p>Verifier exploitation, the pathology whereby a system satisfies its auditing metric while degrading the property it was meant to measure, has been documented in gradient-based and selection-based systems. We show that neither condition is necessary. Using AnchorSum, a modular training-free multi-document summarization pipeline with fully separable auditor, feedback signal, and revision mechanism, we demonstrate through zero-gradient, prompt-only sequential revision that a single proxy metric guiding iterative refinement can be exploited even when no parameters update, no gradient flows, and no parallel sampling occurs.</p>
              <p>A second revision cycle, with weights frozen throughout, inflates SummaCConv by +0.185 while collapsing BARTScore_s→d by −2.566 nats at less than 0.4% length change. The Wilcoxon statistic is exactly W = 0 (p = 2.68 × 10⁻⁸³): every one of 498 instances degraded. The mechanism is truncation-exploiting content removal, in which revision strips source-grounded content that lies outside the NLI auditor's 512-token attention boundary, exchanging absent classifications for neutral ones. A non-NLI faithfulness signal (AlignScore, Δ &lt; 0.001) confirms the NLI gain does not transfer across evaluation frameworks, the decisive diagnostic distinguishing exploitation from genuine improvement.</p>
              <p>We formalize a three-condition annotation-free detection protocol (large NLI-metric inflation; cross-framework non-transfer; universal generative log-probability degradation) for any NLI-guided refinement pipeline, requiring no human annotation and no model-internal access. Under a single revision cycle, where exploitation has not yet emerged, AnchorSum reduces SummaCConv inconsistency by 6.3% relative to its unaugmented base (p = 4.49 × 10⁻²⁸) and outperforms fine-tuned baselines on every dimension in a dual-judge evaluation. The implication is architectural: verifier exploitation is a property of feedback structure, not optimization mechanism; any single-metric iterative refinement pipeline is at structural risk whenever that metric carries an exploitable architectural limitation.</p>
            </div>
            <ul className={styles.projectBullets}>
              <li>First controlled empirical documentation of verifier exploitation in zero-gradient, prompt-only iterative refinement.</li>
              <li>Identified truncation-exploiting content removal as the exploitation mechanism; formalized an annotation-free detection protocol.</li>
              <li>AnchorSum achieves a 6.3% relative SummaCConv inconsistency reduction over 498 Multi-News instances.</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://doi.org/10.21203/rs.3.rs-10187492/v1" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View Research Square Preprint &rarr;
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.projectCard} variants={fadeUpVariant}>
            <div className={styles.projectHeader}>
              <span className={styles.projectType}>PREPRINT</span>
              <span className={styles.projectYear}>2026</span>
            </div>
            <h2 className={styles.projectTitle}>The Geometry of Saturation: Effective Rank Predicts When Labels Stop Helping in Few-Shot Classification</h2>
            <p className={styles.projectAuthor}>Arnav Gupta · Independent Researcher, Nepal · arXiv, 2026 (v2)</p>
            <p className={styles.projectDescription}>A label-free stopping rule for few-shot label acquisition, grounded in the spectral geometry of learned representations.</p>
            <div className={styles.abstractBlock}>
              <h3 className={styles.abstractTitle}>Abstract</h3>
              <p>Few-shot label acquisition lacks a label-free signal for when additional labels cease to improve accuracy. Existing stopping criteria either require a held-out validation set (violating the few-shot premise) or rely on heuristic proxies with no theoretical grounding. We introduce the spectral saturation index S(K) = erank(Σ̂⁽ᴷ⁾_W)/K, where erank is the exponential spectral entropy of the pooled within-class covariance and K is the per-class support size. S(K) measures the exploration rate per label; when the explored spectral subspace saturates, S(K) drops below a fixed threshold τ = 0.02 and marginal accuracy gains vanish. Across 49 real tasks (binary, 5-way, 10-way) and three frozen backbones (PCA-50, CLIP ViT-B/32, DINOv2 ViT-S/14), S(K) correlates strongly with the marginal gain on doubling the support set (ρpool = 0.6366, p = 2.9 × 10⁻⁵⁷, cluster-bootstrap 95% CI [0.551, 0.720]). A fixed τ = 0.02 classifies stop/continue decisions with cluster-bootstrap AUC = 0.787 [95% CI: 0.713, 0.860] and achieves high recall on meaningful gains (∆A &gt; 1%). A partial correlation controlling for log K yields ρpartial = 0.324 (p = 1.65 × 10⁻¹³), confirming S(K) carries spectral information beyond the shared K-dependence. Theory predicts this from first principles: the population effective rank sets the saturation scale Ksat ≈ erank(Σ_W)/τ; τ = 0.02 sits at the boundary between the first and second descent (Nakkiran et al., 2021); and the O(1/K) bias in sample effective rank explains the small-K hump in S(K). For practitioners using unregularized linear probes (C = ∞): halt when S(K) &lt; 0.02 (PCA-50, hard stop); monitor S(K) dropping from ∼ 0.3 → 0.05 (foundation models, diminishing-returns signal). Computation is ∼ 1 ms at d = 50.</p>
            </div>
            <ul className={styles.projectBullets}>
              <li>Introduced the label-free spectral saturation index S(K) = erank(Σ̂⁽ᴷ⁾_W)/K — measures the exploration rate per label; drops below τ = 0.02 when spectral saturation is reached and marginal accuracy gains vanish.</li>
              <li>Validated across 49 real tasks (binary, 5-way, 10-way) and three frozen backbones (PCA-50, CLIP ViT-B/32, DINOv2 ViT-S/14) — pooled Spearman ρ = 0.6366 (p = 2.9 × 10⁻⁵⁷, cluster-bootstrap 95% CI [0.551, 0.720]).</li>
              <li>Fixed threshold τ = 0.02 achieves cluster-bootstrap AUC = 0.787 [95% CI: 0.713, 0.860] with 100% recall on meaningful gains (∆A &gt; 1%).</li>
              <li>Proved two-sided bounds on saturation point: Ksat(τ) ∈ [(1 ± ε)r/τ]; established O(1/K) bias theory explaining the small-K hump in S(K).</li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="https://doi.org/10.48550/arXiv.2606.24903" target="_blank" rel="noreferrer" className={styles.projectLink}>
                View arXiv Preprint &rarr;
              </a>
            </div>
          </motion.div>

        </motion.div>
      </motion.section>
    </main>
  );
}
