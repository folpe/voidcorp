"use client"

import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations()

  return (
    <footer className="relative border-t border-gray-800/50 px-8 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  )
}
