

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
                    
                    <div className="card-actions">
                        <h2 className="card-title text-orange-600">Price: ${price}</h2>
                        <button className="btn btn-primary">Get Service</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;