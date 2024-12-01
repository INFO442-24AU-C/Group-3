import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Custom styles

function WhatNow() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div style={{ width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            <Slider {...settings}>
                <div className="card">
                    <iframe
                        src="https://www.thecyberhelpline.com/helpline-blog/2024/5/14/simple-steps-for-reducing-your-digital-footprint-on-social-media"
                        title="COVID Data Tracker"
                        style={{
                            width: '60%',
                            height: '500px',
                            border: 'none',
                            borderRadius: '10px',
                            margin: '20px auto',
                            display: 'block',
                        }}
                    />
                </div>
                <div className="card">
                    <iframe
                        src="https://www.pcmag.com/explainers/take-these-steps-to-stop-apps-from-collecting-your-data-now"
                        title="Impact of Social Media on Society"
                        style={{
                            width: '60%',
                            height: '500px',
                            border: 'none',
                            borderRadius: '10px',
                            margin: '20px auto',
                            display: 'block',
                        }}
                    />
                </div>
                <div className="card">
                    <iframe
                        src="https://getterms.io/blog/who-owns-the-personal-data-you-collect-from-users" // Replace with the actual URL of the article you want to display
                        title="How AI is Changing Industries"
                        style={{
                            width: '60%',
                            height: '500px',
                            border: 'none',
                            borderRadius: '10px',
                            margin: '20px auto',
                            display: 'block',
                        }}
                    />
                </div>
                <div className="card">
                    <iframe
                        src="https://blog.credo.com/2023/11/02/how-to-prevent-apps-from-accessing-your-personal-data/" // Replace with the actual URL of the article you want to display
                        title="Adventure in the Modern Age"
                        style={{
                            width: '60%',
                            height: '500px',
                            border: 'none',
                            borderRadius: '10px',
                            margin: '20px auto',
                            display: 'block',
                        }}
                    />
                </div>
                <div className="card">
                    <iframe
                        src="https://medium.com/@YUSUPHKILEO/how-to-restrict-data-collection-when-using-mobile-apps-on-smartphones-bbc298a53684"
                        title="How to Delete Your Digital Footprint - Aura"
                        style={{
                            width: '60%',
                            height: '500px',
                            border: 'none',
                            borderRadius: '10px',
                            margin: '20px auto',
                            display: 'block',
                        }}
                    />
                </div>
                <div className="card">
                    <iframe
                        src="https://www.healthdata.org/data-tools-practices/interactive-data-visuals"
                        title="Tips to Clean Up Your Digital Footprint - Keeper Security"
                        style={{
                            width: '60%',
                            height: '500px',
                            border: 'none',
                            borderRadius: '10px',
                            margin: '20px auto',
                            display: 'block',
                        }}
                    />
                </div>
            </Slider>
        </div>
    );
}

// Custom arrow components
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={`${className} custom-arrow`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={`${className} custom-arrow`} onClick={onClick} />;
}

export default WhatNow;
