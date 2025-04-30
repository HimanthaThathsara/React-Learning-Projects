
import { LayoutDashboard, Cable, Battery, DatabaseZap, SquareActivity, Router, BookText, Settings , Info} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='hidden md:block'>
        <div className='w-60 shrink-0 md:block h-screen sticky top-0 overflow-hidden'>
            <div className="w-full h-full bg-white border-r border-gray-400">

                {/* Project Name and icon */}
                <div className="h-[var(--h-nav)] p-4 md:p-6 flex cursor-pointer group items-center gap-2">
                    {/* If you want add a bg-color to the this DIV */}
                    <div className="h-10 outline outline-violet-300 w-10 flex items-center justify-center rounded-full from-violet-500 to-violet-400 text-white">
                        {/* Project Logo Add SVG or IMAGE ,  Also Add Those VALES  */}
                        {/* className="relative group-hover:scale-75 duration-200" 
                            width="24" height="24" 
                            viewBox="0 0 24 24" fill="none"
                        */}
                        <img alt="Icon" width="24" height="24" className="rounded-full"  src="/vite.svg" />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-gray-800">Max</h1>
                        <p className="text-xs text-gray-500 font-medium">Network Admin</p>
                    </div>
                </div>

                <hr className="text-gray-400 mx-2"></hr>

                <div className="flex flex-col h-full justify-between">

                    <div className="pt-6 text-gray-500 font-medium space-y-2 md:px-2 text-xs">
                        <a className="flex text-primary hover:px-8 duration-200 px-6 py-2 items-center gap-2" href="/app/Dashboard">
                            <LayoutDashboard size={16} strokeWidth={2} />
                                Dashboard
                        </a>
                        <a className="flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2" href="/app/Currant">
                            <SquareActivity size={16} />Currant monitoring
                        </a>
                        <a className="flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2" href="/app/Generate">
                            <DatabaseZap size={16} />Generate monitoring
                        </a>
                        <a className="flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2" href="/app/Battery">
                            <Battery size={16} />Backup battery data
                        </a>
                        <a className="flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2" href="/app/powersupply">
                        <Cable size={16} />power supply
                        </a>
                        <a className="flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2" href="/app/Service">
                            <Router size={16} /> Service
                        </a>
                        <a className="flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2" href="/app/Documents">
                            <BookText size={16} /> Documents
                        </a>


                        {/* <button disabled="" className="flex  hover:px-8 disabled:opacity-60 duration-200 px-6 py-2 items-center gap-2">
                            <Plus size={16} />Add New
                        </button> */}
                    </div>

                    <div>

                        <div className="text-gray-500 text-xs font-medium md:px-2">
                            <a className="flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2" href="/app/Settings">
                                <Settings size={16} /> Settings
                            </a>
                            <a className="flex  hover:px-8 duration-200 px-6 py-2 items-center gap-2" href="/app/Support">
                                <Info size={16} /> Support
                            </a>
                        </div>

                        <hr className="text-gray-400 mx-2 my-4" />

                        <div className="flex pb-28 justify-between px-4 md:px-6 items-center cursor-pointer hover:pr-5 duration-200">
                            <div className="flex items-center gap-2">
                                <img alt="User" width="36" height="36" className="rounded-full"  src="/vite.svg" />
                                <div className="">
                                    <p className="text-sm font-semibold text-gray-800">Max Paney</p>
                                    <p className="text-xs font-medium text-gray-500">Maxpaney@gmail.com</p>
                                </div>
                            </div>
                            <button className="text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;