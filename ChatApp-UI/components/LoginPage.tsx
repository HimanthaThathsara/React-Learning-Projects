
import React, { useState } from 'react';

interface LoginPageProps {
  onLogin: () => void;
  onNavigateToSignUp: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigateToSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    onLogin();
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-[#1a1d21] transition-colors duration-200 w-full`}>
      <div className="w-full max-w-md bg-white dark:bg-[#222529] rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-8 pt-8 pb-6 text-center">
          <div className="mx-auto w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
            <span className="material-icons text-blue-600 text-2xl">chat_bubble</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Enter your details to access your workspace.</p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="email">Email address</label>
            <div className="relative">
              <input 
                className="block w-full px-3 py-2.5 bg-white dark:bg-[#1a1d21] border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow sm:text-sm" 
                id="email" 
                name="email" 
                placeholder="name@company.com" 
                required 
                type="email"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="material-icons text-gray-400 text-lg">mail_outline</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
              <a className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">Forgot password?</a>
            </div>
            <div className="relative">
              <input 
                className="block w-full px-3 py-2.5 bg-white dark:bg-[#1a1d21] border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow sm:text-sm" 
                id="password" 
                name="password" 
                placeholder="••••••••" 
                required 
                type={showPassword ? "text" : "password"}
              />
              <button 
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-icons text-lg">{showPassword ? 'visibility' : 'visibility_off'}</span>
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-[#1a1d21] dark:border-gray-600" id="remember-me" name="remember-me" type="checkbox"/>
            <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300" htmlFor="remember-me">
              Keep me logged in
            </label>
          </div>

          <button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 dark:ring-offset-[#222529]" type="submit">
            Sign in
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-[#222529] text-gray-500 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-[#1a1d21] text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors dark:ring-offset-[#222529]" type="button">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
              </svg>
              Google
            </button>
            <button className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-[#1a1d21] text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors dark:ring-offset-[#222529]" type="button">
              <svg className="h-5 w-5 mr-2 text-black dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              GitHub
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
            Don't have an account? 
            <button onClick={onNavigateToSignUp} className="font-medium text-blue-600 hover:text-blue-700 transition-colors ml-1">Sign up for free</button>
          </p>
        </form>

        <div className="px-8 py-4 bg-gray-50 dark:bg-[#1f2226] border-t border-gray-200 dark:border-gray-700 flex items-center justify-center space-x-2">
          <span className="material-icons text-gray-400 text-sm">lock</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Secure, encrypted connection</span>
        </div>
      </div>

      <div className="fixed top-4 right-4">
        <button 
          className="p-2 bg-white dark:bg-[#222529] border border-gray-200 dark:border-gray-700 rounded-full shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" 
          onClick={toggleDarkMode}
        >
          <span className="material-icons dark:hidden">dark_mode</span>
          <span className="material-icons hidden dark:block">light_mode</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
