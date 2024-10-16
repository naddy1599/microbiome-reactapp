import React from 'react';
import navburger from '/src/assets/svg/nav_burger.svg';
import OffCanvasMenu from '/src/components/Navbar/Offcanvas.jsx';

const Navbar = () => {
    window.addEventListener('scroll', function() {
        var navbar =  document.querySelector('.navbar');
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        if (scrollPosition > 0){
            navbar.classList.add('scroll-blur');
            navbar.classList.remove("nav-transparent");
            if (scrollPosition >= 800) {
                navbar.classList.add("nav-colored");
                navbar.classList.remove("nav-transparent");
            } else {
                navbar.classList.add("nav-transparent");
                navbar.classList.remove("nav-colored");
            }
        }
    });
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg nav-transparent">
                <div className="container-fluid containerframe remove-padding">
                <button
                        aria-controls="offcanvasExample"
                        className="navbar-toggler"
                        data-bs-target="#offcanvasExample"
                        data-bs-toggle="offcanvas"
                        style={{ boxShadow: 'none', border: 'none' }}
                        type="button"
                    >
                        <img src={navburger} alt="menu" width={45}  height={45}/>
                    </button>
                    <OffCanvasMenu />
                    <a className="navbar-brand mobhide" href="#">
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
                        height="48"
                        src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/footer/microbiomelogo.png"
                        width="158"
                        />
                    </picture>
                    </a>
                    <a className="navbar-brand webhide me-0" href="#" style={{ marginLeft: '20px' }}>
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
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 me-2 mb-lg-0" style={{ alignItems: 'center' }}>
                        <li className="nav-item dropdown icon dropmenu">
                        <div className="d-flex">
                            <a
                            className="nav-link title2 font_primary pb-0 darkgrey-100"
                            aria-expanded="false"
                            data-bs-toggle="dropdown"
                            id="navbarDropdown"
                            role="button"
                            >
                            PRODUCTS
                            </a>
                            <svg viewBox="0 0 23 23" fill="none" height="24" style={{ paddingTop: '2px' }} width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 10L10.5052 17.3183C11.3008 18.2134 12.6992 18.2134 13.4948 17.3183L20 10"
                                stroke="#3C2E34" strokeWidth="1.5"
                            />
                            </svg>
                        </div>
                        <ul className="dropdown-menu bg_purewhite mt-1" aria-labelledby="navbarDropdown" style={{ border: 'none', borderRadius: '16px' }}>
                            <li>
                            <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial', textTransform: 'uppercase' }}>
                                miGQ<sup style={{ fontWeight: 400 }}>®</sup> Rapid
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial', textTransform: 'uppercase' }}>
                                miGQ<sup style={{ fontWeight: 400 }}>®</sup> Comprehensive Test
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial', textTransform: 'uppercase' }}>
                                miGQ<sup style={{ fontWeight: 400 }}>®</sup> Dysbiosis Test
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial', textTransform: 'uppercase' }}>
                                miGQ<sup style={{ fontWeight: 400 }}>®</sup> Lite Test
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown icon me-2 ms-2 dropmenu">
                        <div className="d-flex">
                            <a
                            className="nav-link title2 font_primary pb-0 darkgrey-100"
                            aria-expanded="false"
                            data-toggle="dropdown"
                            id="navbarDropdown2"
                            role="button"
                            >
                            LEARN
                            </a>
                            <svg viewBox="0 0 24 24" fill="none" height="24" style={{ paddingTop: '2px' }} width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 10L10.5052 17.3183C11.3008 18.2134 12.6992 18.2134 13.4948 17.3183L20 10"
                                stroke="#3C2E34" strokeWidth="1.5"
                            />
                            </svg>
                        </div>
                        <ul className="dropdown-menu bg_purewhite mt-1 title2 font_primary darkgrey-100" aria-labelledby="navbarDropdown2" style={{ border: 'none', borderRadius: '16px' }}>
                            <li>
                            <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial' }}>
                                WHAT IS MICROBIOME
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial' }}>
                                OUR APPROACH
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial' }}>
                                BLOG
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown icon dropmenu">
                        <div className="d-flex">
                            <a
                            className="nav-link title2 font_primary pb-0 darkgrey-100"
                            aria-expanded="false"
                            data-toggle="dropdown"
                            id="navbarDropdown2"
                            role="button"
                            >
                            ABOUT US
                            </a>
                            <svg viewBox="0 0 24 24" fill="none" height="24" style={{ paddingTop: '2px' }} width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 10L10.5052 17.3183C11.3008 18.2134 12.6992 18.2134 13.4948 17.3183L20 10"
                                stroke="#3C2E34" strokeWidth="1.5"
                            />
                            </svg>
                        </div>
                        <ul className="dropdown-menu bg_purewhite mt-1 title2 font_primary darkgrey-100" aria-labelledby="navbarDropdown2" style={{ border: 'none', borderRadius: '16px' }}>
                            <li>
                            <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial' }}>
                                WHAT WE DO
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial' }}>
                                FOUNDER'S STORY
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial' }}>
                                MEET THE TEAM
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="mt-1 ms-2 btn button_secondary font_secondary fw-bold" href="#" id="navlink" style={{ letterSpacing: '1px' }}>
                            FAQs
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="dropdown dropmenu">
                            <a
                                className="icon mobhide"
                                aria-expanded="false"
                                data-toggle="dropdown"
                                id="navbarDropdown2"
                                role="button"
                                style={{ color: '#d90368' }}
                            >
                                <svg viewBox="0 0 24 24" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.0026 2.83398C6.93985 2.83398 2.83594 6.9379 2.83594 12.0007C2.83594 17.0634 6.93985 21.1673 12.0026 21.1673C17.0654 21.1673 21.1693 17.0634 21.1693 12.0007C21.1693 6.9379 17.0654 2.83398 12.0026 2.83398Z"
                                        stroke="#3b3941"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                    <path
                                        d="M4.91406 17.8172C4.91406 17.8172 6.95731 15.2083 11.999 15.2083C17.0406 15.2083 19.0848 17.8172 19.0848 17.8172M11.999 12C12.7283 12 13.4278 11.7103 13.9435 11.1945C14.4592 10.6788 14.749 9.97935 14.749 9.25C14.749 8.52065 14.4592 7.82118 13.9435 7.30546C13.4278 6.78973 12.7283 6.5 11.999 6.5C11.2696 6.5 10.5702 6.78973 10.0544 7.30546C9.53871 7.82118 9.24898 8.52065 9.24898 9.25C9.24898 9.97935 9.53871 10.6788 10.0544 11.1945C10.5702 11.7103 11.2696 12 11.999 12V12Z"
                                        stroke="#3b3941"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </a>
                            <ul className="dropdown-menu bg_purewhite mt-1 title2 font_primary darkgrey-100" aria-labelledby="navbarDropdown2" style={{ border: 'none', borderRadius: '16px' }}>
                                <li className="icon">
                                    <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial' }}>
                                        <svg className="bi bi-person" viewBox="0 0 16 16" fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                                                strokeWidth="1.5"
                                            />
                                        </svg>
                                        PROFILE
                                    </a>
                                </li>
                                <li className="icon">
                                    <a className="dropdown-item title2 font_primary darkgrey-100" href="#" style={{ textAlign: 'initial' }}>
                                        <svg className="bi bi-box-arrow-right" viewBox="0 0 16 16" fill="currentColor" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                                                fillRule="evenodd"
                                            />
                                            <path
                                                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                        LOGOUT
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a className="icon mobhide" style={{ padding: '9px 24px' }} href="#" id="navlink">
                            <svg viewBox="0 0 32 32" fill="none" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.2381 24.0003H11.2696C10.8049 24.0003 10.4014 23.6802 10.2958 23.2277L6.60899 7.43959C6.50332 6.98708 6.09987 6.66699 5.63518 6.66699H4M10.4656 20.6987H23.4391C23.9064 20.6987 24.3113 20.3752 24.4145 19.9195L26.3904 11.1893C26.5319 10.5638 26.0564 9.96858 25.415 9.96858H8.48972C7.84837 9.96858 7.37281 10.5638 7.51439 11.1893L9.4903 19.9195C9.59344 20.3752 9.99839 20.6987 10.4656 20.6987Z"
                                    stroke="#3b3941"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M22.0026 26.6663C22.3708 26.6663 22.6693 26.3679 22.6693 25.9997C22.6693 25.6315 22.3708 25.333 22.0026 25.333C21.6344 25.333 21.3359 25.6315 21.3359 25.9997C21.3359 26.3679 21.6344 26.6663 22.0026 26.6663Z"
                                    stroke="#3b3941"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M12.6667 26.6663C13.0349 26.6663 13.3333 26.3679 13.3333 25.9997C13.3333 25.6315 13.0349 25.333 12.6667 25.333C12.2985 25.333 12 25.6315 12 25.9997C12 26.3679 12.2985 26.6663 12.6667 26.6663Z"
                                    stroke="#3b3941"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </a>
                        <a className="webhide" href="#" id="navlink1" style={{ marginRight: '24px' }}>
                            <svg viewBox="0 0 24 24" fill="none" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.0026 2.83398C6.93985 2.83398 2.83594 6.9379 2.83594 12.0007C2.83594 17.0634 6.93985 21.1673 12.0026 21.1673C17.0654 21.1673 21.1693 17.0634 21.1693 12.0007C21.1693 6.9379 17.0654 2.83398 12.0026 2.83398Z"
                                    stroke="#3b3941"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M4.91406 17.8172C4.91406 17.8172 6.95731 15.2083 11.999 15.2083C17.0406 15.2083 19.0848 17.8172 19.0848 17.8172M11.999 12C12.7283 12 13.4278 11.7103 13.9435 11.1945C14.4592 10.6788 14.749 9.97935 14.749 9.25C14.749 8.52065 14.4592 7.82118 13.9435 7.30546C13.4278 6.78973 12.7283 6.5 11.999 6.5C11.2696 6.5 10.5702 6.78973 10.0544 7.30546C9.53871 7.82118 9.24898 8.52065 9.24898 9.25C9.24898 9.97935 9.53871 10.6788 10.0544 11.1945C10.5702 11.7103 11.2696 12 11.999 12V12Z"
                                    stroke="#3b3941"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </a>
                        <a className="webhide" href="#" id="navlink1">
                            <svg viewBox="0 0 32 32" fill="none" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.2381 24.0003H11.2696C10.8049 24.0003 10.4014 23.6802 10.2958 23.2277L6.60899 7.43959C6.50332 6.98708 6.09987 6.66699 5.63518 6.66699H4M10.4656 20.6987H23.4391C23.9064 20.6987 24.3113 20.3752 24.4145 19.9195L26.3904 11.1893C26.5319 10.5638 26.0564 9.96858 25.415 9.96858H8.48972C7.84837 9.96858 7.37281 10.5638 7.51439 11.1893L9.4903 19.9195C9.59344 20.3752 9.99839 20.6987 10.4656 20.6987Z"
                                    stroke="#3b3941"
                                    strokeLinecap="square"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M22.0026 26.6663C22.3708 26.6663 22.6693 26.3679 22.6693 25.9997C22.6693 25.6315 22.3708 25.333 22.0026 25.333C21.6344 25.333 21.3359 25.6315 21.3359 25.9997C21.3359 26.3679 21.6344 26.6663 22.0026 26.6663Z"
                                    stroke="#3b3941"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M12.6667 26.6663C13.0349 26.6663 13.3333 26.3679 13.3333 25.9997C13.3333 25.6315 13.0349 25.333 12.6667 25.333C12.2985 25.333 12 25.6315 12 25.9997C12 26.3679 12.2985 26.6663 12.6667 26.6663Z"
                                    stroke="#3b3941"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </a>
                        <a className="btn button_primary font_secondary fw-bold mobhide" href="/#products" id="navbtn">
                            BOOK NOW
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
