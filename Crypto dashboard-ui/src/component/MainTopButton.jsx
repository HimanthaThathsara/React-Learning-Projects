
function TopButton() {

  return (
    <>
          <div className="flex items-center space-x-3 sm:mt-7 mt-4">
            <a href="#" className="px-3 border-b-2 border-blue-500 text-blue-500 dark:text-white dark:border-white pb-1.5">Activities</a>
            <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5">Transfer</a>
            <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Budgets</a>
            <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Notifications</a>
            <a href="#" className="px-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 pb-1.5 sm:block hidden">Cards</a>
          </div>
    </>
  )
}

export default TopButton