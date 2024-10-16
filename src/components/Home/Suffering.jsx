import React from 'react';
import suffering from '/src/assets/svg/suffering.svg';

const Suffering = () => {
    return (
        <>
            <section className="scroll-top" id="suffering">
                <svg viewBox="0 0 375 22" className="mb-0" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M375 22H0V0h375z" fill="#3B3941"></path>
                    <path
                        d="M375 22l-20.833-1.5172c-20.834-1.5173-62.5-4.5518-104.167-6.9793-41.667-2.4782-83.333-4.29891-125-3.99546-41.6667.35402-83.3333 2.88276-104.1667 4.14716L.000014 14.9195V0H375v22z"
                        fill="#F7F8F3"></path>
                </svg>
                <div className="container-fluid p-0 bg_darkgrey-100" style={{ marginTop: '-1px' }}>
                    <div className="container-fluid containerframe remove-padding component-padding">
                        <p className="headline2 fw-normal text-center mb-0 font_primary purewhite-100">Are you suffering from…
                        </p>
                        <div className="nav-tabs border-0">
                            <ul className="nav nav-pills common-margin" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation" style={{ pointerEvents: 'none' }}>
                                    <button
                                        className="nav-link d-flex align-items-center fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                        aria-controls="pills-constipation" aria-selected="false" data-bs-target="#pills-constipation"
                                        data-bs-toggle="pill" id="pills-constipation-tab" role="tab" type="button">
                                        <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/> Constipation
                                    </button>
                                </li>
                                <a data-bs-target="#sufferingformmodal" data-bs-toggle="modal" href="" style={{ pointerEvents: 'none', textDecoration: 'none' }}>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link d-flex align-items-center fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                            aria-controls="pills-ibs" aria-selected="false" data-bs-target="#pills" data-bs-toggle="pill"
                                            id="pills-ibs-tab" role="tab" type="button">
                                            <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/> Depression
                                        </button>
                                    </li>
                                </a>
                                <li className="nav-item" role="presentation" style={{ pointerEvents: 'none' }}>
                                    <button
                                        className="nav-link d-flex align-items-center fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                        aria-controls="pills-acidity" aria-selected="false" data-bs-target="#pills-acidity" data-bs-toggle="pill"
                                        id="pills-acidity-tab" role="tab" type="button">
                                        <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/> Acidity
                                    </button>
                                </li>
                                <a data-bs-target="#sufferingformmodal" data-bs-toggle="modal" href="" style={{ pointerEvents: 'none', textDecoration: 'none' }}>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link d-flex align-items-center fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                            aria-controls="pills-ibs" aria-selected="false" data-bs-target="#pills" data-bs-toggle="pill"
                                            id="pills-ibs-tab" role="tab" type="button">
                                            <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/> Gas
                                        </button>
                                    </li>
                                </a>
                                <li className="nav-item" role="presentation" style={{ pointerEvents: 'none' }}>
                                    <button
                                        className="nav-link d-flex align-items-center text-uppercase fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                        aria-controls="pills-pcos" aria-selected="true" data-bs-target="#pills-pcos" data-bs-toggle="pill"
                                        id="pills-pcos-tab" role="tab" type="button">
                                        <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/> PCOS
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation" style={{ pointerEvents: 'none' }}>
                                    <button
                                        className="nav-link d-flex align-items-center text-uppercase fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                        aria-controls="pills-ibs" aria-selected="false" data-bs-target="#pills-ibs" data-bs-toggle="pill"
                                        id="pills-ibs-tab" role="tab" type="button">
                                        <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/> IBS
                                    </button>
                                </li>
                                <a data-bs-target="#sufferingformmodal" data-bs-toggle="modal" href="" style={{ pointerEvents: 'none', textDecoration: 'none' }}>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link d-flex align-items-center fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                            aria-controls="pills-ibs" aria-selected="false" data-bs-target="#pills" data-bs-toggle="pill"
                                            id="pills-ibs-tab" role="tab" type="button">
                                            <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/> Diarrhoea
                                        </button>
                                    </li>
                                </a>
                                <a data-bs-target="#sufferingformmodal" data-bs-toggle="modal" href="" style={{ pointerEvents: 'none', textDecoration: 'none' }}>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link d-flex align-items-center fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                            aria-controls="pills-ibs" aria-selected="false" data-bs-target="#pills" data-bs-toggle="pill"
                                            id="pills-ibs-tab" role="tab" type="button">
                                            <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/> Anxiety
                                        </button>
                                    </li>
                                </a>
                                <a data-bs-target="#sufferingformmodal" data-bs-toggle="modal" href="" style={{ pointerEvents: 'none', textDecoration: 'none' }}>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link d-flex align-items-center fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                            aria-controls="pills-ibs" aria-selected="false" data-bs-target="#pills" data-bs-toggle="pill"
                                            id="pills-ibs-tab" role="tab" type="button">
                                            <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/> Low energy
                                        </button>
                                    </li>
                                </a>
                                <a data-bs-target="#sufferingformmodal" data-bs-toggle="modal" href="" style={{ pointerEvents: 'none', textDecoration: 'none' }}>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link d-flex align-items-center fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                            aria-controls="pills-ibs" aria-selected="false" data-bs-target="#pills" data-bs-toggle="pill"
                                            id="pills-ibs-tab" role="tab" type="button">
                                            <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/> Weight Issues
                                        </button>
                                    </li>
                                </a>
                                <a data-bs-target="#sufferingformmodal" data-bs-toggle="modal" href="" style={{ pointerEvents: 'none', textDecoration: 'none' }}>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link d-flex align-items-center fw-bolder title1 font_primary purewhite-100 border border-white m-1 rounded-pill p-2"
                                            aria-controls="pills-ibs" aria-selected="false" data-bs-target="#pills" data-bs-toggle="pill"
                                            id="pills-ibs-tab" role="tab" type="button">
                                            <img src={suffering} alt="icon cloud" className='me-2' style={{ backgroundColor: '#fff', borderRadius: '50%',padding: '5px' }} width={30}  height={30}/>
                                            More...
                                        </button>
                                    </li>
                                </a>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" aria-labelledby="pills-constipation-tab" id="pills-constipation" role="tabpanel">
                                    <div className="row">
                                        <div className="col-md-6 m-auto">
                                            <div className="text-center">
                                                <picture>
                                                    <source
                                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/constipation.avif"
                                                        type="image/avif" />
                                                    <source
                                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/constipation.webp"
                                                        type="image/webp" />
                                                    <img className="img-fluid webhide" alt="constipation"
                                                        decoding="async" loading="lazy"
                                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/constipation.png"
                                                        width="200" />
                                                </picture>
                                                <picture>
                                                    <source
                                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/constipation.avif"
                                                        type="image/avif" />
                                                    <source
                                                        srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/constipation.webp"
                                                        type="image/webp" />
                                                    <img className="img-fluid mobhide" alt="constipation"
                                                        decoding="async" loading="lazy"
                                                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/constipation.png" />
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="col-md-6 m-auto">
                                            <p className="headline6 px-3 common-padding mb-0 fw-normal text-center purewhite-100 font_primary">
                                                "Could your gut microbiome be the key to relieving chronic constipation? Learn how beneficial bacteria play a crucial role in maintaining regular bowel movements."
                                            </p>
                                            <div className="webhide">
                                                <div className="d-block">
                                                    <a className="btn fw-bold button_primary font_secondary w-100 headline6" href="https://api.whatsapp.com/send?phone=918976995980&amp;text=Hello,%20I%20have%20a%20question%20about%20https://www.microbiome.in/">
                                                        Connect with our Experts
                                                    </a>
                                                    <a className="btn fw-bold common-margin mb-0 button_primary font_secondary w-100 headline6" href="/suffering/">
                                                        Read More ⟶
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="mobhide">
                                                <div className="d-flex">
                                                    <a className="btn fw-bold ms-2 w-100 button_primary font_secondary" href="https://api.whatsapp.com/send?phone=918976995980&amp;text=Hello,%20I%20have%20a%20question%20about%20https://www.microbiome.in/">
                                                        Connect with our Experts
                                                    </a>
                                                    <a className="btn fw-bold ms-2 button_primary font_secondary w-100 align-content-center" href="/suffering/">
                                                        Read More ⟶
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" aria-labelledby="pills-acidity-tab" id="pills-acidity" role="tabpanel"></div>
                                <div className="tab-pane fade" aria-labelledby="pills-pcos-tab" id="pills-pcos" role="tabpanel"></div>
                                <div className="tab-pane fade" aria-labelledby="pills-ibs-tab" id="pills-ibs" role="tabpanel"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg viewBox="0 0 1440 90" fill="none" style={{ marginTop: '-0.5rem' }} xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M1440 44.1634L1380 46.8655C1320 49.5966 1200 55.0008 1080 55.8725C960 56.7441 840 53.0832 720 46.8364C600 40.5896 480 31.757 360 27.8927C240 24.0284 120 25.0743 60 25.6264L-2.14577e-05 26.1494V-1.74418e-06H60C120 -1.74418e-06 240 -1.74418e-06 360 -1.74418e-06C480 -1.74418e-06 600 -1.74418e-06 720 -1.74418e-06C840 -1.74418e-06 960 -1.74418e-06 1080 -1.74418e-06C1200 -1.74418e-06 1320 -1.74418e-06 1380 -1.74418e-06H1440V44.1634Z"
                        fill="#3B3941"></path>
                </svg>
                <Modal />
            </section>
        </>
    );
}

const Modal = () => {
    return (
        <>
            <div 
                className="modal fade" 
                aria-hidden="true" 
                aria-labelledby="exampleModalLabel" 
                id="sufferingformmodal" 
                tabIndex="-1"
            >
                <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '500px' }}>
                    <div className="modal-content" style={{ backgroundColor: '#f7f8f3', borderRadius: '20px' }}>
                        <div className="text-center">
                            <p className="headline5 fw-bold greydark mb-0 mt-4" style={{ fontFamily: 'Questrial, sans-serif' }}>
                                Get to know about your gut?
                            </p>
                        </div>
                        <div className="modal-body">
                            <button 
                                className="btn-close float-end" 
                                aria-label="Close" 
                                data-bs-dismiss="modal" 
                                type="button"
                            ></button>
                            <div style={{ borderRadius: '20px' }}>
                                <form style={{ maxWidth: '500px' }}>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="exampleInputname">Full name</label>
                                        <input 
                                            className="form-control input-field-box" 
                                            aria-describedby="name" 
                                            id="exampleInputname" 
                                            style={{ backgroundColor: '#0000', maxWidth: '500px' }} 
                                        />
                                        <div className="form-text" id="name">
                                            We'll never share your name with anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="exampleInputEmail1">Email Id</label>
                                        <input 
                                            className="form-control input-field-box" 
                                            aria-describedby="emailHelp" 
                                            id="exampleInputEmail1" 
                                            style={{ backgroundColor: '#0000', maxWidth: '500px' }} 
                                            type="email" 
                                        />
                                        <div className="form-text" id="emailHelp">
                                            We'll never share your email with anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="exampleInputPassword1">Age/Gender</label>
                                        <input 
                                            className="form-control input-field-box" 
                                            id="exampleInputPassword1" 
                                            style={{ backgroundColor: '#0000', maxWidth: '500px' }} 
                                        />
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea 
                                            className="form-control input-field-box" 
                                            placeholder="Leave a comment here" 
                                            id="floatingTextarea2" 
                                            style={{ backgroundColor: '#0000', maxWidth: '500px', height: '100px' }}
                                        ></textarea>
                                        <label htmlFor="floatingTextarea2">Please describe the problem</label>
                                    </div>
                                    <div className="text-center">
                                        <button 
                                            className="btn fw-bold text-center m-auto" 
                                            style={{ color: '#fff', backgroundColor: '#009b87', borderRadius: '8px', padding: '12px 30px', fontFamily: 'DM Sans' }}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Suffering;


