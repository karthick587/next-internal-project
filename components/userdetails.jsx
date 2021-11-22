import React,{useEffect,useState} from "react";

export default function Userdetails(){

    const[data,setData] = useState([]);

    useEffect(() =>{
        fetch ('https://reqres.in/api/users/2')
        .then(res => res.json())
        .then(res => setData(res.data))
    }, []); 
    return(
        <div className="container">
          <h1>Fetch Data from API</h1>
            
                 <div className="row ">
                     <div className="col"> {data.id}</div>
                     <div className="col"> {data.first_name}</div>
                     <div className="col"> {data.last_name}</div>
                     <div className="col"> {data.email}</div>
                     <div className="col" key={data.id}><img className="rounded-circle"src= {data.avatar} alt="pic1" /></div>
                     
                </div>
         
        
        </div>
    )
}