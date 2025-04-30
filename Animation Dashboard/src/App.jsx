import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Card from './components/Charts/Card';
import ACandDC from './components/Charts/AC&DC';



const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <main className='p-4 w-full md:p-6 space-y-4 h-[calc(99vh-var(--h-nav))] overflow-y-auto'>
          
          <div className='space-y-4 columns-2 sm:columns-4 lg:columns-4'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div className='space-y-4 columns-1 sm:columns-1 lg:columns-1'>
            <ACandDC />
          </div>

          <div className='space-y-4 columns-2 sm:columns-1 lg:columns-2'>

          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;