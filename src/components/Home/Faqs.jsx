import React from 'react';

const Faqs = () => {
    return (
        <>
            <section className="scroll-top" id="faqs">
            <div className="container-fluid component-padding bg_orange-100">
                <div className="container" style={{ maxWidth: 758, margin: "auto" }}>
                <div className="text-start">
                    <p className="headline2 fw-normal font_primary common-margin mt-0">
                    FAQs
                    </p>
                </div>
                <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                    style={{ maxWidth: 758, margin: "auto" }}
                >
                    <div
                    style={{ background: "0 0", border: 0 }}
                    className="accordion-item"
                    >
                    <h2 className="accordion-header mt-4" id="flush-headingFive">
                        <button
                        className="accordion-button collapsed p-1 headline5 darkgrey-100 font_secondary fw-bold bg_orange-100"
                        aria-controls="flush-collapseFive"
                        aria-expanded="false"
                        data-bs-target="#flush-collapseFive"
                        data-bs-toggle="collapse"
                        type="button"
                        >
                        Who is this for? Is there an optimal time to get my gut microbiome
                        test?
                        </button>
                    </h2>
                    <div
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingFive"
                        data-bs-parent="#accordionFlushExample"
                        id="flush-collapseFive"
                    >
                        <div className="accordion-body fw-lighter p-1 pt-3 title1 darkgrey-100 font_secondary bg_orange-100">
                        The gut microbiome is affected by changes such as antibiotic use,
                        a bacterial or a viral infection, excessive alcohol consumption in
                        last few hours and travel. The changes in gut microbiome are
                        temporary and the microbiome rebuilds itself after you are back to
                        your normal routine. <br />
                        <br /> Hence, we recommend you not to take the test if you have -{" "}
                        <ul>
                            <li>Consumed antibiotics in the last couple of weeks</li>
                            <li>
                            Had fever or had viral/bacterial infection in the last 7 days
                            or
                            </li>
                            <li>
                            Had consumed alcohol/recreational drugs in last 24 hours
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <hr className="accordingline2" />
                    <div
                    style={{ background: "0 0", border: 0 }}
                    className="accordion-item"
                    >
                    <h2 className="accordion-header" id="flush-headingSix">
                        <button
                        className="accordion-button collapsed p-1 headline5 darkgrey-100 font_secondary fw-bold bg_orange-100"
                        aria-controls="flush-collapseSix"
                        aria-expanded="false"
                        data-bs-target="#flush-collapseSix"
                        data-bs-toggle="collapse"
                        type="button"
                        >
                        Can I collect the stool sample during menstrual cycle?
                        </button>
                    </h2>
                    <div
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingSix"
                        data-bs-parent="#accordionFlushExample"
                        id="flush-collapseSix"
                    >
                        <div className="accordion-body fw-normal p-1 pt-3 title1 darkgrey-100 font_secondary bg_orange-100">
                        We recommend you to take collect the sample before or after you
                        menstrual cycle
                        </div>
                    </div>
                    </div>
                    <hr className="accordingline2" />
                    <div
                    style={{ background: "0 0", border: 0 }}
                    className="accordion-item"
                    >
                    <h2 className="accordion-header" id="flush-headingSeven">
                        <button
                        className="accordion-button collapsed p-1 headline5 darkgrey-100 font_secondary fw-bold bg_orange-100"
                        aria-controls="flush-collapseSeven"
                        aria-expanded="false"
                        data-bs-target="#flush-collapseSeven"
                        data-bs-toggle="collapse"
                        type="button"
                        >
                        How often do I take the test?
                        </button>
                    </h2>
                    <div
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingSeven"
                        data-bs-parent="#accordionFlushExample"
                        id="flush-collapseSeven"
                    >
                        <div className="accordion-body fw-lighter p-1 pt-3 title1 darkgrey-100 font_secondary bg_orange-100">
                        The test can be ideally taken at intervals of 6 months
                        </div>
                    </div>
                    </div>
                    <hr className="accordingline2" />
                    <div
                    style={{ background: "0 0", border: 0 }}
                    className="accordion-item"
                    >
                    <h2 className="accordion-header" id="flush-headingEight">
                        <button
                        className="accordion-button collapsed p-1 headline5 darkgrey-100 font_secondary fw-bold bg_orange-100"
                        aria-controls="flush-collapseEight"
                        aria-expanded="false"
                        data-bs-target="#flush-collapseEight"
                        data-bs-toggle="collapse"
                        type="button"
                        >
                        I’m pregnant, can I take a test?
                        </button>
                    </h2>
                    <div
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingEight"
                        data-bs-parent="#accordionFlushExample"
                        id="flush-collapseEight"
                    >
                        <div className="accordion-body fw-lighter p-1 pt-3 title1 darkgrey-100 font_secondary bg_orange-100">
                        No, since the microbiome varies during pregnancy, we recommend you
                        to wait until you deliver your baby.
                        </div>
                    </div>
                    </div>
                    <hr className="accordingline2" />
                    <div
                    style={{ background: "0 0", border: 0 }}
                    className="accordion-item"
                    >
                    <h2 className="accordion-header" id="flush-headingnine">
                        <button
                        className="accordion-button collapsed p-1 headline5 darkgrey-100 font_secondary fw-bold bg_orange-100"
                        aria-controls="flush-collapsenine"
                        aria-expanded="false"
                        data-bs-target="#flush-collapsenine"
                        data-bs-toggle="collapse"
                        type="button"
                        >
                        Can my kid take the test? (age limit?)
                        </button>
                    </h2>
                    <div
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingnine"
                        data-bs-parent="#accordionFlushExample"
                        id="flush-collapsenine"
                    >
                        <div className="accordion-body fw-lighter p-1 pt-3 title1 darkgrey-100 font_secondary bg_orange-100">
                        The test is recommended for people above the age of 18
                        </div>
                    </div>
                    </div>
                </div>
                <hr className="accordingline2" />
                <div className="text-center">
                    <a
                    className="btn button_secondary font_secondary fw-bold common-margin mb-0"
                    href="/faq"
                    >
                    {" "}
                    More FAQs{" "}
                    </a>
                </div>
                </div>
            </div>
            <svg
                viewBox="0 0 1440 90"
                fill="none"
                style={{ marginTop: "-.5rem" }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M1440 44.1634L1380 46.8655C1320 49.5966 1200 55.0008 1080 55.8725C960 56.7441 840 53.0832 720 46.8364C600 40.5896 480 31.757 360 27.8927C240 24.0284 120 25.0743 60 25.6264L-2.14577e-05 26.1494V-1.74418e-06H60C120 -1.74418e-06 240 -1.74418e-06 360 -1.74418e-06C480 -1.74418e-06 600 -1.74418e-06 720 -1.74418e-06C840 -1.74418e-06 960 -1.74418e-06 1080 -1.74418e-06C1200 -1.74418e-06 1320 -1.74418e-06 1380 -1.74418e-06H1440V44.1634Z"
                fill="#F9C07D"
                />
            </svg>
            </section>
        </>
    );
}

export default Faqs;
