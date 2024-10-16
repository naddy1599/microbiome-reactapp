import React from "react";
import '../../style/pages_css/home.css'
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Home/Carousel";
import Expert from "../../components/Home/Expert";
import Suffering from "../../components/Home/Suffering";
import Covered from "../../components/Home/Covered";
import Benefit from "../../components/Home/Benefit";
import Product from "../../components/Home/Product";
import Query from "../../components/Home/Query";
import Faqs from "../../components/Home/Faqs";
import Footer from "../../components/Footer/Footer";
import Convinced from "../../components/Home/Convinced";
import Testimonials from "../../components/Home/Testimonials";
import Work from "../../components/Home/Work";



const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Expert />
            <Suffering />
            <Covered />
            <Benefit />
            <Testimonials/>
            <Convinced/>
            <Work/>
            <Faqs/>
            <Query/>
            <Footer />
        </>
    );
}

export default Home;
