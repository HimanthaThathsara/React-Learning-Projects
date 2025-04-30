import {ArrowDownIcon} from 'lucide-react';
import { LineChart, Line } from 'recharts';
// import {  AreaChart, Area } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default function Card() {

  return (
  <div className="break-inside-avoid-column space-y-4">
    <div className="border border-gray-400 w-full p-3 rounded-lg">

      <div className="flex items-center justify-between">

        <div className="flex items-center text-sm gap-2">
          {/* Svg */}
          <p className="text-gray-800 font-medium">Course Progress</p>
        </div>

        <button className="border border-gray-400 px-2 py-1 rounded-lg text-xs text-gray-600">See all</button>

      </div>

        <hr className="text-gray-400 my-4"/>  

      <div>
        <div className="flex justify-between">

          <div>
            <p className="text-[30px] text-gray-800 text-left">120v</p>
            <div className="flex items-center gap-1">
              <span className="text-sm text-gray-500 pl-1">Since last week</span>
              <div className= 'flex items-center text-red-500'>
                <ArrowDownIcon size={16} />
                <span className="text-sm font-medium">67%</span>
              </div>
            </div>
          </div>

          <div>
            <LineChart width={100} height={50} data={data}>
              <Line dataKey="uv" stroke="#82ca9d"  dot={false} strokeWidth={1.5}/>
            </LineChart>

            {/* <AreaChart width={100} height={50} data={data} >
                  <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart> */}
          </div>

        </div>
      </div>

    </div>
  </div>
  );
}
