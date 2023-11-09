import React, { useEffect } from 'react';
import user1 from "../assets/img/user1.jpg"
import user2 from "../assets/img/user2.jpg"
import user3 from "../assets/img/user3.jpg"
import user4 from "../assets/img/user4.jpg"
import user5 from "../assets/img/user5.jpg"



export const Slider = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      new window.Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
    };
  }, []);

  return (
    
      <section className="swiper mySwiper">
    
        <h1>What Professor Say About Me</h1>

        <div className="swiper-wrapper">
            <div className="card swiper-slide">
                <div className="card__image">
                    < img src={user1} alt="card image" />
                </div>

                <div className="card__content">
                    <span className="card__title">Prof. Dr. Sudarshan Sanap</span>
                    <span className="card__name"> HOD.Mechanical</span>
                    
                    <p className="card__text">
                    He is among the top students in our programme. His work demonstrate his sharp critical thinking. 
                    </p>
                 
                </div>
            </div>
            <div className="card swiper-slide">
                <div className="card__image">
                    < img src={user2} alt="card image" />
                </div>

                <div className="card__content">
                    <span className="card__title">Prof. Dr. Ashish Umbarkar</span>
                    <span className="card__name">Robotics and Automation</span>
                    <p className="card__text">
                    He has a firm grasp of concepts, is skilled in research development, has solid management abilities, and gets along well with his subordinates.
                    </p>
                    
                </div>
            </div>
            <div className="card swiper-slide">
                <div className="card__image">
                    < img src={user3} alt="card image" />
                </div>

                <div className="card__content">
                    <span className="card__title">Prof.Dr.Virendra Bhojwani</span>
                    <span className="card__name">CAD/CAM</span>
                    <p className="card__text">
                    He is one of the top students in his class and excels in projects due to his keen attention to detail and in-depth comprehension of the fundamentals. 
                    </p>
                  
                </div>
            </div>
            <div className="card swiper-slide">
                <div className="card__image">
                    < img src={user4} alt="card image" />
                </div>

                <div className="card__content">
                    <span className="card__title">Dr. Syam prasad Kuncham</span>
                    <span className="card__name">Professor and HOD of Methamatics</span>
                    <p className="card__text">
                    Aniket is an exceptional individual, demonstrating a remarkable aptitude for problem-solving and a strong dedication to achieving goals. 
                    </p>
                    
                </div>
            </div>
            <div className="card swiper-slide">
                <div className="card__image">
                    < img src={user5} alt="card image" />
                </div>

                <div className="card__content">
                    <span className="card__title">Dr. Narasimhan S</span>
                    <span className="card__name">Robotics and Automation</span>
                    <p className="card__text">
                    Aniket's exceptional communication skills and proactive approach to challenges make collaboration seamless. Their strong work ethic and positive attitude contribute significantly to the success of any project.
                    </p>
                </div>
            </div>
        </div>
      </section>
    
  );
};

