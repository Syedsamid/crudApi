import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Read() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [Data, setdata] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3030/users/${id}`)
            .then(res => setdata(res.data))
            .catch(err => console.log(err));
    }, [id]);

  return (
    <div className='container'>
      
        <div className='container p-5'>
            <p>{Data.id}</p>
            <p>{Data.name}</p>
            <p>{Data.email}</p>
            <Link to="/">Back</Link>
        </div>
  
    </div>
  )
}

export default Read
