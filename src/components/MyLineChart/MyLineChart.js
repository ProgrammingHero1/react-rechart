import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'Supplier A',
          price: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'Supplier B',
          price: 3000,
          sales: 1398,
          amt: 2210,
        },
        {
          name: 'Supplier C',
          price: 2000,
          sales: 9800,
          amt: 2290,
        },
        {
          name: 'Supplier D',
          price: 2780,
          sales: 3908,
          amt: 2000,
        },
        {
          name: 'Supplier E',
          price: 1890,
          sales: 4800,
          amt: 2181,
        },
        {
          name: 'Supplier F',
          price: 2390,
          sales: 3800,
          amt: 2500,
        },
        {
          name: 'Supplier G',
          price: 3490,
          sales: 4300,
          amt: 2100,
        },
      ];
    return (
        <LineChart width={800} height={500} data={data}>
            <Line dataKey={'price'}></Line>
            <Line dataKey={'sales'}></Line>
            <XAxis dataKey="name"></XAxis>
            <Tooltip />
            <YAxis></YAxis>
        </LineChart>
    );
};

export default MyLineChart;