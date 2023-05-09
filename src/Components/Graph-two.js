import React,{useState} from 'react'
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
const Graphtwo = () => {
    const [data, setData]= useState({
        labels:["Jan","Feb", "March", "April", "May", "June", "July", "August", "September", "Oct", "Nov", "Dec"],
        datasets:[
          {
            label:"First Dataset",
            data:[10, 20, 30, 42, 51, 82, 91, 159, 161, 173, 191, 200],
            
            borderColor:'green',
            tension:0.4,
           
            pointStyle:'rect',
            pointBorderColor:'blue',
            
            showLine:true
          }
        ]
      })
  return (
    <div className='graph'>
         <Line data={data}>Hello</Line>
    </div>
  )
}

export default Graphtwo
