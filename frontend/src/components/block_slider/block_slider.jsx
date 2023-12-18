import React, { useState, useEffect } from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import "../../styles/swiper.css";
import cl from "./block_slider.module.css";
import Background from '../../img/77da07047e0be99b5c5b1a850bd325ac.jpg'
import Background1 from '../../img/quelle-ecole-de-commerce-choisir.png'
import left_arrow from '../../img/icon/free-icon-left-arrow-line-symbol-54321.png'
import right_arrow from '../../img/icon/free-icon-right-arrow-angle-54833.png'
const Block_slider = () => {

    const [nextStyle, setNextStyle] = useState({
        transitionDuration: '0ms',
        transform: 'translate3d(0px, 0px, 0px)'
    });
    const [windowDimensions, setWindowDimensions] = useState({
        width: 1910,
        height: 1910
    });
    const [currentSlide, setCurrentSlide] = useState(0);
    const numberOfSlides = 2;
    
    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: 1910,
                height: 1910
            });
        };

        // Добавляем слушателя события изменения размера окна
        window.addEventListener('resize', handleResize);

        // Убираем слушателя события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Автоматическая прокрутка слайдов каждые 2 секунды
        const intervalId = setInterval(() => {
            if (currentSlide < numberOfSlides - 1) {
                clickNext()
            } else {
                clickBack()
            }
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlide, numberOfSlides]);

    const clickNext = () => {
        if (currentSlide < 2 - 1) {
            setTimeout(() => {
                setNextStyle({
                    transitionDuration: '0ms',
                    transform: `translate3d(${-windowDimensions.width * (currentSlide + 1)}px, 0px, 0px)`
                });
            }, 1000);

            setCurrentSlide(currentSlide + 1);
            setNextStyle({
                transitionDuration: '300ms',
                transform: `translate3d(${-windowDimensions.width * (currentSlide + 1)}px, 0px, 0px)`
            });
        }
    };

    const clickBack = () => {
        if (currentSlide > 0) {
            setTimeout(() => {
                setNextStyle({
                    transitionDuration: '0ms',
                    transform: `translate3d(${0 * (currentSlide - 1)}px, 0px, 0px)`
                });
            }, 1000);

            setCurrentSlide(currentSlide - 1);
            setNextStyle({
                transitionDuration: '300ms',
                transform: `translate3d(${0 * (currentSlide - 1)}px, 0px, 0px)`
            });
        }
    };
    return (
        <div className="block_slider">
            <div className="slider">
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={nextStyle}>
                        <div className="swiper-slide swiper-slide-prev" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', width: '1910px' }}>
                            <div className="bg"></div>
                            <div className="inner">
                                <div className="item_content">
                                    <div className="title">Мы делаем ваш дом красивым и надежным.</div>
                                    <div className="descr">Евродом - это качество, надежность, доступность. Мы знаем толк в стройке.</div>
                                    <a style={{borderRadius: '5px'}} href="/categories/hleba/">
                                        <div className={cl.button}>
                                            Купить двери
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{ backgroundImage: `url(${Background1})`, backgroundSize: 'cover', width: '1910px' }}>
                            <div className="bg"></div>
                            <div className="inner">
                                <div className="item_content">
                                    <div className="title">Строй с умом, выбирай нас!</div>
                                    <div className="descr">
                                        Добро пожаловать в мир качественных стройматериалов — добро пожаловать в Евродом!
                                    </div>
                                    <a style={{borderRadius: '5px'}} href="/categories">
                                        <div className={cl.button}>
                                            В каталог
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                        <span className={`swiper-pagination-bullet ${currentSlide === 2 - 1 ? 'swiper-pagination-bullet-active' : ''}`} tabIndex="0" role="button" aria-label="Go to slide 1"></span>
                        <span className={`swiper-pagination-bullet ${currentSlide === 0 ? 'swiper-pagination-bullet-active' : ''}`} tabIndex="0" role="button" aria-label="Go to slide 2"></span>
                    </div>
                    <div
                        
                        onClick={clickNext}
                        className={`swiper-button-next-slider swiper-button-white ${currentSlide === 2 - 1 ? 'swiper-button-disabled' : ''}`}
                        tabIndex="0"
                        role="button"
                        aria-label="Next slide"
                        aria-disabled={currentSlide === 2 - 1 ? 'true' : 'false'}
                    >
                        <img style={{content: 'выф'}} className="" src={right_arrow} alt="стрелочка" />
                    </div>
                    <div
                        onClick={clickBack}
                        
                        className={`swiper-button-prev-slider swiper-button-white ${currentSlide === 0 ? 'swiper-button-disabled' : ''}`}
                        tabIndex="0"
                        role="button"
                        aria-label="Previous slide"
                        aria-disabled={currentSlide === 0 ? 'true' : 'false'}
                    >
                        <img className={cl.iconsSlider} src={left_arrow} alt="стрелочка" />
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </div>
    );
};

export default Block_slider;