import React from 'react';

const Covered = () => {
    return (
        <>
            <section className="scroll-top" id="covered">
                <div
                    style={{
                        zIndex: -1,
                        backgroundColor: '#fac17e',
                        height: '80px',
                        marginTop: '-87px',
                        position: 'relative'
                    }}
                ></div>
                <div className="container-fluid component-padding" style={{ backgroundColor: '#fac17e' }}>
                    <div className="container-fluid containerframe remove-padding p-0">
                        <div className="text-center">
                            <p className="headline2 fw-normal darkgrey-100 mb-0 font_primary">
                                Fret not, we have got you covered!
                            </p>
                        </div>
                        <CoveredItemsWeb />
                        <CoveredItemsMob />
                        <p className="headline3 fw-normal darkgrey-100 text-center mb-0 font_primary">
                            Convinced? <br /> Let's get started
                        </p>
                        <div className="text-center common-margin">
                            <a
                                className="btn m-auto fw-bold button_primary purewhite-100 font_primary headline5"
                                href="/#products"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>
                </div>
                {modalsData.map((modal) => (
                    <Modal
                        key={modal.id}
                        id={modal.id}
                        imageSrcSet={modal.imageSrcSet}
                        description={modal.description}
                    />
                ))}
            </section>
        </>
    );
}

const CoveredItemsWeb = () => {
    return (
        <>
            <div className="row tab-view-points mobhide common-padding">
            <div className="col-5" />
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_purple-50"
                style={{ borderRadius: "50%" }}
                >
                1
                </p>
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 70,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_purple-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    miGQ<sup style={{ fontWeight: 400 }}>®</sup> Gut <br /> Microbiome Test{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#first1"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_yellow-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Comparative Gut <br /> Health Scores{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#second2"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_yellow-50"
                style={{ borderRadius: "50%" }}
                >
                2
                </p>
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 70,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-5" />
            <div className="col-5" />
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_deepgreen-50"
                style={{ borderRadius: "50%" }}
                >
                3
                </p>
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 70,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_deepgreen-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Gut Microbiome Composition
                    <svg
                    className="bi bi-info-circle ms-2"
                    viewBox="0 0 16 16"
                    data-bs-target="#third3"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_purple-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Metabolism Indicators{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#four4"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_purple-50"
                style={{ borderRadius: "50%" }}
                >
                4
                </p>
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 70,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-5" />
            <div className="col-5" />
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_yellow-50"
                style={{ borderRadius: "50%" }}
                >
                5
                </p>
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 70,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_yellow-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Personalised Dietary Recommendations{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#five5"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_deepgreen-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Personalised Probiotic Recommendations{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#six6"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_deepgreen-50"
                style={{ borderRadius: "50%" }}
                >
                6
                </p>
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 70,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-5" />
            <div className="col-5" />
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_purple-50"
                style={{ borderRadius: "50%" }}
                >
                7
                </p>
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 70,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_purple-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Scientist <br /> Consultation
                    <svg
                    className="bi bi-info-circle ms-2"
                    viewBox="0 0 16 16"
                    data-bs-target="#seven7"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_yellow-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Nutritionist <br />
                    Consultation{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#eight8"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_yellow-50"
                style={{ borderRadius: "50%" }}
                >
                8
                </p>
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 70,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-5" />
            <div className="col-5" />
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_deepgreen-50"
                style={{ borderRadius: "50%" }}
                >
                9
                </p>
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 70,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_deepgreen-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    3-Phase Diet Plan{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#nine9"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_purple-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Gastroenterologist Consultation{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#ten10"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_purple-50"
                style={{ borderRadius: "50%" }}
                >
                10
                </p>
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 70,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-5" />
            <div className="col-5" />
            <div className="col-2 text-center">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_yellow-50"
                style={{ borderRadius: "50%" }}
                >
                11
                </p>
            </div>
            <div className="col-5 ps-0 m-auto">
                <div
                className="p-3 bg_yellow-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    height: 100,
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Repeat miGQ<sup style={{ fontWeight: 400 }}>®</sup> Gut <br />{" "}
                    Microbiome Test{" "}
                    <a href="#covered" style={{ color: "#3b3941" }}>
                    {" "}
                    <svg
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        height={16}
                        width={16}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>{" "}
                    </a>
                </p>
                </div>
            </div>
            </div>
        </>
    );
}

const CoveredItemsMob = () => {
    return (
        <>
            <div className="row tab-view-points webhide common-padding">
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_purple-50"
                style={{ borderRadius: "50%" }}
                >
                1
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_purple-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    miGQ<sup style={{ fontWeight: 400 }}>®</sup> Gut <br /> Microbiome Test{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#first1"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-3">
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 35,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-9" />
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_yellow-50"
                style={{ borderRadius: "50%" }}
                >
                2
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_yellow-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Comparative Gut <br /> Health Scores{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#second2"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-3">
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 35,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-9" />
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_deepgreen-50"
                style={{ borderRadius: "50%" }}
                >
                3
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_deepgreen-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Gut Microbiome <br />
                    Composition{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#third3"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-3">
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 35,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-9" />
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_purple-50"
                style={{ borderRadius: "50%" }}
                >
                4
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_purple-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Metabolism <br /> Indicators
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#four4"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-3">
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 35,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-9" />
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_yellow-50"
                style={{ borderRadius: "50%" }}
                >
                5
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_yellow-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Personalised Dietary <br />
                    Recommendations{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#five5"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-3">
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 35,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-9" />
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_deepgreen-50"
                style={{ borderRadius: "50%" }}
                >
                6
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_deepgreen-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Personalised Probiotic <br />
                    Recommendations{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#six6"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-3">
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 35,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-9" />
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_purple-50"
                style={{ borderRadius: "50%" }}
                >
                7
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_purple-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Scientist <br /> Consultation
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#seven7"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-3">
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 35,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-9" />
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_yellow-50"
                style={{ borderRadius: "50%" }}
                >
                8
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_yellow-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Nutritionist <br />
                    Consultation{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#eight8"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-3">
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 35,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-9" />
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_deepgreen-50"
                style={{ borderRadius: "50%" }}
                >
                9
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_deepgreen-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    3-Phase <br /> Diet Plan{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#nine9"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-3">
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 35,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-9" />
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_purple-50"
                style={{ borderRadius: "50%" }}
                >
                10
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_purple-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Gastroenterologist <br />
                    Consultation{" "}
                    <svg
                    className="bi bi-info-circle"
                    viewBox="0 0 16 16"
                    data-bs-target="#ten10"
                    data-bs-toggle="modal"
                    fill="currentColor"
                    height={16}
                    width={16}
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>
                </p>
                </div>
            </div>
            <div className="col-3">
                <div
                style={{
                    backgroundColor: "#3b3941",
                    width: 5,
                    height: 35,
                    margin: "auto"
                }}
                />
            </div>
            <div className="col-9" />
            <div className="col-3 text-center m-auto">
                <p
                className="headline3 text-center p-3 mb-0 font_fourth bg_yellow-50"
                style={{ borderRadius: "50%" }}
                >
                11
                </p>
            </div>
            <div className="col-9 ps-0 m-auto">
                <div
                className="p-0 bg_yellow-50"
                style={{
                    textAlign: "center",
                    borderRadius: 20,
                    placeItems: "center",
                    width: 230,
                    height: 65,
                    margin: "auto",
                    display: "grid"
                }}
                >
                <p className="headline5 darkgrey-100 font_primary mb-0 fw-bold">
                    Repeat miGQ<sup style={{ fontWeight: 400 }}>®</sup> Gut <br />{" "}
                    Microbiome Test{" "}
                    <a href="#covered" style={{ color: "#3b3941" }}>
                    {" "}
                    <svg
                        className="bi bi-info-circle"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        height={16}
                        width={16}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                    </svg>{" "}
                    </a>
                </p>
                </div>
            </div>
            </div>
        </>
    );
}

const modalsData = [
    {
        id: 'first1',
        imageSrcSet: {
            avif: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/step_one.avif',
            webp: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/step_one.webp',
            png: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/step_one.png',
        },
        description: 'Easily collect your stool sample at home with our non-invasive kit, simplifying the process without appointments or complex procedures. Everything you need is included for privacy and convenience.',
        bgClass: 'bg_purple-50'
    },
    {
        id: 'second2',
        imageSrcSet: {
            avif: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/one.avif',
            webp: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/one.webp',
            png: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/one.png',
        },
        description: 'Our Gut Health Scores, powered by proprietary algorithms and calibrated for the Indian population, delivers a concise overview of your gut health through thorough microbiome analysis.',
        bgClass: 'bg_yellow-50'
    },
    {
        id: 'third3',
        imageSrcSet: {
            avif: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/two.avif',
            webp: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/two.webp',
            png: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/two.png',
        },
        description: 'Our cutting-edge science offers a comprehensive view of your gut\'s diverse bacterial populations. We identify, categorize, and analyze microorganisms based on their impact and relative abundance.',
        bgClass: 'bg_deepgreen-50'
    },
    {
        id: 'four4',
        imageSrcSet: {
            avif: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/three.avif',
            webp: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/three.webp',
            png: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/three.png',
        },
        description: 'Our analysis emphasises key gut bacteria vital for metabolism, nutrient processing, weight management, and energy regulation through the production of essential metabolites.',
        bgClass: 'bg_purple-50'
    },
    {
        id: 'five5',
        imageSrcSet: {
            avif: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/four.avif',
            webp: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/four.webp',
            png: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/four.png',
        },
        description: 'Based on your microbiome analysis, we offer tailored dietary suggestions to improve digestive health, all geared towards optimizing gut health and overall well-being.',
        bgClass: 'bg_yellow-50'
    },
    {
        id: 'six6',
        imageSrcSet: {
            avif: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/five.avif',
            webp: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/five.webp',
            png: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/five.png',
        },
        description: 'Based on your unique gut microbiome, our experts identify beneficial bacterial strains to support digestive health, immunity, and overall well-being through targeted supplementation.',
        bgClass: 'bg_deepgreen-50'
    },
    {
        id: 'seven7',
        imageSrcSet: {
            avif: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/six.avif',
            webp: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/six.webp',
            png: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/six.png',
        },
        description: 'Our leading scientists translate cutting-edge research into actionable insights during consultations, simplifying complex scientific data to help you understand your unique gut microbiome profile.',
        bgClass: 'bg_purple-50'
    },
    {
        id: 'eight8',
        imageSrcSet: {
            avif: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/seven.avif',
            webp: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/seven.webp',
            png: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/seven.png',
        },
        description: 'Our expert nutritionists prioritise your holistic wellness by providing tailored nutrition plans based on your unique gut microbiome, providing ongoing support and adjustments for optimal gut health.',
        bgClass: 'bg_yellow-50'
    },
    {
        id: 'nine9',
        imageSrcSet: {
            avif: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/eight.avif',
            webp: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/eight.webp',
            png: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/eight.png',
        },
        description: 'Our expert nutritionists tailor personalised dietary plans to align with your gut microbiome test results and health objectives, guiding you through a 3-phase diet plan—Gut Reboot, Gut Rebuild, and Gut Retain—for practical and sustainable recommendations.',
        bgClass: 'bg_deepgreen-50'
    },
    {
        id: 'ten10',
        imageSrcSet: {
            avif: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/nine.avif',
            webp: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/nine.webp',
            png: 'https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/nine.png',
        },
        description: 'Get a thorough medical evaluation of your gut health from our experienced gastroenterologists, offering expert advice and interventions as needed.',
        bgClass: 'bg_purple-50'
    },

];

const Modal = ({ id, imageSrcSet, description }) => {
    return (
        <div
            className="modal fade"
            aria-hidden="true"
            aria-labelledby={`${id}Label`}
            id={id}
            tabIndex={-1}
        >
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: 500 }}>
                <div className="modal-content bg_purple-50" style={{ borderRadius: 20 }}>
                    <div className="modal-body">
                        <div className="text-end mb-2">
                            <button
                                aria-label="Close"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                type="button"
                            />
                        </div>
                        <div className="text-center">
                            <picture>
                                <source srcSet={imageSrcSet.avif} type="image/avif" />
                                <source srcSet={imageSrcSet.webp} type="image/webp" />
                                <img
                                    className="img-fluid webhide"
                                    alt="image"
                                    decoding="async"
                                    loading="lazy"
                                    src={imageSrcSet.png}
                                    width={200}
                                />
                            </picture>
                            <picture>
                                <source srcSet={imageSrcSet.avif} type="image/avif" />
                                <source srcSet={imageSrcSet.webp} type="image/webp" />
                                <img
                                    className="img-fluid mobhide"
                                    alt="image"
                                    decoding="async"
                                    loading="lazy"
                                    src={imageSrcSet.png}
                                    width={400}
                                />
                            </picture>
                        </div>
                        <p className="title3 darkgrey-100 fw-bold font_primary">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Covered;
