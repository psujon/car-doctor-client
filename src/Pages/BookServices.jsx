import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Header from '../Shared/Header'

const BookServices = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleFormSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.cutomer_name.value;
        const date = form.date.value;
        const email = form.email.value;
        const due_amount = form.due_amount.value;

        const order = {
            customerName: name,
            email,
            date,
            service: service?.title,
            service_id: service?._id,
            price: due_amount
        }
        // console.log(order);

        fetch('http://localhost:5000/bookings',{
            method: 'post',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=> res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                alert('Data saved successfully.')
            }
        })
    }
    return (
        <div>
            <Header></Header>
            <div className="border w-2/4 p-5 mx-auto">
                <form className="form-control" onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="name" name="cutomer_name" className="input input-bordered"/>
                    <input type="date" name="date" className="input input-bordered"/>
                    <input type="email" defaultValue={user?.email} name="email" className="input input-bordered"/>
                    <input type="text" defaultValue={service?.price} name="due_amount" className="input input-bordered"/>
                    <input type="submit" value="Book Now"/>
                </form>
            </div>
        </div>
    );
};

export default BookServices;