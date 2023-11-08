import Banner from "../Shared/Banner";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import HomeAbout from "../Shared/HomeAbout";
import HomeServices from "../Shared/HomeServices";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <HomeServices></HomeServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;