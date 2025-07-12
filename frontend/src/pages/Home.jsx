import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Optimized Background - Single Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20" />
      
      {/* Two Subtle Orbs Only */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/20 to-pink-100/20 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 space-y-16">
        {/* Hero Section - Clean */}
        <div className="transform transition-transform duration-500 hover:scale-[1.005]">
          <Hero />
        </div>
        
        {/* Latest Collection - Subtle Glass Effect */}
        <div className="relative group">
          <div className="backdrop-blur-sm bg-white/60 rounded-2xl mx-4 md:mx-8 p-6 md:p-12 shadow-lg border border-gray-300/40 group-hover:border-blue-400/60 group-hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <LatestCollection />
            </div>
          </div>
        </div>
        
        {/* Best Seller - Minimal Styling */}
        <div className="relative group">
          <div className="backdrop-blur-sm bg-gradient-to-r from-white/70 to-slate-50/70 rounded-2xl mx-4 md:mx-8 p-6 md:p-12 shadow-lg border border-gray-300/50 group-hover:border-blue-400/70 group-hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-l from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <BestSeller />
            </div>
          </div>
        </div>
        
        {/* Our Policy - Clean Card */}
        <div className="relative group">
          <div className="backdrop-blur-sm bg-white/80 rounded-2xl mx-4 md:mx-8 p-6 md:p-12 shadow-lg border border-gray-300/60 group-hover:border-blue-400/80 group-hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <OurPolicy />
            </div>
          </div>
        </div>
        
        {/* Newsletter - Elegant Finish */}
        <div className="relative group pb-16">
          <div className="backdrop-blur-sm bg-gradient-to-br from-white/80 to-slate-50/80 rounded-2xl mx-4 md:mx-8 p-6 md:p-12 shadow-lg border border-gray-300/70 group-hover:border-blue-400/90 group-hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <NewsLetterBox />
            </div>
          </div>
        </div>
      </div>
      
      {/* Simple Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
    </div>
  )
}

export default Home