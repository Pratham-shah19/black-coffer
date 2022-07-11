import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



export function Radarchart({props}) {
  const labels = [];
  for(let e in props)
  {
    labels.push(e);
  }
  const data = {
    labels: labels,
    datasets: [
      {
        label: '# of results',
        data: labels.map((e)=>{return props[e]}),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  return <Radar data={data}  options={{ maintainAspectRatio: false }} />;
}
