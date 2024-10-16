import React from 'react';

const Carousel = () => {
    return (
        <>
            <section className="scroll-top" id="banner">
                <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
                    <div className="carousel-indicators" style={{ paddingBottom: '20px' }}>
                        <button aria-label="Slide 1" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button" className="active" aria-current="true"></button>
                        <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button>
                        <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <div className="container-fluid newnavmargin bg_yellow-100">
                                <div className="container-fluid containerframe remove-padding">
                                    <div className="row reverse-direction clone-banner-height">
                                        <div className="col-md-6 mt-auto">
                                            <div style={{ textAlign: 'center', overflow: 'hidden' }}>
                                                <picture>
                                                    <source srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/banner_img_one.avif" type="image/avif" />
                                                    <source srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/banner_img_one.webp" type="image/webp" />
                                                    <img alt="person" className="img-fluid" src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/banner_img_one.png" width="600" />
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="col-md-6 m-auto mob-center">
                                            <p className="headline3 fw-bold font_primary">Your answer to every <br /> gut health question</p>
                                            <h1 className="headline6 fw-normal font_secondary" style={{ display: 'inline' }}>
                                                We’re India’s first 1-stop solution for all your gut health problems.
                                            </h1>
                                            <p className="headline6 fw-normal font_secondary" style={{ display: 'inline' }}>
                                                Discover a vibrant, energetic, and healthier you, through the power of your unique gut microbiome!
                                            </p>
                                            <div className="mobhide mt-3">
                                                <a className="btn mt-3 me-2 button_primary font_secondary headline6" href="/#suffering">Get started</a>
                                                <a className="btn mt-3 fw-bold ms-2 font_secondary button_secondary headline6" href="/#products">Shop</a>
                                            </div>
                                            <div className="webhide mt-3">
                                                <div className="d-flex">
                                                    <a className="btn me-2 w-100 button_primary font_secondary headline6" href="/#suffering">Get started</a>
                                                    <a className="btn fw-bold ms-2 w-100 font_secondary button_secondary headline6" href="/#products">Shop</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="container-fluid newnavmargin bg_purple-100">
                                <div className="container-fluid containerframe remove-padding">
                                    <div className="row reverse-direction clone-banner-height">
                                        <div className="col-md-6 mt-auto">
                                            <div style={{ textAlign: 'center', overflow: 'hidden' }}>
                                                <picture>
                                                    <source srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/banner_img_three.avif" type="image/avif" />
                                                    <source srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/banner_img_three.webp" type="image/webp" />
                                                    <img alt="expert" className="img-fluid" decoding="async" loading="lazy" src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/banner_img_three.png" width="600" />
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="col-md-6 m-auto mob-center">
                                            <p className="headline3 fw-bold font_primary">Get the gut-truth: Expert insights for a healthier you!</p>
                                            <p className="headline6 fw-normal font_secondary">Our expert team of Scientists, Nutritionists and Gastroenterologists will guide you at every step of your health journey.</p>
                                            <div className="mobhide">
                                                <a className="btn mt-3 me-2 button_primary font_secondary headline6" href="/#suffering">Get started</a>
                                                <a className="btn mt-3 fw-bold ms-2 font_secondary button_secondary headline6" href="/#products">Shop</a>
                                            </div>
                                            <div className="webhide">
                                                <div className="d-flex">
                                                    <a className="btn me-2 w-100 button_primary font_secondary headline6" href="/#suffering">Get started</a>
                                                    <a className="btn fw-bold ms-2 w-100 font_secondary button_secondary headline6" href="/#products">Shop</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="container-fluid newnavmargin bg_orange-100">
                                <div className="container-fluid containerframe remove-padding">
                                    <div className="row clone-banner-height">
                                        <div className="col-md-6 m-auto mob-center">
                                            <p className="headline3 fw-bold font_primary">Say goodbye to guesswork: <br /> Get personalized solutions!</p>
                                            <p className="headline6 fw-normal font_secondary">Avoid the hassle of random probiotics and fleeting dietary trends, get personalised recommendations tailored to your gut microbiome.</p>
                                            <div className="mobhide">
                                                <a className="btn mt-3 me-2 button_primary font_secondary headline6" href="/#suffering">Get started</a>
                                                <a className="btn mt-3 fw-bold ms-2 font_secondary button_secondary headline6" href="/#products">Shop</a>
                                            </div>
                                            <div className="webhide">
                                                <div className="d-flex">
                                                    <a className="btn me-2 w-100 button_primary font_secondary headline6" href="/#suffering">Get started</a>
                                                    <a className="btn fw-bold ms-2 w-100 font_secondary button_secondary headline6" href="/#products">Shop</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-auto">
                                            <div style={{ textAlign: 'center', overflow: 'hidden' }}>
                                                <picture>
                                                    <source srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/banner_img_two.avif" type="image/avif" />
                                                    <source srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/banner_img_two.webp" type="image/webp" />
                                                    <img alt="doctor" className="img-fluid" decoding="async" loading="lazy" src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/banner_img_two.png" width="500" />
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Carousel;
