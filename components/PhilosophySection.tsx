"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export function PhilosophySection() {
  const t = useTranslations()

  return (
    <section className="relative px-8 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8 inline-block rounded-full border border-violet-500/30 px-4 py-1">
            <span className="text-xs tracking-widest text-violet-300/80 uppercase">{t("manifesto.badge")}</span>
          </div>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300/90">
            {t("manifesto.textBefore")}
            <span className="text-violet-300">{t("manifesto.structuredEmptiness")}</span>
            {t("manifesto.textAfter")}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
