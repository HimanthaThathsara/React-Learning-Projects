
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data2 = [
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

const ACandDC = () => {
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
        <div className='mb-10 ml-8'>
          <div className="flex gap-8 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-600  ">
                {/* AC SVG */}
              </div>
              <span className="text-sm font-semibold">Total Revenue</span>
              <span className="font-semibold">$32,839.99</span>
              <span className="text-sm text-gray-500">• 55%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <span className="text-sm">Total Target</span>
              <span className="font-semibold">$30,932.12</span>
              <span className="text-sm text-gray-500">• 45%</span>
            </div>
          </div>
        </div>

        <LineChart
          width={1200}
          height={400}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>

    </div>
  </div>
  );
};

export default ACandDC;