"use client"

import Image from "next/image"
import Head from "next/head"

export default function WeAppreciateYouPage() {
  return (
    <>
      <Head>
                      <title>Thank you | Jon McPherson</title>
        <meta name="description" content="Thank you for your interest in Jon McPherson" />
      </Head>
      
      <div className="min-h-screen" style={{
        background: "linear-gradient(135deg, rgb(var(--obsidian)) 0%, rgb(var(--charcoal)) 100%)"
      }}>


        <main className="w-full max-w-5xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            
            {/* GIF Section */}
            <div className="mb-8 md:mb-12">
              <div className="relative">
                <iframe 
                  src="https://giphy.com/embed/VbnUQpnihPSIgIXuZv" 
                  width="384" 
                  height="480" 
                  style={{ border: 'none' }} 
                  frameBorder="0" 
                  className="giphy-embed rounded-xl shadow-lg max-w-[400px] w-full h-auto" 
                  allowFullScreen
                  title="Thank you animation"
                />
              </div>
            </div>

            {/* Text Content Section */}
            <div className="text-center max-w-2xl mx-auto">
              <div className="space-y-6 text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Thank you for your interest! 💫
                </h1>
                
                <p className="text-lg sm:text-xl leading-relaxed text-white/90">
                  Your application has been received and we will review it carefully.
                </p>
                
                <p className="text-base sm:text-lg leading-relaxed text-white/80">
                  If we see potential in you, we will contact you as soon as possible with next steps.
                </p>
                
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
} 