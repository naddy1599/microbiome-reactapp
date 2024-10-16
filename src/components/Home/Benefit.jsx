import React from 'react';

const Benefit = () => {
    return (
        <>
            <section className="scroll-top" id="benefit">
                <div className="container-fluid containerframe remove-padding">
                    <div className="row mobhide component-padding">
                        <div className="col-5 m-auto">
                            <picture>
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/pink_kit_bg_grey.avif"
                                    type="image/avif" />
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/pink_kit_bg_grey.webp"
                                    type="image/webp" />
                                <img alt="migq kit" className="img-fluid" decoding="async" loading="lazy"
                                    src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/pink_kit_bg_grey.png" />
                            </picture>
                        </div>
                        <div className="col-7 m-auto ps-4">
                            <p className="headline2 fw-normal common-margin mt-0 font_primary darkgrey-100">How does it benefit
                                you?</p>
                            <div className="row">
                                <div className="col-6 mb-4">
                                    <img className="img-fluid p-2 mb-3" alt="gut" loading="lazy"
                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/gut.svg"
                                        style={{ backgroundColor: '#cdeafa', borderRadius: '50%', width: '50px' }} />
                                    <p className="title1 font_secondary">Enhanced Digestion</p>
                                    <p className="title2 font_secondary">Address underlying causes of digestive issues,
                                        alleviate discomfort, and promote digestive wellness.</p>
                                </div>
                                <div className="col-6 mb-4">
                                    <img className="img-fluid p-2 mb-3" alt="immun" loading="lazy"
                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/immun.svg"
                                        style={{ backgroundColor: '#abb9ff', borderRadius: '50%', width: '50px' }} />
                                    <p className="title1 font_secondary">Improved Immunity</p>
                                    <p className="title2 font_secondary">Understand how your gut microbiome influences immune
                                        function, empowering you to bolster your body's natural defenses.</p>
                                </div>
                                <div className="col-6 mb-4">
                                    <img className="img-fluid p-2 mb-3" alt="mind" loading="lazy"
                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/mind.svg"
                                        style={{ backgroundColor: '#cdf1df', borderRadius: '50%', width: '50px' }} />
                                    <p className="title1 font_secondary">Balanced Mind</p>
                                    <p className="title2 font_secondary">Discover the gut-brain axis's role in mental health to
                                        build clarity, stability, and resilience.</p>
                                </div>
                                <div className="col-6 mb-0">
                                    <img className="img-fluid p-2 mb-3" alt="happygut" loading="lazy"
                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/happygut.svg"
                                        style={{ backgroundColor: '#f2e587', borderRadius: '50%', width: '50px' }} />
                                    <p className="title1 font_secondary">A Happy, Healthier You</p>
                                    <p className="title2 font_secondary">Embrace holistic health from within, by fostering a
                                        balanced gut microbiome.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row webhide component-padding">
                        <div className="col-12 m-auto tab-padding-left">
                            <p className="headline2 fw-normal mt-0 component-margin mob-center font_primary darkgrey-100">How
                                does it benefit you?</p>
                            <div className="row">
                                <div className="col-12 component-margin mt-0">
                                    <div className="row">
                                        <div className="col-2 pe-0 icon-padding m-auto text-center">
                                            <img className="img-fluid p-2" alt="gut" loading="lazy"
                                                src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/gut.svg"
                                                style={{ backgroundColor: '#cdeafa', borderRadius: '50%' }} width="30" />
                                        </div>
                                        <div className="col-10 m-auto ps-0">
                                            <p className="headline4 mb-0"
                                                style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 600 }}>Enhanced Digestion
                                            </p>
                                        </div>
                                        <div className="col-2 pe-0"></div>
                                        <div className="col-9 ps-0 mt-1">
                                            <p className="caption2 mb-0 font_secondary">Address underlying causes of digestive
                                                issues, alleviate discomfort, and promote digestive wellness.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 component-margin mt-0">
                                    <div className="row">
                                        <div className="col-2 pe-0 icon-padding m-auto text-center">
                                            <img className="img-fluid p-2" alt="immun" loading="lazy"
                                                src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/immun.svg"
                                                style={{ backgroundColor: '#abb9ff', borderRadius: '50%' }} width="30" />
                                        </div>
                                        <div className="col-10 m-auto ps-0">
                                            <p className="headline4 m-auto"
                                                style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 600 }}>Improved Immunity
                                            </p>
                                        </div>
                                        <div className="col-2 pe-0"></div>
                                        <div className="col-9 ps-0 mt-1">
                                            <p className="caption2 mb-0 font_secondary">Understand how your gut microbiome
                                                influences immune function, empowering you to bolster your body's natural
                                                defenses.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 component-margin mt-0">
                                    <div className="row">
                                        <div className="col-2 pe-0 icon-padding m-auto text-center">
                                            <img className="img-fluid p-2" alt="mind" loading="lazy"
                                                src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/mind.svg"
                                                style={{ backgroundColor: '#cdf1df', borderRadius: '50%' }} width="30" />
                                        </div>
                                        <div className="col-10 m-auto ps-0">
                                            <p className="headline4 m-auto"
                                                style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 600 }}>Balanced Mind</p>
                                        </div>
                                        <div className="col-2 pe-0"></div>
                                        <div className="col-9 ps-0 mt-1">
                                            <p className="caption2 mb-0 font_secondary">Discover the gut-brain axis's role in
                                                mental health to build clarity, stability, and resilience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-0">
                                    <div className="row">
                                        <div className="col-2 pe-0 icon-padding m-auto text-center">
                                            <img className="img-fluid p-2" alt="happygut" loading="lazy"
                                                src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/happygut.svg"
                                                style={{ backgroundColor: '#f2e587', borderRadius: '50%' }} width="30" />
                                        </div>
                                        <div className="col-10 m-auto ps-0">
                                            <p className="headline4 m-auto"
                                                style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 600 }}>A Happy, Healthier
                                                You</p>
                                        </div>
                                        <div className="col-2 pe-0"></div>
                                        <div className="col-9 ps-0 mt-1">
                                            <p className="caption2 mb-0 font_secondary">Embrace holistic health from within, by
                                                fostering a balanced gut microbiome.</p>
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
}

export default Benefit;
