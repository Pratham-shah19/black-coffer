import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useStateValue } from './StateProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  maintainAspectRation:false
};

export function Barchart({topics}) {
  
  
  const labels = [];
  for(let i in topics)
  {
    labels.push(i);
  }
  const data={
    labels,
    datasets: [
      {
        label: '# of results',
        data: labels.map((e) =>{ return topics[e]}),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      
    ],
  };
  return <Bar options={options} width={"60%"} data={data} options={{maintainAspectRatio:false}} />;
}