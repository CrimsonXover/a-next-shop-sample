"use client";

import { motion } from "framer-motion";

const features = [
  "Fast Performance",
  "SEO Optimized",
  "Fully Responsive",
];

export default function Features() {
  return (
    <section style={styles.section}>
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          style={styles.card}
        >
          {feature}
        </motion.div>
      ))}
    </section>
  );
}

const styles = {
  section: {
    padding: "80px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "30px",
    borderRadius: "12px",
    background: "#f5f5f5",
    textAlign: "center",
  },
};
