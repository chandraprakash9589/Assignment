import React, { useState, useEffect } from 'react'
import './../App.css'
function FatchData() {
    const [data, setData] = useState([])

    async function getUserData(){
        try {
          const response = await fetch('https://jsonplacehoflder.typicode.com/posts')
          const data = await response.json()
          setData(data)
        } catch (error) {
          console.log("E: ",error)
        }
      }
  
   useEffect(()=>{
    
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((response) => {
    //         return response.json()
    //     })
    //     .then((data) => {
    //         setData(data)
    //     })
    //     .catch((error) => console.log("ERROR: Data Not Found"))    
    getUserData()
    },[])

    return (
        <>
            <h1>Data fatch from api</h1>
            <table >
                <tbody >
                    <tr>
                        <th>Id</th>
                        <th>UserId</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                    {data.map((item,index)=>(
                    <tr key={item.id}>

                        <td >{item.id}</td>
                        <td >{item.userId}</td>
                        <td >{item.title}</td>
                        <td >{item.body}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default FatchData;