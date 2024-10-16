import React from 'react';


const OffCanvasMenu = () => {
    return (
        <>
            <div className="offcanvas offcanvas-start navbar-toggler" aria-labelledby="offcanvasExampleLabel" id="offcanvasExample" style={{ width: '344px', height: '100vh' }} tabIndex="-1">
            <div className="offcanvas-header">
                <div className="offcanvas-title" id="offcanvasExampleLabel">
                <a className="navbar-brand" href="/">
                    <picture>
                    <source
                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/footer/microbiomelogo.avif"
                        type="image/avif"
                    />
                    <source
                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/footer/microbiomelogo.webp"
                        type="image/webp"
                    />
                    <img
                        alt="logo"
                        className="img-fluid"
                        height="29.16"
                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/footer/microbiomelogo.png"
                        width="96"
                    />
                    </picture>
                </a>
                </div>
                <button className="btn-close text-reset" aria-label="Close" data-bs-dismiss="offcanvas" style={{ width: '32px', height: '32px' }} type="button"></button>
            </div>
            <div className="offcanvas-body">
                <div className="navmenu">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                    <p className="accordion-header" id="flush-headingOne">
                        <button
                        className="accordion-button collapsed headline6 font_primary darkgrey-100"
                        aria-controls="flush-collapseOne"
                        aria-expanded="false"
                        data-bs-target="#flush-collapseOne"
                        data-bs-toggle="collapse"
                        id="navmenu-item"
                        type="button"
                        >
                        PRODUCTS
                        </button>
                    </p>
                    <div className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" id="flush-collapseOne">
                        <div className="accordion-body pt-0 ms-3" id="navmenu-item">
                        <a className="headline6 darkgrey-100 text-uppercase font_primary text-decoration-none" href="/shop/package/miGQ-rapid" id="navmenu-object">miGQ Rapid</a><br />
                        <a className="headline6 darkgrey-100 text-uppercase font_primary text-decoration-none" href="/shop/package/miGQ-comprehensive-test" id="navmenu-object">miGQ Comprehensive Test</a><br />
                        <a className="headline6 darkgrey-100 text-uppercase font_primary text-decoration-none" href="/shop/package/miGQ-dysbiosis-test" id="navmenu-object">miGQ Dysbiosis Test</a><br />
                        <a className="headline6 darkgrey-100 text-uppercase font_primary text-decoration-none" href="/shop/package/miGQ-lite-test" id="navmenu-object" style={{ marginBottom: '0' }}>miGQ Lite Test</a>
                        </div>
                    </div>
                    </div>
                </div>
                <hr style={{ border: '.5px solid #3b3941', margin: '0 1rem' }} />
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                    <p className="accordion-header" id="flush-headingTwo">
                        <button
                        className="accordion-button collapsed headline6 font_primary darkgrey-100"
                        aria-controls="flush-collapseTwo"
                        aria-expanded="false"
                        data-bs-target="#flush-collapseTwo"
                        data-bs-toggle="collapse"
                        id="navmenu-item"
                        type="button"
                        >
                        LEARN
                        </button>
                    </p>
                    <div className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" id="flush-collapseTwo">
                        <div className="accordion-body pt-0 ms-3" id="navmenu-item">
                        <a className="headline6 darkgrey-100 text-uppercase font_primary text-decoration-none" href="/microbiome/" id="navmenu-object">What is Microbiome</a><br />
                        <a className="headline6 darkgrey-100 text-uppercase font_primary text-decoration-none" href="/technique/" id="navmenu-object">Our APPROACH</a><br />
                        <a className="headline6 darkgrey-100 text-uppercase font_primary text-decoration-none" href="/blog/" id="navmenu-object" style={{ marginBottom: '0' }}>BLOG</a>
                        </div>
                    </div>
                    </div>
                </div>
                <hr style={{ border: '.5px solid #3b3941', margin: '0 1rem' }} />
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                    <p className="accordion-header" id="flush-headingThree">
                        <button
                        className="accordion-button collapsed headline6 font_primary darkgrey-100"
                        aria-controls="flush-collapseThree"
                        aria-expanded="false"
                        data-bs-target="#flush-collapseThree"
                        data-bs-toggle="collapse"
                        id="navmenu-item"
                        type="button"
                        >
                        ABOUT US
                        </button>
                    </p>
                    <div className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample" id="flush-collapseThree">
                        <div className="accordion-body pt-0 ms-3" id="navmenu-item">
                        <a className="headline6 darkgrey-100 text-uppercase font_primary text-decoration-none" href="/what-we-do/" id="navmenu-object">WHAT WE DO</a><br />
                        <a className="headline6 darkgrey-100 text-uppercase font_primary text-decoration-none" href="/founder/" id="navmenu-object">FOUNDER'S STORY</a><br />
                        <a className="headline6 darkgrey-100 text-uppercase font_primary text-decoration-none" href="/team/" id="navmenu-object" style={{ marginBottom: '0' }}>MEET THE TEAM</a>
                        </div>
                    </div>
                    </div>
                </div>
                <hr style={{ border: '.5px solid #3b3941', margin: '0 1rem' }} />
                <a className="btn headline6 font_primary darkgrey-100 navmenu-link" style={{ padding: '16px 20px', textDecoration: 'none' }} href="/faq/">FAQs</a>
                <hr style={{ border: '.5px solid #3b3941', margin: '0 1rem' }} />
                </div>
            </div>
            </div>
        </>

    );
};

export default OffCanvasMenu;
