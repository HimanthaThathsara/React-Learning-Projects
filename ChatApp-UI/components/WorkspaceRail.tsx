
import React from 'react';

const WorkspaceRail: React.FC = () => {
  return (
    <div className="flex flex-col items-center flex-shrink-0 w-16 border-r border-gray-300 bg-gray-200 py-3 gap-4">
      <button className="w-10 h-10 rounded-lg bg-gray-400 hover:bg-gray-500 transition-colors" title="Rivendell"></button>
      <button className="w-10 h-10 rounded-lg bg-gray-400 shadow-outline border-4 border-gray-200" title="The Shire"></button>
      <button className="relative w-10 h-10 rounded-lg bg-gray-400 hover:bg-gray-500 transition-colors" title="Gondor">
        <span className="absolute w-3 h-3 rounded-full bg-blue-400 top-0 right-0 -mt-1 -mr-1 animate-pulse"></span>
      </button>
      <button className="w-10 h-10 rounded-lg bg-gray-400 hover:bg-gray-500 transition-colors" title="Rohan"></button>
      <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent hover:bg-gray-400 transition-colors">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
        </svg>
      </button>
    </div>
  );
};

export default WorkspaceRail;
