import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center pt-16 pb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm pointer-events-none" />
          <div className="relative backdrop-blur-sm bg-white/30 rounded-3xl mx-4 md:mx-8 py-12 shadow-xl border border-white/20">
            <div className="border-t border-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />
            <div className="transform transition-all duration-500 hover:scale-105">
              <Title text1={'CONTACT'} text2={'US'}/>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="my-16 px-4 md:px-8">
          <div className="backdrop-blur-sm bg-white/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/30 max-w-7xl mx-auto">
            <div className="flex flex-col justify-center md:flex-row gap-12 lg:gap-16">
              
              {/* Image Section */}
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <img 
                    className="w-full md:max-w-[480px] h-auto object-cover" 
                    src={assets.contact_img} 
                    alt="Contact Us" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 flex flex-col justify-center items-start gap-8">
                <div className="space-y-6">
                  {/* Store Info */}
                  <div className="group transform transition-all duration-300 hover:translate-x-2">
                    <div className="bg-gradient-to-r from-slate-100/50 to-blue-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
                      <p className="font-semibold text-xl text-gray-700 mb-3 flex items-center gap-3">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
                        Our Store
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        46545 willms Street <br /> 
                        Kandy, Matale, SRI LANKA
                      </p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="group transform transition-all duration-300 hover:translate-x-2">
                    <div className="bg-gradient-to-r from-green-100/50 to-blue-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
                      <p className="text-gray-600 leading-relaxed">
                        <span className="font-medium text-gray-700">Tel:</span> 094 123 1485 <br /> 
                        <span className="font-medium text-gray-700">Email:</span> admin@aravindusoysa.com
                      </p>
                    </div>
                  </div>

                  {/* Careers Section */}
                  <div className="group transform transition-all duration-300 hover:translate-x-2">
                    <div className="bg-gradient-to-r from-purple-100/50 to-pink-100/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/30">
                      <p className="font-semibold text-xl text-gray-700 mb-3 flex items-center gap-3">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></span>
                        Careers at Forever
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Learn more about our teams and job openings
                      </p>
                      
                      {/* Enhanced Button */}
                      <button className="relative group/btn overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl font-medium shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95">
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative flex items-center gap-2">
                          Explore Jobs
                          <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                      </button>
                    </div>
                  </div>
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

export default Contact;