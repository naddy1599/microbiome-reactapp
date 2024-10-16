import React, { useEffect, useRef } from 'react';
import '../../style/pages_css/home.css'

const Product = () => {
    return (
        <>
            <section className="scroll-top" id="products">
                <Slider/>
            </section>
        </>
    );
}

const Slider = () => {
    const currentSlide = useRef(0);
    const sliderCardsRef = useRef(null);
    const sliderContainerRef = useRef(null);
    let startX = 0;
    let isDragging = false;

    const showSlide = (index) => {
        const cards = sliderCardsRef.current.querySelectorAll('.slider-card');
        if (!cards.length) return; // Check if cards exist

        const totalSlides = cards.length;
        const cardsToShow = getCardsToShow();

        currentSlide.current = Math.max(0, Math.min(index, totalSlides - cardsToShow));

        const cardWidth = cards[0].clientWidth;
        sliderCardsRef.current.style.transform = `translateX(${-cardWidth * currentSlide.current}px)`;

        updateButtons();
        updateDots();
    };

    const changeSlide = (direction) => {
        showSlide(currentSlide.current + direction);
    };

    const getCardsToShow = () => {


        
        const width = window.innerWidth;
        if (width >= 900) return 3; // Show 3 cards
        if (width >= 600) return 2; // Show 2 cards
        return 1; // Show 1 card
    };

    const updateButtons = () => {
        const prevButton = document.querySelector('.slider-prev');
        const nextButton = document.querySelector('.slider-next');
        const totalSlides = sliderCardsRef.current.querySelectorAll('.slider-card').length;
        const cardsToShow = getCardsToShow();

        prevButton.disabled = currentSlide.current === 0; // Disable previous button at the start
        nextButton.disabled = currentSlide.current >= totalSlides - cardsToShow; // Disable next button at the end
    };

    const createDots = () => {
        const dotsContainer = document.querySelector('.dots');
        dotsContainer.innerHTML = ''; // Clear existing dots
        const totalSlides = sliderCardsRef.current.querySelectorAll('.slider-card').length;
        const cardsToShow = getCardsToShow();

        const totalDots = Math.ceil(totalSlides / cardsToShow);

        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                const indexToShow = i * cardsToShow;
                showSlide(indexToShow);
            });
            dotsContainer.appendChild(dot);
        }
        updateDots(); // Call this after creating dots
    };

    const updateDots = () => {
        const dots = document.querySelectorAll('.dot');
        const totalSlides = sliderCardsRef.current.querySelectorAll('.slider-card').length;
        const cardsToShow = getCardsToShow();

        let activeDotIndex = Math.floor(currentSlide.current / cardsToShow);
        if (currentSlide.current >= totalSlides - cardsToShow) {
            activeDotIndex = dots.length - 1;
        }
        if (currentSlide.current === 0) {
            activeDotIndex = 0;
        }

        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === activeDotIndex) {
                dot.classList.add('active'); // Add active class to the current dot
            }
        });
    };

    // Touch and Mouse Event Handlers
    const handleStart = (event) => {
        startX = event.touches ? event.touches[0].clientX : event.clientX;
        isDragging = true;
    };

    const handleMove = (event) => {
        if (!isDragging) return;
        const currentX = event.touches ? event.touches[0].clientX : event.clientX;
        const diffX = startX - currentX;

        // Visual feedback
        if (sliderCardsRef.current) {
            const cardWidth = sliderCardsRef.current.querySelector('.slider-card').clientWidth;
            sliderCardsRef.current.style.transform = `translateX(${-currentSlide.current * cardWidth + diffX}px)`;
        }
    };

    const handleEnd = (event) => {
        if (!isDragging) return;
        isDragging = false;
        const currentX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
        const diffX = startX - currentX;

        const cards = sliderCardsRef.current.querySelectorAll('.slider-card');
        const totalSlides = cards.length;
        const cardsToShow = getCardsToShow();

        if (currentSlide.current >= totalSlides - cardsToShow && diffX > 0) {
            showSlide(currentSlide.current); // Reset to current slide position
            return;
        }

        if (currentSlide.current === 0 && diffX < 0) {
            showSlide(currentSlide.current); // Reset to current slide position
            return;
        }

        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                changeSlide(1); // Swipe left to next slide
            } else {
                changeSlide(-1); // Swipe right to previous slide
            }
        } else {
            showSlide(currentSlide.current); // Reset position if swipe is not enough
        }
    };

    useEffect(() => {
        showSlide(currentSlide.current);
        updateButtons();
        createDots();

        const sliderCards = sliderCardsRef.current;
        if (sliderCards) {
            sliderCards.addEventListener('touchstart', handleStart);
            sliderCards.addEventListener('touchmove', handleMove);
            sliderCards.addEventListener('touchend', handleEnd);
            sliderCards.addEventListener('mousedown', handleStart);
            sliderCards.addEventListener('mousemove', handleMove);
            sliderCards.addEventListener('mouseup', handleEnd);
            sliderCards.addEventListener('mouseleave', handleEnd);
        }

        const resizeHandler = () => {
            showSlide(currentSlide.current);
            createDots();
        };

        window.addEventListener('resize', resizeHandler);

        return () => {
            if (sliderCards) {
                sliderCards.removeEventListener('touchstart', handleStart);
                sliderCards.removeEventListener('touchmove', handleMove);
                sliderCards.removeEventListener('touchend', handleEnd);
                sliderCards.removeEventListener('mousedown', handleStart);
                sliderCards.removeEventListener('mousemove', handleMove);
                sliderCards.removeEventListener('mouseup', handleEnd);
                sliderCards.removeEventListener('mouseleave', handleEnd);
            }
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <>
            <div className="bg_sup">
                <div className="container-fluid containerframe remove-padding component-padding position-relative">
                    <p
                    className="headline2 fw-normal darkgrey-100 component-margin mt-0 mobhide font_primary"
                    style={{ width: "70%" }}
                    >
                    Your gut, Your choice
                    </p>
                    <p
                    className="headline2 fw-normal darkgrey-100 component-margin mt-0 webhide font_primary"
                    style={{ width: "70%" }}
                    >
                    Your gut, <br /> Your choice
                    </p>
                    <div className="row">
                    <div className="col-12 m-auto">
                        <div className="slider">
                        <div className="slider-cards">
                            <div className="slider-card">
                            <a
                                
                                style={{ textDecoration: "none" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal4"
                            >
                                <picture>
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/blue_new_kit_purple.avif"
                                    type="image/avif"
                                />
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/blue_new_kit_purple.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/blue_new_kit_purple.png"
                                    style={{ borderRadius: 30 }}
                                    className="img-fluid"
                                    alt="migq Rapid kit"
                                    decoding="async"
                                    loading="lazy"
                                />
                                </picture>
                                <div style={{ position: "relative" }}>
                                <div
                                    style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 13,
                                    width: 138,
                                    height: 50,
                                    textAlign: "end",
                                    color: "#04395E"
                                    }}
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="10 days
                                                    <br> Turn Around Time "
                                >
                                    tat
                                </div>
                                </div>
                                <div className="webhide">
                                <p className="headline4 fw-bold darkgrey-100 mt-4 mb-0 ps-3 font_secondary">
                                    miGQ<sup style={{ fontWeight: 400 }}>®</sup> Rapid Test
                                </p>
                                <p className="headline6 fw-normal darkgrey-100 ps-3 mb-2 mt-1 font_primary">
                                    You are a gastroenterologist looking to rapidly scan your
                                    patient’s gut for clinically relevant microorganisms.
                                </p>
                                <p className="headline4 fw-bold mb-4 darkgrey-100 ps-3 font_primary">
                                    ₹ 4,999
                                    <span
                                    className="fw-normal greymed text-decoration-line-through mb-0"
                                    style={{ fontSize: "medium" }}
                                    >
                                    9,999
                                    </span>
                                </p>
                                </div>
                                <div className="mobhide">
                                <p className="headline5 fw-bold darkgrey-100 mt-4 mb-0 ps-3 font_secondary">
                                    miGQ<sup style={{ fontWeight: 400 }}>®</sup> Rapid Test
                                </p>
                                <p className="title1 fw-normal darkgrey-100 ps-3 mb-2 mt-1 font_primary">
                                    You are a gastroenterologist looking to rapidly scan your
                                    patient’s gut for clinically relevant microorganisms.
                                </p>
                                <p className="headline5 fw-bold mb-4 darkgrey-100 ps-3 font_primary">
                                    ₹ 4,999
                                    <span
                                    className="fw-normal greymed text-decoration-line-through mb-0"
                                    style={{ fontSize: "medium" }}
                                    >
                                    9,999
                                    </span>
                                </p>
                                </div>
                            </a>
                            </div>
                            <div className="slider-card">
                            <a
                                
                                style={{ textDecoration: "none" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal2"
                            >
                                <picture>
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/pink_new_kit_orange.avif"
                                    type="image/avif"
                                />
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/pink_new_kit_orange.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/pink_new_kit_orange.png"
                                    style={{ borderRadius: 30 }}
                                    className="img-fluid"
                                    alt="migq Comprehensive kit"
                                    decoding="async"
                                    loading="lazy"
                                />
                                </picture>
                                <div style={{ position: "relative" }}>
                                <div
                                    style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 13,
                                    width: 138,
                                    height: 50,
                                    textAlign: "end",
                                    color: "#04395E"
                                    }}
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="21 days
                                                    <br> Turn Around Time "
                                >
                                    tat
                                </div>
                                </div>
                                <div className="webhide">
                                <p className="headline4 fw-bold darkgrey-100 mt-4 mb-0 ps-3 font_secondary">
                                    miGQ<sup style={{ fontWeight: 400 }}>®</sup> Comprehensive
                                    Test
                                </p>
                                <p className="headline6 fw-normal darkgrey-100 ps-3 mb-2 mt-1 font_primary">
                                    You have pressing health concerns and require end-to-end
                                    expert guidance.
                                </p>
                                <p className="headline4 fw-bold mb-4 darkgrey-100 ps-3 font_primary">
                                    ₹ 14,999
                                    <span
                                    className="fw-normal greymed text-decoration-line-through mb-0"
                                    style={{ fontSize: "medium" }}
                                    >
                                    17,999
                                    </span>
                                </p>
                                </div>
                                <div className="mobhide">
                                <p className="headline5 fw-bold darkgrey-100 mt-4 mb-0 ps-3 font_secondary">
                                    miGQ<sup style={{ fontWeight: 400 }}>®</sup> Comprehensive
                                    Test
                                </p>
                                <p className="title1 fw-normal darkgrey-100 ps-3 mb-2 mt-1 font_primary">
                                    You have pressing health concerns and require end-to-end
                                    expert guidance.
                                </p>
                                <p className="headline5 fw-bold mb-4 darkgrey-100 ps-3 font_primary">
                                    ₹ 14,999
                                    <span
                                    className="fw-normal greymed text-decoration-line-through mb-0"
                                    style={{ fontSize: "medium" }}
                                    >
                                    17,999
                                    </span>
                                </p>
                                </div>
                            </a>
                            </div>
                            <div className="slider-card">
                            <a
                                
                                style={{ textDecoration: "none" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal1"
                            >
                                <picture>
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/blue_new_kit_yellow.avif"
                                    type="image/avif"
                                />
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/blue_new_kit_yellow.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/blue_new_kit_yellow.png"
                                    style={{ borderRadius: 30 }}
                                    className="img-fluid"
                                    alt="migq Dysbiosis kit"
                                    decoding="async"
                                    loading="lazy"
                                />
                                </picture>
                                <div style={{ position: "relative" }}>
                                <div
                                    style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 13,
                                    width: 138,
                                    height: 50,
                                    textAlign: "end",
                                    color: "#04395E"
                                    }}
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="10 days
                                                    <br> Turn Around Time "
                                >
                                    tat
                                </div>
                                </div>
                                <div className="webhide">
                                <p className="headline4 fw-bold darkgrey-100 mt-4 mb-0 ps-3 font_secondary">
                                    miGQ<sup style={{ fontWeight: 400 }}>®</sup> Dysbiosis Test
                                </p>
                                <p className="headline6 fw-normal darkgrey-100 ps-3 mb-2 mt-1 font_primary">
                                    You simply want to check if your gut microbiome is balanced
                                    or not.
                                </p>
                                <p className="headline4 fw-bold mb-4 darkgrey-100 ps-3 font_primary">
                                    ₹ 8,999
                                    <span
                                    className="fw-normal greymed text-decoration-line-through mb-0"
                                    style={{ fontSize: "medium" }}
                                    >
                                    14,999
                                    </span>
                                </p>
                                </div>
                                <div className="mobhide">
                                <p className="headline5 fw-bold darkgrey-100 mt-4 mb-0 ps-3 font_secondary">
                                    miGQ<sup style={{ fontWeight: 400 }}>®</sup> Dysbiosis Test
                                </p>
                                <p className="title1 fw-normal darkgrey-100 ps-3 mb-2 mt-1 font_primary">
                                    You simply want to check if your gut microbiome is balanced
                                    or not.
                                </p>
                                <p className="headline5 fw-bold mb-4 darkgrey-100 ps-3 font_primary">
                                    ₹ 8,999
                                    <span
                                    className="fw-normal greymed text-decoration-line-through mb-0"
                                    style={{ fontSize: "medium" }}
                                    >
                                    14,999
                                    </span>
                                </p>
                                </div>
                            </a>
                            </div>
                            <div className="slider-card">
                            <a
                                
                                style={{ textDecoration: "none" }}
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal3"
                            >
                                <picture>
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/pink_new_kit_green.avif"
                                    type="image/avif"
                                />
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/pink_new_kit_green.webp"
                                    type="image/webp"
                                />
                                <img
                                    src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/version_two/img_set/product_image/pink_new_kit_green.png"
                                    style={{ borderRadius: 30 }}
                                    className="img-fluid"
                                    alt="migq Lite kit"
                                    decoding="async"
                                    loading="lazy"
                                />
                                </picture>
                                <div style={{ position: "relative" }}>
                                <div
                                    style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: 13,
                                    width: 138,
                                    height: 50,
                                    textAlign: "end",
                                    color: "#04395E"
                                    }}
                                    data-bs-toggle="tooltip"
                                    data-bs-html="true"
                                    title="42 days
                                                    <br> Turn Around Time "
                                >
                                    tat
                                </div>
                                </div>
                                <div className="webhide">
                                <p className="headline4 fw-bold darkgrey-100 mt-4 mb-0 ps-3 font_secondary">
                                    miGQ<sup style={{ fontWeight: 400 }}>®</sup> Lite Test
                                </p>
                                <p className="headline6 fw-normal darkgrey-100 ps-3 mb-2 mt-1 font_primary">
                                    You do not require nutritional guidance and have no pressing
                                    health concerns.
                                </p>
                                <p className="headline4 fw-bold mb-4 darkgrey-100 ps-3 font_primary">
                                    ₹ 11,999
                                    <span
                                    className="fw-normal greymed text-decoration-line-through mb-0"
                                    style={{ fontSize: "medium" }}
                                    >
                                    12,999
                                    </span>
                                </p>
                                </div>
                                <div className="mobhide">
                                <p className="headline5 fw-bold darkgrey-100 mt-4 mb-0 ps-3 font_secondary">
                                    miGQ<sup style={{ fontWeight: 400 }}>®</sup> Lite Test
                                </p>
                                <p className="title1 fw-normal darkgrey-100 ps-3 mb-2 mt-1 font_primary">
                                    You do not require nutritional guidance and have no pressing
                                    health concerns.
                                </p>
                                <p className="headline5 fw-bold mb-4 darkgrey-100 ps-3 font_primary">
                                    ₹ 11,999
                                    <span
                                    className="fw-normal greymed text-decoration-line-through mb-0"
                                    style={{ fontSize: "medium" }}
                                    >
                                    12,999
                                    </span>
                                </p>
                                </div>
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="dots" />
                    </div>
                    </div>
                    <div className="slider-button">
                    <button className="slider-prev" onClick={() => changeSlide(-1)}></button>
                    <button className="slider-next" onClick={() => changeSlide(1)}></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
