import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Header from "../Shared/Header";
import BookingRow from "./BookingRow";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                console.log(data)
            })
    }, [url])


    const handleDeleteFormData = (id) => {

        console.log(id);
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const remaining = bookings.filter(bookk => bookk._id != id)
            setBookings(remaining);
        })
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'Approved'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            const remaining = bookings.filter(booking => booking._id != id )
            const update = bookings.filter(booking => booking._id === id)
            update.status = 'Approved';
            const all_bookings = [update, ...remaining]
            setBookings(all_bookings);
        })
    }
    return (
        <div>
            <Header></Header>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map((book) => <BookingRow 
                            key={book._id} 
                            book={book} 
                            handleDeleteFormData={handleDeleteFormData}
                            handleConfirm={handleConfirm}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;