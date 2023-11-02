import React, { useEffect, useState } from 'react'

export const Jsondoc = () => {
    const [data, setData] = useState([]);

    const url = "https://jsonplaceholder.typicode.com/posts";

    const fetchdata = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return setData(data);
        }
        catch (error) {
            console.log("Unable to load data");
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <div className='jsontable'>
            <>
                <h1>JSON Data</h1>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>UserID</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    {data.map(data => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.userId}</td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                        </tr>))}
                </table>
            </>

        </div >
    )
}
