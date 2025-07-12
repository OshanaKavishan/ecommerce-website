import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-100/20 to-yellow-100/20 rounded-full blur-3xl pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 space-y-16">
        {/* Hero Section with enhanced container */}
        <div className="transform transition-all duration-700 hover:scale-[1.001]">
          <Hero />
        </div>
        
        {/* Latest Collection with modern card styling */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm pointer-events-none" />
          <div className="relative backdrop-blur-sm bg-white/30 rounded-3xl mx-4 md:mx-8 p-6 md:p-12 shadow-xl border border-white/20">
            <LatestCollection />
          </div>
        </div>
        
        {/* Best Seller with glassmorphism effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-50/50 to-transparent blur-sm pointer-events-none" />
          <div className="relative backdrop-blur-sm bg-gradient-to-r from-white/40 to-slate-50/40 rounded-3xl mx-4 md:mx-8 p-6 md:p-12 shadow-2xl border border-white/30">
            <BestSeller />
          </div>
        </div>
        
        {/* Our Policy with modern styling */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-white/30 to-purple-50/20 blur-sm pointer-events-none" />
          <div className="relative backdrop-blur-sm bg-white/50 rounded-3xl mx-4 md:mx-8 p-6 md:p-12 shadow-xl border border-white/40">
            <OurPolicy />
          </div>
        </div>
        
        {/* Newsletter with enhanced styling */}
        <div className="relative pb-16">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-100/30 to-transparent blur-sm pointer-events-none" />
          <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/60 to-slate-50/60 rounded-3xl mx-4 md:mx-8 p-6 md:p-12 shadow-2xl border border-white/50">
            <NewsLetterBox />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </div>
  )
}

export default Home