import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Home.css';

const Home = () => {
    const videoRef = useRef(null);
    const elementsRef = useRef([]);
    const imagesRef = useRef([]);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.95; // Adjust playback rate
        }

        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            // Adjust background image opacity based on scroll
            imagesRef.current.forEach((image) => {
                const imageTop = image.getBoundingClientRect().top + scrollTop;
                const imageHeight = image.offsetHeight;
                const fadeStart = imageTop - windowHeight;
                const fadeEnd = imageTop + imageHeight;

                let opacity = 0;
                if (scrollTop < fadeEnd && scrollTop > fadeStart) {
                    opacity = (scrollTop - fadeStart) / (fadeEnd - fadeStart);
                }

                gsap.to(image, {
                    opacity: opacity,
                    duration: 0.5,
                    ease: 'power3.out'
                });
            });

            // Animate boxes
            elementsRef.current.forEach((element) => {
                if (element) {
                    const elementTop = element.getBoundingClientRect().top + scrollTop;
                    const isVisible = scrollTop + windowHeight > elementTop;
                    gsap.to(element, {
                        opacity: isVisible ? 1 : 0,
                        y: isVisible ? 0 : 20,
                        duration: 0.5,
                        ease: 'power3.out'
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home">
            <section className="hero">
                {/* <video ref={videoRef} className="hero-video" src={process.env.PUBLIC_URL + '/3.mp4'} autoPlay muted loop /> */}
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to SigmaTrade</h1>
                    <p className="hero-subtitle">Your gateway to seamless stock trading.</p>
                </div>
            </section>

            <section className="features">
                <h2 className="section-title">Features</h2>
                <div className="image-container">
                    {/* <img src={process.env.PUBLIC_URL + '/pic1.jpg'} alt="Image 1" ref={(el) => { if (el) imagesRef.current.push(el); }} className="fade-image" /> */}
                </div>
                <div className="feature-cards">
                    <div className="feature-card" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <h3>Real-time Data</h3>
                        <p>Get up-to-the-minute stock prices and trends. Our platform ensures that you have the most current information at your fingertips to make quick and informed decisions.</p>
                    </div>
                    <div className="feature-card" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <h3>Advanced Analytics</h3>
                        <p>Make informed decisions with powerful analytics tools. Our advanced charting features and indicators help you analyze market trends and predict future movements.</p>
                    </div>
                    <div className="feature-card" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <h3>Secure Transactions</h3>
                        <p>Trade with confidence using our secure platform. We employ the latest encryption technologies and security protocols to protect your personal and financial information.</p>
                    </div>
                </div>
            </section>

            <section className="benefits">
                <h2 className="section-title">Why Choose Us?</h2>
                <ul className="benefits-list">
                    <li>Robust trading algorithms for better investment strategies.</li>
                    <li>Intuitive user interface designed for ease of use.</li>
                    <li>24/7 customer support to assist you at any time.</li>
                    <li>Low trading fees to maximize your returns.</li>
                </ul>
            </section>

            <section className="image-gallery">
                <div className="image-container">
                    <img src={process.env.PUBLIC_URL + '/pic2.jpg'} alt="Image 2" ref={(el) => { if (el) imagesRef.current.push(el); }} className="fade-image" />
                </div>
                
            </section>

            <section className="success-stories">
                <h2 className="section-title">Success Stories</h2>
                <div className="story-cards">
                    <div className="story-card" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <h3>Gopal's Journey</h3>
                        <p>Gopal turned his small savings into a substantial portfolio using AlphaTrade's intuitive platform and advanced analytics. His journey is a testament to the effectiveness of our tools.</p>
                    </div>
                    <div className="story-card" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <h3>Raghul's Strategy</h3>
                        <p>Raghul leveraged our real-time data to make timely trades, boosting his investment returns significantly. His strategy highlights the importance of having accurate and up-to-date information.</p>
                    </div>
                    <div className="story-card" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <h3>Midhun's Milestone</h3>
                        <p>Midhun achieved his financial goals faster with AlphaTrade's low fees and reliable customer support. His success story showcases how our platform can help users reach their financial milestones.</p>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2 className="section-title">What Our Users Say</h2>
                <div className="testimonial-carousel">
                    <div className="testimonial" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <div className="testimonial-box">
                            <p>"AlphaTrade's real-time data and analytics tools are unmatched. Highly recommend!"</p>
                            <span>- Selvaraj</span>
                        </div>
                    </div>
                    <div className="testimonial" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <div className="testimonial-box">
                            <p>"The platform's security features and customer support make trading stress-free."</p>
                            <span>- Gautam</span>
                        </div>
                    </div>
                    <div className="testimonial" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <div className="testimonial-box">
                            <p>"AlphaTrade has transformed my trading experience. The user interface is incredibly intuitive."</p>
                            <span>- Harish</span>
                        </div>
                    </div>
                    <div className="testimonial" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <div className="testimonial-box">
                            <p>"Their trading algorithms have significantly improved my trading strategies."</p>
                            <span>- Kenny</span>
                        </div>
                    </div>
                    <div className="testimonial" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <div className="testimonial-box">
                            <p>"The intuitive platform and advanced tools have boosted my investment returns."</p>
                            <span>- Vishal</span>
                        </div>
                    </div>
                    <div className="testimonial" ref={(el) => { if (el) elementsRef.current.push(el); }}>
                        <div className="testimonial-box">
                            <p>"Trading with AlphaTrade is seamless and rewarding."</p>
                            <span>- Sakthi</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;