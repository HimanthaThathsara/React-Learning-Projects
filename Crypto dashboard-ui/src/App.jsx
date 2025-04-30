import SliderBar from './component/slider'
import TopHeader from './component/TopHeader'
import Users from './component/User'
import InputFilder from './component/InputFilder'
import UserCard from './component/usercard'
import MainTop from './component/MainTop'
import TopButton from './component/MainTopButton'
import Filters from './component/Filters'
import Table from './component/Tabel'
import PageButton from './component/PageButton'

function App() {

  return (
    <>
    <div className ="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm">

     <SliderBar>
     </SliderBar>

      <div className ="flex-grow overflow-hidden h-full flex flex-col">

          <div className="h-16 lg:flex w-full border-b border-gray-200 dark:border-gray-800 hidden px-10">
            <TopHeader>          
            </TopHeader>
          </div>

          <div className="flex-grow flex overflow-x-hidden">
            <div className="xl:w-72 w-48 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 h-full overflow-y-auto lg:block hidden p-5">
              <Users></Users>
              <InputFilder></InputFilder>
              <UserCard></UserCard>
            </div>

            <div className="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
              <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full border-b border-gray-200 bg-white dark:bg-gray-900 dark:text-white dark:border-gray-800 sticky top-0">
                <MainTop></MainTop>
                <TopButton></TopButton>
              </div>
              <div className="sm:p-7 p-4">
                <Filters></Filters>
                <Table></Table>
                <PageButton></PageButton>
              </div>
            </div>
          </div>
      </div>

     </div>
    </>
  )
}

export default App
