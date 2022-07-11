import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    
  },
  maintainAspectRatio:false
};



export function Linechart({props}) {
  const labels = [];
  for(let i in props)
  {
    labels.push(i);
  }
 const data = {
  labels,
  datasets: [
    {
      label: '# of results',
      data: labels.map((e) =>{ return props[e]}),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
  ],
};
  return <Line width={"60%"}options={options} data={data} />;
}