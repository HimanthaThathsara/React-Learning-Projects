
function MainTop() {

  return (
    <>
          <div className="flex w-full items-center">

            <div className="flex items-center text-3xl text-gray-900 dark:text-white">
              <img src="https://assets.codepen.io/344846/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1582611188&width=512" className="w-12 mr-4 rounded-full" alt="profile" />
              Mert Cukuren
            </div>

            <div className="ml-auto sm:flex hidden items-center justify-end">

              <div className="text-right">
                <div className="text-xs text-gray-400 dark:text-gray-400">Account balance:</div>
                <div className="text-gray-900 text-lg dark:text-white">$2,794.00</div>
              </div>

              <button className="w-8 h-8 ml-4 text-gray-400 shadow dark:text-gray-400 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <svg viewBox="0 0 24 24" className="w-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>

            </div>

          </div>
    </>
  )
}

export default MainTop