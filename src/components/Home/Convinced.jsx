import React from 'react';

const Convinced = () => {
    return (
        <>
            <section className="scroll-top" id="convinced">
            <div className="component-padding bg_deepgreen-50">
                <div
                className="container-fluid containerframe remove-padding"
                style={{ position: "relative" }}
                >
                <div className="text-center common-margin mt-0">
                    <p className="headline2 fw-normal darkgrey-100 font_primary">
                    Still not convinced? <br /> Trust us, we’re acing this!
                    </p>
                </div>
                <div className="counter">
                    <div className="row">
                    <div className="col-md-4 mob-margin">
                        <div className="count-up">
                        <div className="d-flex justify-content-center">
                            <p className="counter-count headline3 text-center fw-bold mb-0 font_primary">
                            1000
                            </p>
                            <span className="ms-1 headline3 text-center fw-bold">+</span>
                        </div>
                        <h3 className="headline6 fw-bold text-center mb-0 font_primary darkgrey-100">
                            Samples Processed
                        </h3>
                        </div>
                    </div>
                    <div className="col-md-4 mob-margin">
                        <div className="count-up">
                        <div className="d-flex justify-content-center">
                            <p className="counter-count headline3 text-center fw-bold mb-0 font_primary">
                            300
                            </p>
                            <span className="ms-1 headline3 text-center fw-bold">+</span>
                        </div>
                        <h3 className="headline6 fw-bold text-center mb-0 font_primary darkgrey-100">
                            Consultations Taken
                        </h3>
                        </div>
                    </div>
                    <div className="col-md-4 mb-0">
                        <div className="count-up">
                        <div className="d-flex justify-content-center">
                            <p className="counter-count headline3 text-center fw-bold mb-0 font_primary">
                            250
                            </p>
                            <span className="ms-1 headline3 text-center fw-bold">+</span>
                        </div>
                        <h3 className="headline6 fw-bold text-center mb-0 font_primary darkgrey-100">
                            Diet Plans Customized
                        </h3>
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

export default Convinced;
