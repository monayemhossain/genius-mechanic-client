import React, { useEffect,useState} from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [booking, setBooking] = useState({});
    console.log(booking)
    useEffect(() => { 
        fetch(`https://protected-plateau-45347.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data=>setBooking(data))
    },[])
    return (
        <div>
        
            <h2>this is booking: {serviceId}</h2>
            <h3> Service name:{booking.name}</h3>
            <h4>Service Price:{ booking.price}</h4>

        </div>
    );
};

export default Booking;