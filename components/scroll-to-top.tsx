"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-2xl bg-gradient-to-r from-[#a1d8e2] to-[#68a9cf] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 focus:outline-none group"
          aria-label="ページトップへ戻る"
        >
          <ChevronUp className="h-6 w-6 mx-auto group-hover:animate-bounce" />
        </button>
      )}
    </>
  )
}
