import React from 'react';

const Testimonials = () => {
    return (
        <>
            <section className="scroll-top" id="testimonials">
            <div className="bg_sup">
                <div className="container-fluid containerframe component-padding">
                <div className="d-flex gap-2 justify-content-center align-items-center">
                    <img
                    alt="plum_heart"
                    className="mobhide"
                    height={160}
                    loading="lazy"
                    src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/new_icons/plum_heart.svg"
                    width={160}
                    />
                    <h2 className="headline2 fw-normal font_primary indigo-100 mb-0 mobhide">
                    by Nutritionists, Gastroenterologists and Customers
                    </h2>
                </div>
                <div className="d-flex gap-1 justify-content-center align-items-center">
                    <img
                    alt="plum_heart"
                    className="webhide"
                    height={75}
                    loading="lazy"
                    src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/new_icons/plum_heart.svg"
                    width={75}
                    />
                    <h2 className="headline2 fw-normal font_primary indigo-100 mb-0 webhide">
                    by Nutritionists, Gastroenterologists and Customers
                    </h2>
                </div>
                <div className="conatiner common-margin mb-0">
                    <div
                    className="carousel slide"
                    data-bs-ride="carousel"
                    id="carouselExampleIndicators_testimonial"
                    >
                    <div className="carousel-indicators mb-2">
                        <button
                        aria-label="Slide 1"
                        aria-current="true"
                        className="active"
                        data-bs-slide-to={0}
                        data-bs-target="#carouselExampleIndicators_testimonial"
                        style={{ borderRadius: 30, width: 40, height: 8 }}
                        type="button"
                        />
                        <button
                        aria-label="Slide 2"
                        data-bs-slide-to={1}
                        data-bs-target="#carouselExampleIndicators_testimonial"
                        style={{ borderRadius: 30, width: 40, height: 8 }}
                        type="button"
                        />
                        <button
                        aria-label="Slide 3"
                        data-bs-slide-to={2}
                        data-bs-target="#carouselExampleIndicators_testimonial"
                        style={{ borderRadius: 30, width: 40, height: 8 }}
                        type="button"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={2000}>
                        <div className="testimonial_banner">
                            <div
                            className="row g-0"
                            style={{ maxWidth: 1035, margin: "auto" }}
                            >
                            <div className="col-md-4 text-center">
                                <picture>
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/testimonial/versione_two/mikitaagandhi.avif"
                                    type="image/avif"
                                />
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/testimonial/versione_two/mikitaagandhi.webp"
                                    type="image/webp"
                                />
                                <img
                                    alt="image of Mikitaa Gandhi"
                                    className="card-img img-fluid testimonial-image"
                                    height={448}
                                    loading="lazy"
                                    src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/testimonial/versione_two/mikitaagandhi.png"
                                    width={345}
                                />
                                </picture>
                            </div>
                            <div className="col-md-8 m-auto">
                                <div className="card-body pb-0 text-center">
                                <h4 className="headline4 indigo-50 fw-bold font_secondary">
                                    Accurate Diagnosis
                                </h4>
                                <p className="headline6 fw-normal font_primary darkgrey-100">
                                    The stool microbiome analysis test is a great tool to
                                    look at detailed insights about the real time status of
                                    the microbiome of an individual. I would highly
                                    recommend people suffering from gut health issues to get
                                    their microbiome stool test for accurate diagnosis.
                                </p>
                                <div>
                                    <svg
                                    viewBox="0 0 144 56"
                                    className="mb-2"
                                    fill="none"
                                    height={56}
                                    width={144}
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M12.8 16L17.151 23.3637L25.6 25.1672L19.84 31.5217L20.7108 40L12.8 36.5637L4.88917 40L5.76 31.5217L0 25.1672L8.44904 23.3637L12.8 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M42.4016 16L46.7525 23.3637L55.2016 25.1672L49.4416 31.5217L50.3124 40L42.4016 36.5637L34.4907 40L35.3616 31.5217L29.6016 25.1672L38.0506 23.3637L42.4016 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M71.9992 16L76.3502 23.3637L84.7992 25.1672L79.0392 31.5217L79.9101 40L71.9992 36.5637L64.0884 40L64.9592 31.5217L59.1992 25.1672L67.6483 23.3637L71.9992 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M101.601 16L105.952 23.3637L114.401 25.1672L108.641 31.5217L109.512 40L101.601 36.5637L93.6899 40L94.5608 31.5217L88.8008 25.1672L97.2498 23.3637L101.601 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M131.198 16L135.549 23.3637L143.998 25.1672L138.238 31.5217L139.109 40L131.198 36.5637L123.288 40L124.158 31.5217L118.398 25.1672L126.847 23.3637L131.198 16Z"
                                        fill="#FFCB45"
                                    />
                                    </svg>
                                </div>
                                <h6
                                    className="title1 indigo-100 font_secondary"
                                    style={{ marginBottom: 0 }}
                                >
                                    Mikitaa Gandhi
                                </h6>
                                <h6 className="title3 indigo-50 font_primary">
                                    Gut Health Specialist
                                </h6>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                        <div className="testimonial_banner">
                            <div
                            className="row g-0"
                            style={{ maxWidth: 1035, margin: "auto" }}
                            >
                            <div className="col-md-4 text-center">
                                <picture>
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/testimonial/versione_two/drrahulshah.avif"
                                    type="image/avif"
                                />
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/testimonial/versione_two/drrahulshah.webp"
                                    type="image/webp"
                                />
                                <img
                                    alt="image of Dr. Rahul Shah"
                                    className="card-img img-fluid testimonial-image"
                                    height={448}
                                    loading="lazy"
                                    src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/testimonial/versione_two/drrahulshah.png"
                                    width={345}
                                />
                                </picture>
                            </div>
                            <div className="col-md-8 m-auto">
                                <div className="card-body pb-0 text-center">
                                <h4 className="headline4 indigo-50 fw-bold font_secondary">
                                    Revolutionary product
                                </h4>
                                <p className="headline6 fw-normal font_primary darkgrey-100">
                                    Microbiome Research has transformed our understanding of
                                    gut microbiota and its link to the entire body.
                                    Revolutionary new way forward for my patients.
                                </p>
                                <div>
                                    <svg
                                    viewBox="0 0 144 56"
                                    className="mb-2"
                                    fill="none"
                                    height={56}
                                    width={144}
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M12.8 16L17.151 23.3637L25.6 25.1672L19.84 31.5217L20.7108 40L12.8 36.5637L4.88917 40L5.76 31.5217L0 25.1672L8.44904 23.3637L12.8 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M42.4016 16L46.7525 23.3637L55.2016 25.1672L49.4416 31.5217L50.3124 40L42.4016 36.5637L34.4907 40L35.3616 31.5217L29.6016 25.1672L38.0506 23.3637L42.4016 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M71.9992 16L76.3502 23.3637L84.7992 25.1672L79.0392 31.5217L79.9101 40L71.9992 36.5637L64.0884 40L64.9592 31.5217L59.1992 25.1672L67.6483 23.3637L71.9992 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M101.601 16L105.952 23.3637L114.401 25.1672L108.641 31.5217L109.512 40L101.601 36.5637L93.6899 40L94.5608 31.5217L88.8008 25.1672L97.2498 23.3637L101.601 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M131.198 16L135.549 23.3637L143.998 25.1672L138.238 31.5217L139.109 40L131.198 36.5637L123.288 40L124.158 31.5217L118.398 25.1672L126.847 23.3637L131.198 16Z"
                                        fill="#FFCB45"
                                    />
                                    </svg>
                                </div>
                                <h6
                                    className="title1 indigo-100 font_secondary"
                                    style={{ marginBottom: 0 }}
                                >
                                    Dr. Rahul Shah
                                </h6>
                                <h6 className="title3 indigo-50 font_primary">
                                    Gastroentrologist
                                </h6>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                        <div className="testimonial_banner">
                            <div
                            className="row g-0"
                            style={{ maxWidth: 1035, margin: "auto" }}
                            >
                            <div className="col-md-4 text-center">
                                <picture>
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/testimonial/versione_two/bhakti.avif"
                                    type="image/avif"
                                />
                                <source
                                    srcSet="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/testimonial/versione_two/bhakti.webp"
                                    type="image/webp"
                                />
                                <img
                                    alt="image of Bhakti Oberoi"
                                    className="card-img img-fluid testimonial-image"
                                    height={448}
                                    loading="lazy"
                                    src="https://mrplin.sgp1.cdn.digitaloceanspaces.com/static/assests/home/testimonial/versione_two/bhakti.png"
                                    width={345}
                                />
                                </picture>
                            </div>
                            <div className="col-md-8 m-auto">
                                <div className="card-body pb-0 text-center">
                                <h4 className="headline4 indigo-50 fw-bold font_secondary">
                                    Gut health matters
                                </h4>
                                <p className="headline6 fw-normal font_primary darkgrey-100">
                                    Emotions (mindset) and the gut are like a two-way
                                    street. The cells in your gut/body react to everything
                                    your mind says and vice-versa. Microbiome helped me
                                    connect the two for seamless balance. We become what we
                                    think about. Gut health matters.
                                </p>
                                <div>
                                    <svg
                                    viewBox="0 0 144 56"
                                    className="mb-2"
                                    fill="none"
                                    height={56}
                                    width={144}
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M12.8 16L17.151 23.3637L25.6 25.1672L19.84 31.5217L20.7108 40L12.8 36.5637L4.88917 40L5.76 31.5217L0 25.1672L8.44904 23.3637L12.8 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M42.4016 16L46.7525 23.3637L55.2016 25.1672L49.4416 31.5217L50.3124 40L42.4016 36.5637L34.4907 40L35.3616 31.5217L29.6016 25.1672L38.0506 23.3637L42.4016 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M71.9992 16L76.3502 23.3637L84.7992 25.1672L79.0392 31.5217L79.9101 40L71.9992 36.5637L64.0884 40L64.9592 31.5217L59.1992 25.1672L67.6483 23.3637L71.9992 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M101.601 16L105.952 23.3637L114.401 25.1672L108.641 31.5217L109.512 40L101.601 36.5637L93.6899 40L94.5608 31.5217L88.8008 25.1672L97.2498 23.3637L101.601 16Z"
                                        fill="#FFCB45"
                                    />
                                    <path
                                        d="M131.198 16L135.549 23.3637L143.998 25.1672L138.238 31.5217L139.109 40L131.198 36.5637L123.288 40L124.158 31.5217L118.398 25.1672L126.847 23.3637L131.198 16Z"
                                        fill="#FFCB45"
                                    />
                                    </svg>
                                </div>
                                <h6
                                    className="title1 indigo-100 font_secondary"
                                    style={{ marginBottom: 0 }}
                                >
                                    Bhakti Oberoi
                                </h6>
                                <h6 className="title3 indigo-50 font_primary">
                                    Customer
                                </h6>
                                </div>
                            </div>
                            </div>
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

export default Testimonials;
