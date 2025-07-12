import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-200/10 to-blue-200/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center pt-16 pb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm pointer-events-none" />
          <div className="relative backdrop-blur-sm bg-white/30 rounded-3xl mx-4 md:mx-8 py-12 shadow-xl border border-white/20">
            <div className="border-t border-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />
            <div className="transform transition-all duration-500 hover:scale-105">
              <Title text1={'ABOUT'} text2={'US'}/>
            </div>
          </div>
        </div>

        {/* Main Story Section */}
        <div className="px-4 md:px-8 mb-16">
          <div className="backdrop-blur-sm bg-white/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
              
              {/* Image Section */}
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <img 
                    className="w-full md:max-w-[450px] h-auto object-cover" 
                    src={assets.about_img} 
                    alt="About Forever" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center gap-8 md:w-2/4">
                <div className="space-y-6">
                  {/* Main Description */}
                  <div className="bg-gradient-to-r from-slate-100/50 to-blue-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 transform transition-all duration-300 hover:scale-102">
                    <p className="text-gray-700 leading-relaxed">
                      Welcome to Forever. 
                      Where timeless style meets everyday comfort. 
                      At Forever, we believe fashion should do more than just follow trends — it should reflect who you are. 
                      Our mission is simple: to create clothing that feels good, looks great, and lasts beyond the season. 
                      From classic staples to modern essentials, every piece in our collection is designed with attention to detail, quality craftsmanship, and a deep love for effortless style. 
                      Whether you're dressing for work, play, or everything in between, Forever has something made just for you. 
                      We're more than a brand — we're a mindset. Rooted in simplicity. Inspired by you. Built to last.
                      Wear it your way. Make it Forever.
                    </p>
                  </div>

                  {/* Brand Philosophy */}
                  <div className="bg-gradient-to-r from-green-100/50 to-blue-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 transform transition-all duration-300 hover:scale-102">
                    <p className="text-gray-700 leading-relaxed">
                      At Forever, we don't just sell clothes — we create style that moves with you.
                      Born from the idea that great fashion should be effortless, our brand is all about clean lines, bold vibes, and pieces that feel as good as they look. 
                      Whether you're dressing up, chilling out, or making a statement, Forever is here to fit your mood, your moment, and your lifestyle.
                    </p>
                  </div>

                  {/* Mission Statement */}
                  <div className="bg-gradient-to-r from-purple-100/50 to-pink-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30 transform transition-all duration-300 hover:scale-102">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></span>
                      <b className="text-gray-800 text-lg">Our Mission</b>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      At Forever, our mission is to create timeless fashion that empowers individuality, inspires confidence, and stands the test of time. We believe in crafting high-quality clothing that not only looks good but feels right — for you and for the world around you.
                      <br /><br />
                      We're here to redefine everyday style with purpose — blending modern design, comfort, and conscious choices to build a wardrobe that's made to last.
                      <br /><br />
                      <em className="text-gray-800 font-medium">Style that's yours. Quality that's forever.</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="px-4 md:px-8 mb-16">
          <div className="backdrop-blur-sm bg-white/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="transform transition-all duration-500 hover:scale-105">
                <Title text1={'WHY'} text2={'CHOOSE US'}/>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Quality Assurance */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <b className="text-gray-800 text-lg">Quality Assurance</b>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    At Forever, we stand by the quality of every stitch, fabric, and finish.
                  </p>
                </div>
              </div>

              {/* Convenience */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <b className="text-gray-800 text-lg">Convenience</b>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Premium materials. Careful craftsmanship. Quality you can trust.
                  </p>
                </div>
              </div>

              {/* Customer Service */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-yellow-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/40 transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <b className="text-gray-800 text-lg">Exceptional Customer Service</b>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    We're here to make your experience seamless, from browsing to delivery and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative pb-16">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-100/30 to-transparent blur-sm pointer-events-none" />
          <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/60 to-slate-50/60 rounded-3xl mx-4 md:mx-8 p-6 md:p-12 shadow-2xl border border-white/50">
            <NewsLetterBox/>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </div>
  )
}

export default About