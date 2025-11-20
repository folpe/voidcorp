"use client"

import { useEffect, useState } from "react"

export function CosmicBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0">
      <div
        className="absolute h-[800px] w-[800px] rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(236,72,153,0.3) 50%, rgba(59,130,246,0.2) 100%)",
          left: `${mousePosition.x - 400}px`,
          top: `${mousePosition.y - 400}px`,
          transition: "left 0.8s ease-out, top 0.8s ease-out",
        }}
      />
    </div>
  )
}
