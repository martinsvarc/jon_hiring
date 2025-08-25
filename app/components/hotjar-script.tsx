"use client"

import { useEffect } from "react"

export default function HotjarScript() {
  useEffect(() => {
    // Simple Hotjar implementation for Mexico
    const hotjarId = "YOUR_HOTJAR_ID" // Replace with actual Hotjar ID
    
    if (typeof window !== "undefined" && hotjarId !== "YOUR_HOTJAR_ID") {
      // Hotjar tracking code
      ;(function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
        h.hj = h.hj || function() {
          (h.hj.q = h.hj.q || []).push(arguments)
        }
        h._hjSettings = { hjid: hotjarId, hjsv: 6 }
        a = o.getElementsByTagName('head')[0]
        r = o.createElement('script')
        r.async = 1
        r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
        a.appendChild(r)
      })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=')
    }
  }, [])

  return null
}
