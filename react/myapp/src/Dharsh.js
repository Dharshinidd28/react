import React,{useState} from 'react'
function Dharsh()
{
  const[counts1,SetCounts1]=useState(0);
  function myfunc()
  {
    SetCounts1(counts1+1)
  }
  function myfunc1()
  {
    SetCounts1(counts1-1);
  }
  return(
    <>
    <button onClick={myfunc}>Increase</button>
    <button onClick={myfunc1}>Decrease</button>
    <span>{counts1}</span>
    </>
  )
}

export default Dharsh