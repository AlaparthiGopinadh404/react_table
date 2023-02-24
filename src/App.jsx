import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';


function App() {
  var[array,setArray] = useState([''])
  var [key,setKey] = useState('')
 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
   .then(res=>res.json())
   .then(json=>setArray(json))
 },[])
 function handle(e){
  setKey(e.target.value)
  console.log(key);
 }
   function abc(){
    var temp=[...array]
    temp.sort((a,b)=>{
      if(a.name== b.name){
         return 1 ;
      }
      else{
        return -1 ;
      }
    })
    setArray(temp);
   }
   function xyz(){
  
    var temp2=[...array]
    const x=temp2.filter((k,l)=>{
      if(k.name.toLowerCase().includes(key.toLowerCase())){
        return true ;
      }
      else{
        return false ;
      }

    })
    setArray(x);

  }
   
  return (
    <div>
      <label htmlFor=''>search</label>
      <input type="text"  onChange={handle} value={key} />
      <button className='btn' onClick={xyz}>search</button>
      
      <table className='table table-responsive'>
        <thead>
          <th>s.no</th>
          <th onClick={abc}>name</th>
          <th>username</th>
          <th>email</th>
          <th>street</th>
          <th>suite</th>
          <th>city</th>
          <th>zipcode</th>
          <th>lat</th>
          <th>lng</th>
        </thead>
        <tbody>
          {
            array && array.map((a,i) => {
              return <tr>
              <td>{i+1}</td>
              <td>{a.name}</td>
              <td>{a.username}</td>
              <td>{a.email}</td>
              <td>{a?.address?.street}</td>
              <td>{a?.address?.suite}</td>
              <td>{a?.address?.city}</td>
              <td>{a?.address?.zipcode}</td>
              <td>{a?.address?.geo?.lat}</td>
              <td>{a?.address?.geo?.lng}</td>
              
             </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
