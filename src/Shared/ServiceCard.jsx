import { Link } from "react-router-dom";


const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center">
                    <h2 className="card-title">{title}</h2>                    
                    <br />
                    <div className="card-actions flex flex-row items-center justify-center">
                        <h2 className="card-title text-3xl text-orange-600 mr-5">Price: ${price}</h2>
                        <Link to={`/book/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;