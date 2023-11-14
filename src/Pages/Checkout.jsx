import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";


const Checkout = () => {
    const service = useLoaderData();
    // console.log(service)

    const handleCheckoutFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const first_name = form.first_name.value;
        const last_name = form.last_name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
    }
    return (
        <div>
            <Header></Header>
            <div>
                <div>
                    <div className="hero bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="card w-full shadow-2xl bg-base-100">
                                <form className="card-body grid grid-cols-2 " onClick={handleCheckoutFormSubmit}>
                                    <div className="form-control">                                        
                                        <input type="text" placeholder="First Name" name="first_name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">                                        
                                        <input type="text" placeholder="Last Name" name="last_name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">                                        
                                        <input type="text" placeholder="Your Phone" name="phone" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">                                        
                                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control col-span-2">                                        
                                        <input type="text" placeholder="Message" name="message" className="input  input-bordered col-span-2" required />
                                    </div>
                                    <div className="form-control mt-6 col-span-2">
                                        <input type="submit" value="Book Service" className="btn btn-warning col-span-2"/>
                                        {/* <button className="btn btn-primary">Login</button> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;