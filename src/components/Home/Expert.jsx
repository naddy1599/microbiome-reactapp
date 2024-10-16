import React from 'react';

const Expert = () => {
    return (
        <>
            <section className="scroll-top" id="expert">
                <div className="container-fluid containerframe remove-padding">
                    <div className="text-center component-padding">
                        <p className="headline6 common-margin mt-0 font_primary darkgrey-100">Our Experts</p>
                        <div className="mobhide">
                            <div className="input-group color-reveal" style={{ justifyContent: 'space-evenly', gap: '10px' }}>
                                <picture>
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iitb.avif"
                                        type="image/avif" />
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iitb.webp"
                                        type="image/webp" />
                                    <img
                                        alt="iitb logo"
                                        className="img-fluid"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iitb.png"
                                        style={{ maxWidth: 'auto', height: '130px' }} />
                                </picture>
                                <picture>
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iisc.avif"
                                        type="image/avif" />
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iisc.webp"
                                        type="image/webp" />
                                    <img
                                        alt="iisc logo"
                                        className="img-fluid"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iisc.png"
                                        style={{ maxWidth: 'auto', height: '135px' }} />
                                </picture>
                                <picture>
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/aiims.avif"
                                        type="image/avif" />
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/aiims.webp"
                                        type="image/webp" />
                                    <img
                                        alt="aiims logo"
                                        className="img-fluid"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/aiims.png"
                                        style={{ maxWidth: 'auto', height: '130px' }} />
                                </picture>
                            </div>
                        </div>
                        <div className="webhide">
                            <div className="input-group color-reveal" style={{ justifyContent: 'space-evenly', gap: '10px' }}>
                                <picture>
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iitb.avif"
                                        type="image/avif" />
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iitb.webp"
                                        type="image/webp" />
                                    <img
                                        alt="iitb logo"
                                        className="img-fluid"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iitb.png"
                                        style={{ maxWidth: 'auto', height: '90px' }} />
                                </picture>
                                <picture>
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iisc.avif"
                                        type="image/avif" />
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iisc.webp"
                                        type="image/webp" />
                                    <img
                                        alt="iisc logo"
                                        className="img-fluid"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/iisc.png"
                                        style={{ maxWidth: 'auto', height: '95px' }} />
                                </picture>
                                <picture>
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/aiims.avif"
                                        type="image/avif" />
                                    <source
                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/aiims.webp"
                                        type="image/webp" />
                                    <img
                                        alt="aiims logo"
                                        className="img-fluid"
                                        decoding="async"
                                        loading="lazy"
                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/aiims.png"
                                        style={{ maxWidth: 'auto', height: '90px' }} />
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Expert;
