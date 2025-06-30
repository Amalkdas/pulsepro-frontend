import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function Workoutchart({ fromworkk }) {

    //fromworkknn details map cheyth calorie dtails named arrayil aakum
  const caloriedetails = fromworkk.Details?.map((item) => ({
    nameof: item.Activity,
    calories: Number(item.Calories),
  })) || [];

  const caloriesburnedtotal = caloriedetails.reduce((sum,entry)=>sum+entry.calories,0)

const colors = [
  '#FF5733', 
  '#33FF57', 
  '#3357FF', 
  '#FF33EE', 
  '#FFEE33', 
  '#33EEFF', 
  '#A033FF', 
  '#FF8F33', 
  '#33FFF0', 
  '#8B0000', 
 
];

  return (
    <ResponsiveContainer width="100%"  height={400} style={{marginTop:'5em',border:'2px solid black',paddingRight:'10em', margin:'auto'}}>
      <PieChart>
        <Pie
          outerRadius={150}
          data={caloriedetails}
          dataKey="calories"
          nameKey="nameof"
          cx="35%"
          cy="50%"
        >
          {caloriedetails.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        
          <Tooltip  />
        <Legend align='right'
        verticalAlign='middle'
        layout='vertical'
        style={{padding:'4em'}}

        />
        
        
        
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Workoutchart;
