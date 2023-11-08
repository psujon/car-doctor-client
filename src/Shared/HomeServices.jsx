import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const HomeServices = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="mt-5">
            <div className="text-center">
                <h3 className="text-3xl text-orange-600">Services</h3>
                <h3 className="text-5xl font-bold">Our Service Area</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facilis, repellendus exercitationem non itaque tempore ea rerum totam voluptas sed!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map((service) => <ServiceCard key={service?._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default HomeServices;