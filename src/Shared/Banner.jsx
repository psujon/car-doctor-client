import img1 from '../assets/images/banner/1.jpg'
import img2 from '../assets/images/banner/2.jpg'
import img3 from '../assets/images/banner/3.jpg'
import img4 from '../assets/images/banner/4.jpg'
import img5 from '../assets/images/banner/5.jpg'
import img6 from '../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[600px]">
                    <img src={img1} className="w-full rounded-xl" />
                    <div className="absolute h-full flex items-center left-10 transform top-0">
                        <div className='p-4 text-white font-bold space-y-7 w-2/3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]] rounded-xl'>
                            <h2 className='text-6xl'>Affordable price for car servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ullam?</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[600px]">
                    <img src={img2} className="w-full rounded-xl" />
                    <div className="absolute h-full flex items-center left-10 transform top-0">
                        <div className='p-4 text-white font-bold space-y-7 w-2/3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]] rounded-xl'>
                            <h2 className='text-6xl'>Affordable price for car servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ullam?</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[600px]">
                    <img src={img3} className="w-full rounded-xl" />
                    <div className="absolute h-full flex items-center left-10 transform top-0">
                        <div className='p-4 text-white font-bold space-y-7 w-2/3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]] rounded-xl'>
                            <h2 className='text-6xl'>Affordable price for car servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ullam?</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[600px]">
                    <img src={img4} className="w-full rounded-xl" />
                    <div className="absolute h-full flex items-center left-10 transform top-0">
                        <div className='p-4 text-white font-bold space-y-7 w-2/3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]] rounded-xl'>
                            <h2 className='text-6xl'>Affordable price for car servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ullam?</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full h-[600px]">
                    <img src={img5} className="w-full rounded-xl" />
                    <div className="absolute h-full flex items-center left-10 transform top-0">
                        <div className='p-4 text-white font-bold space-y-7 w-2/3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]] rounded-xl'>
                            <h2 className='text-6xl'>Affordable price for car servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ullam?</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full h-[600px]">
                    <img src={img6} className="w-full rounded-xl" />
                    <div className="absolute h-full flex items-center left-10 transform top-0">
                        <div className='p-4 text-white font-bold space-y-7 w-2/3 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]] rounded-xl'>
                            <h2 className='text-6xl'>Affordable price for car servicing</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ullam?</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">Latest Projects</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;