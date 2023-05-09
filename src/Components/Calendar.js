import React,{useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css
import { DateRange } from 'react-date-range';
import Graph from './Graph';
const Calendar = () => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
      const [startdate, setStartdate] = useState('');
     
      const date = new Date('Mon May 08 2023 12:55:30 GMT+0530');
      console.log('iqegduigdu',date);
      var dateone= date.toISOString(date);   
     var  dateone_new=dateone.substring(0,10);
    //  var newdate_manipulation=dateone_new.getFullYear();
   
     
      console.log('this is dateone which is the ISO format',typeof dateone);
      console.log('dataone_new',dateone_new);
      var newone=parseInt(dateone_new);
       console.log('newone',newone);
      React.useEffect(() => {
        setStartdate(dateone);
      },[]);
     var date_new=Number(dateone_new);
     console.log('newdate-one',date_new);
      

// 👇️ "09/24/2022"
console.log('new date format',
  date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }),
);
  
  return (
    <div>
        {console.log("this data",state[0].endDate)}
      <DateRange
  editableDateInputs={true}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={state}
/>
<h1>This is the fastest asteroid</h1>
<Graph  startDate={state[0].startDate} endDate={state[0].endDate} />
    </div>
  )
}

export default Calendar
