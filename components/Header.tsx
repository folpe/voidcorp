"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useTranslations } from "next-intl"

import logo from "assets/VoidCorp-hor-dark.png"
import { LanguageSwitcher } from "components/LanguageSwitcher"

export function Header() {
  const t = useTranslations()

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 bg-[#05030a]/50 px-8 py-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex-1" />
        <div className="relative h-20 w-[750px]">
          <Image src={logo} alt={t("header.logoAlt")} fill className="object-contain" />
        </div>
        <div className="flex flex-1 justify-end">
          <LanguageSwitcher />
        </div>
      </div>
    </motion.header>
  )
}
