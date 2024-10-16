import React from 'react';

const Work = () => {
    return (
        <>
            <section className="scroll-top" id="how-it-works">
                <div className="bg_sup">
                    <div className="container-fluid containerframe remove-padding">
                    <div className="component-padding">
                        <div className="text-center">
                        <p className="headline2 fw-normal common-margin mt-0 font_primary darkgrey-100">
                            Okay, I’m in! <br /> Tell me how it works?
                        </p>
                        </div>
                        <div className="row" style={{ display: "contents" }}>
                        <div className="col-md-6 m-auto text-center">
                            <video
                            className="video-size"
                            controls=""
                            style={{ borderRadius: 20 }}
                            >
                            <source
                                src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/hiwvideos.mp4"
                                type="video/mp4"
                            />
                            </video>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        </>
    );
}

export default Work;
