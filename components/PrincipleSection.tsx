"use client"

import { Eye, Hammer, Pen } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export function PrincipleSection() {
  const t = useTranslations()

  return (
    <section className="relative px-8 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="font-heading mb-4 text-4xl">{t("principle.title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {/* Observe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <div className="mb-6 inline-block">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-violet-500/30 bg-gradient-to-br from-violet-600/20 to-violet-600/5 transition-all duration-500 group-hover:border-violet-400/50">
                <Eye className="h-10 w-10 text-violet-400" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-2xl">{t("principle.observe.title")}</h3>
            <p className="leading-relaxed text-gray-400/90">{t("principle.observe.description")}</p>
          </motion.div>

          {/* Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <div className="mb-6 inline-block">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-600/20 to-fuchsia-600/5 transition-all duration-500 group-hover:border-fuchsia-400/50">
                <Pen className="h-10 w-10 text-fuchsia-400" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-2xl">{t("principle.design.title")}</h3>
            <p className="leading-relaxed text-gray-400/90">{t("principle.design.description")}</p>
          </motion.div>

          {/* Forge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group text-center"
          >
            <div className="mb-6 inline-block">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/30 bg-gradient-to-br from-blue-600/20 to-blue-600/5 transition-all duration-500 group-hover:border-blue-400/50">
                <Hammer className="h-10 w-10 text-blue-400" strokeWidth={1.5} />
              </div>
            </div>
            <h3 className="font-heading mb-3 text-2xl">{t("principle.forge.title")}</h3>
            <p className="leading-relaxed text-gray-400/90">{t("principle.forge.description")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
