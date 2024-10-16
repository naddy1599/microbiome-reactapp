import React from "react";
import '../../style/pages_css/home.css'
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Home/Carousel";
import Expert from "../../components/Home/Expert";
import Suffering from "../../components/Home/Suffering";
import Covered from "../../components/Home/Covered";
import Benefit from "../../components/Home/Benefit";
import Product from "../../components/Home/Product";

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <Expert />
            <Suffering />
            <Covered />
            <Benefit />
        </>
    );
}

export default Home;
