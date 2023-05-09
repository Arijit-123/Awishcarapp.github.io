import React from 'react'
import Calendar from './Calendar';

const Fetchdata = () => {
  var newdate=2022-11-10;
 var dateone=Number(newdate);
 var datetwo=2022-11-17;
 console.log('type of data one', typeof dateone)
    React.useEffect(() => {
        fetch(
          'https://api.nasa.gov/neo/rest/v1/feed?start_date=${dateone}&end_date=${datetwo}&api_key=2h1xX4i7QSxpehhJC9zCv2wEdInG2pYsdJaWfpxj'
        )
          .then((res) => res.json())
          .then((data) => {
            console.log('datajddcdcbj',data);
          });
      }, []);
  return (
    <div>
      <Calendar/>
    </div>
  )
}

export default Fetchdata
