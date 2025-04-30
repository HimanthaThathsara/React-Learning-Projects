import { Search, BellDot, GalleryVerticalEnd, Plus } from 'lucide-react'; 

const Header = () => {
    return (
         <div className='sticky top-0 z-50 bg-white'>
                <div className="h-[var(--h-nav)] flex p-4 md:p-6 text-gray-500 justify-between items-center">
                        {/* USER name and Welcome Message */}
                        <div className="flex items-center justify-between gap-2 h-10">
                                {/* User Profile Image */}
                                <img alt="User" width="40" height="40" className="rounded-full"  src="/vite.svg" />
                                        {/* User name */}
                                        <div className="">
                                                <p className="text-sm font-semibold text-gray-800">Max paney</p>
                                                <p className="text-xs font-medium text-gray-500">Welcome back</p>
                                        </div>
                        </div>

                        <div className="text-gray-500 hidden md:flex gap-2">

                                <button className="h-8 w-8 duration-200 hover:text-gray-700">
                                        <Search size={16} />
                                </button>

                                <button className="h-8 w-8 duration-200 hover:text-gray-700">
                                        <BellDot size={16} />
                                </button>

                                <button className="h-8 gap-1 bg-black py-1 px-2 duration-200 text-white rounded-lg text-xs md:flex items-center justify-center">
                                        <GalleryVerticalEnd size={16} />
                                        <span className="hidden md:inline">Select</span>
                                </button>

                                <button className="h-8 gap-1 bg-black py-1 px-2 duration-200 text-white rounded-lg text-xs md:flex items-center justify-center">
                                        <Plus size={16} />
                                        <span className="md:inline">Create request Point</span>
                                </button>

                        </div>

                        <button className=" text-gray-500 h-8 w-8 md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M21.97 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7ZM7.97 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M14.97 9.44 12.41 12l2.56 2.56" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                        </button>
                </div>

                <hr className='text-gray-400 mx-2'/> 
         </div>
    );
};

export default Header;