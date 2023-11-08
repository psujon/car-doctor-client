
import persons from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'
const HomeAbout = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>
                        <img src={persons} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} alt="" className="w-1/2 absolute right-5 top-1/2 border-8 border-white  rounded-lg shadow-2xl"/>
                    </div>
                    <div className='w-1/2 space-y-7'>
                        <h1 className="text-3xl font-bold text-orange-500">About Us</h1>
                        <h1 className="text-5xl font-bold">We are qualified & of experienced service</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur doloribus facere. Error, totam quasi! Laborum ab magnam quibusdam dicta?</p>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-warning">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;