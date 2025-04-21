import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3030/users')
            .then(res => {
                console.log('Response Data:', res.data); // Log the response data
                setData(res.data);
            })
            .catch(err => console.log('Error:', err)); // Log any errors
    }, []);
    
    return (
        <div className='container mt-5'>
            <h2>Crud App with JSON Server</h2>
            <Link to="/create" className='btn btn-success my-3'>Create +</Link>

            <table className='table' style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f8f9fa' }}>
                        <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>ID</th>
                        <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Name</th>
                        <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Email</th>
                        <th style={{ padding: '10px', border: '1px solid #dee2e6' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid #dee2e6' }}>
                            <td style={{ padding: '10px', textAlign: 'center' }}>{d.id}</td>
                            <td style={{ padding: '10px', textAlign: 'center' }}>{d.name}</td>
                            <td style={{ padding: '10px', textAlign: 'center' }}>{d.email}</td>
                            <td style={{ padding: '10px', textAlign: 'center' }}><Link className='text-decoration-none btn btn-sm btn-success' to={`/update/${d.id}`}>Update</Link></td>
                            <td style={{ padding: '10px', textAlign: 'center' }}><button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(d.id)}>Delete</button></td>
                            <td style={{ padding: '10px', textAlign: 'center' }}><Link className='text-decoration-none btn btn-sm btn-primary' to={`/update/${d.id}`}>Update</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
    function handleDelete(id){
        const confirm = window.confirm("Are you sure you want to delete");
        if(confirm) {
        axios.delete('http://localhost:3030/users/'+id)
        .then(res => {
           alert("Record is deleted");
            navigate('/')
        })
    }
    } 
}

export default Home
