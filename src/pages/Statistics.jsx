import React from 'react'
import Nabvar from '../components/Nabvar'
import { BarChart, Bar,XAxis, YAxis,Tooltip,CartesianGrid } from 'recharts';
import { Helmet } from 'react-helmet';
import StatisticsText from '../components/StatisticsText';

export default function Statistics() {
  const productData = [
    { name: "Product A", price: 120, rating: 4.2 },
    { name: "Product B", price: 250, rating: 3.5 },
    { name: "Product C", price: 180, rating: 4.8 },
    { name: "Product D", price: 300, rating: 4.0 },
    { name: "Product E", price: 210, rating: 3.8 },
    { name: "Product F", price: 160, rating: 4.5 },
    { name: "Product G", price: 230, rating: 3.9 }
  ];
  
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div>
      <Nabvar />
      </div>
      <div>
        <StatisticsText />
      </div>
   <div className=' ml- mt-10 shadow-lg bg-purple-50 p-3  rounded-md '>
 <div className='ml-44 font-semibold'>
 <BarChart width={750} height={350} data={productData} fill="#8884d8" barSize={40}>
      <XAxis  dataKey="name"/>
      <YAxis dataKey="price" />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="price"></Bar>
    </BarChart>
 </div>
   </div>
    </div>
  )
}
