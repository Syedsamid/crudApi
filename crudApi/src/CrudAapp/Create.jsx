import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
    const [inputData, setInputData] = useState({
        name: '',
        email: ''
    })
    
    const navigate = useNavigate();

     const handleSubmit =async (event) => {
        event.preventDefault();

        try {
    const  data  =  await  axios.post('http://localhost:3030/users', inputData)
    navigate('/')

        } catch (error) {
            alert("Error Posting Data");
            console.log(err);
        }
        // .then(res =>{
        //     alert("Data Posted Successfully")
        //     navigate('/')
        // })
        // .catch(err => {
         
        // });
     }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center' style={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <div className='w-50 border bg-secondary text-white p-5' style={{ width: '50%', border: '1px solid #dee2e6', backgroundColor: '#6c757d', color: 'white', padding: '30px', borderRadius: '8px' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Name:</label>
                    <input 
                        type="text" 
                        name='name' 
                    
                        className='form-control' 
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }} 
                        onChange={e => setInputData({...inputData,name: e.target.value })}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Email:</label>
                    <input 
                        type="email" 
                        name='email' 
                        className='form-control' 
                        style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}  
                        onChange={e => setInputData({...inputData, email: e.target.value})}
                    />
                </div><br/>
                <button className='btn btn-info' style={{ backgroundColor: '#17a2b8', color: 'white', padding: '10px 20px', borderRadius: '4px', border: 'none' }}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create
