import React,{useEffect,useState} from "react";
import Image from 'next/image'
export default function Userdetails(){

    const[data,setData] = useState([]);

    useEffect(() =>{
        fetch ('https://reqres.in/api/users')
        .then(res => res.json())
        .then(res => setData(res.data))
    }, []); 
    return(
        <div className="container">
          
             {data.map((item)=>
                 <div className="row">
                    
                     
                </div>
           )}  
        
        </div>
    )
}