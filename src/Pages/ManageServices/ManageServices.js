import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = (id) => { 
        const url =`https://protected-plateau-45347.herokuapp.com/services/${id}`
        fetch(url, {
            method:"DELETE",
        })
            .then(res => res.json())
            .then(data => { 
                if (data.deletedCount === 1) {
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                    alert("Successfuly delete service")
                }
               
                
            })
    }
    return (
        <div>
            <h2> This is manage services</h2>
            {
                services.map(service =>
                    <div key={ service._id}> 
                        <h3> Name: {service.name}</h3>
                        <button onClick={ ()=>handleDelete(service._id)}>Delete</button>
                     </div>)
            }
        </div>
    );
};

export default ManageServices;