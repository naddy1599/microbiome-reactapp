import React from 'react';

const Query = () => {
    return (
        <>
            <section className="scroll-top" id="query">
            <div
                className="bg_purewhite-50"
                style={{ zIndex: -1, height: 80, marginTop: "-80px", position: "relative" }}
            />
            <div className="bg_purewhite-50">
                <div className="container-fluid containerframe remove-padding common-padding">
                <div className="text-center">
                    <p className="headline2 fw-normal darkgrey-100 font_primary common-margin mt-0">
                    Have queries?
                    <br /> Let's gut in touch!
                    </p>
                </div>
                <div className="text-center">
                    <a
                    className="btn m-auto fw-bold button_primary font_secondary title1"
                    href="https://api.whatsapp.com/send?phone=918976995980&text=Hello,%20I%20have%20a%20question%20about%20https://microbiome.in"
                    >
                    Contact Us
                    </a>
                </div>
                </div>
            </div>
            </section> 
        </>
    );
}

export default Query;
