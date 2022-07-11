import React, { useEffect, useState } from 'react';
import './Analytics.css'
import { Radarchart } from './Radarchart';
import { Barchart } from './Barchart';
import { Doughnutchart } from './Doughnutchart';
import Filters from './Filters';
import { useStateValue } from './StateProvider';
import { Linechart } from './Linechart';


function Analytics() {
    const [{data},dispatch] = useStateValue();
   return (

        <div className='analytics'>
            <div className='header'>
                <div><b>Analytics</b></div>
                <Filters/>
            </div>
            <div className='data-container'>
                <div className='data-row-1'>
                    <div><b>Topics</b></div>
                    <Barchart topics={data.topic} />                   
                </div>
                <div className='data-row-2'>
                  
                        <div>
                            <div><b>Intensities</b></div>
                            <Radarchart  props={data.intensity}/>
                        </div>
                        <div>
                            <div><b>Relevance</b></div>
                            <Radarchart  props={data.relevance}/>
                        </div>

        
                </div>
                <div className='data-row-3'>
                    <div>
                        <div><b>Countries</b></div>
                        <Linechart props={data.country}/>
                    </div>
                    <div>
                        <div><b>Regions</b></div>
                        <Linechart  props={data.region}/>
                    </div>
                </div>
                <div className='data-row-4'>
                    <div><b>Years</b></div>
                    <Doughnutchart props={data.end_year}/>
                </div>
            </div>
        </div>
)
}

export default Analytics;
