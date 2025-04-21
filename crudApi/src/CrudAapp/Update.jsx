import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function Update() {

    const { id } = useParams();
    const [inputData, setInputData] = useState({
       id: id,
        name: '',
        email: ''
    });
    const navigate = useNavigate();

    // Fetch existing user data on component mount
    useEffect(() => {
        axios.get(`http://localhost:3030/users/${id}`)
            .then(res => setInputData(res.data))
            .catch(err => console.log(err));
    }, [id]);

    // Handle form submission to update user data
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Make a PUT request to update the user data
            await axios.put(`http://localhost:3030/users/${id}`, inputData);

            alert("Data updated successfully!");
            navigate('/'); // Redirect after successful update
        } catch (error) {
            alert("Error updating data!");
            console.log(error);
        }
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center' style={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <div className='w-50 border bg-secondary text-white p-5' style={{ width: '50%', border: '1px solid #dee2e6', backgroundColor: '#6c757d', color: 'white', padding: '30px', borderRadius: '8px' }}>
                <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ fontWeight: 'bold', marginBottom: '5px' }}>ID:</label>
                        <input
                            type="number"
                            disabled name='name'
                            className='form-control'
                            value={inputData.id}
                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Name:</label>
                        <input
                            type="text"
                            name='name'
                            className='form-control'
                            value={inputData.name}
                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                            onChange={e => setInputData({ ...inputData, name: e.target.value })}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '5px' }}>Email:</label>
                        <input
                            type="email"
                            name='email'
                            className='form-control'
                            value={inputData.email}
                            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ced4da' }}
                            onChange={e => setInputData({ ...inputData, email: e.target.value })}
                        />
                    </div><br />
                    <button className='btn btn-info' style={{ backgroundColor: '#17a2b8', color: 'white', padding: '10px 20px', borderRadius: '4px', border: 'none' }}>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;
