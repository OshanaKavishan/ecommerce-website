import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const {products , search , showSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=>prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  } 

  const applyFilter = () => {

    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {

    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }

  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      
      <div className="relative z-10 flex flex-col sm:flex-row gap-4 sm:gap-8 pt-16 px-4 md:px-8">
        
        {/* Filter Sidebar */}
        <div className="min-w-64 relative">
          <div className="sticky top-24">
            <div className="backdrop-blur-sm bg-white/60 rounded-2xl p-6 shadow-xl border border-white/30">
              
              {/* Filter Header */}
              <div 
                onClick={() => setShowFilter(!showFilter)} 
                className="flex items-center justify-between cursor-pointer group mb-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
                  FILTERS
                </h2>
                <div className="sm:hidden">
                  <img 
                    className={`h-3 transform transition-all duration-300 ${showFilter ? 'rotate-90' : ''} group-hover:scale-110`} 
                    src={assets.dropdown_icon} 
                    alt="Toggle filters" 
                  />
                </div>
              </div>

              {/* Categories Filter */}
              <div className={`${showFilter ? 'block' : 'hidden'} sm:block space-y-4`}>
                <div className="bg-gradient-to-r from-slate-100/50 to-blue-100/50 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-white/30">
                  <p className="mb-4 text-sm font-semibold text-gray-700 uppercase tracking-wide">Categories</p>
                  <div className="space-y-3">
                    {['Men', 'Women', 'Kids'].map((cat) => (
                      <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative">
                          <input 
                            className="sr-only" 
                            type="checkbox" 
                            value={cat} 
                            onChange={toggleCategory}
                          />
                          <div className="w-4 h-4 rounded-md border-2 border-gray-300 group-hover:border-blue-400 transition-colors duration-200 bg-white">
                            <div className="hidden group-has-[:checked]:block w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm m-0.5"></div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type Filter */}
                <div className="bg-gradient-to-r from-green-100/50 to-blue-100/50 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-white/30">
                  <p className="mb-4 text-sm font-semibold text-gray-700 uppercase tracking-wide">Type</p>
                  <div className="space-y-3">
                    {['Topwear', 'Bottomwear', 'Winterwear'].map((type) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative">
                          <input 
                            className="sr-only" 
                            type="checkbox" 
                            value={type} 
                            onChange={toggleSubCategory}
                          />
                          <div className="w-4 h-4 rounded-md border-2 border-gray-300 group-hover:border-green-400 transition-colors duration-200 bg-white">
                            <div className="hidden group-has-[:checked]:block w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-sm m-0.5"></div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex-1 relative">
          <div className="backdrop-blur-sm bg-white/40 rounded-2xl p-6 md:p-8 shadow-xl border border-white/30">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="transform transition-all duration-500 hover:scale-105">
                <Title text1={'ALL'} text2={'COLLECTIONS'}/>
              </div>
              
              {/* Sort Dropdown */}
              <div className="relative">
                <select 
                  onChange={(e) => setSortType(e.target.value)} 
                  className="appearance-none bg-white/70 backdrop-blur-sm border-2 border-white/50 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-gray-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
                >
                  <option value="relavent">Sort by: Relevant</option>
                  <option value="low-high">Sort by: Low to High</option>
                  <option value="high-low">Sort by: High to Low</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {filterProducts.map((item, index) => (
                <div 
                  key={index} 
                  className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                >
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/40 group-hover:shadow-2xl group-hover:bg-white/80 transition-all duration-300">
                    <ProductItem 
                      name={item.name} 
                      id={item._id} 
                      price={item.price} 
                      image={item.image}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filterProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="bg-gradient-to-r from-gray-100/50 to-slate-100/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-white/30 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No Products Found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search terms</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </div>
  )
}

export default Collection;