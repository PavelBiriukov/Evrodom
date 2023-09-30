import React, { useState, useEffect } from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import "../../styles/swiper.css";
import Background from '../../img/pexels-pixabay-461060_1630385893183.jpg'
import Background1 from '../../img/pexels-klaus-nielsen-6287298_1630385996187.jpg'
const Block_slider = () => {

    const [nextStyle, setNextStyle] = useState({
        transitionDuration: '0ms',
        transform: 'translate3d(0px, 0px, 0px)'
    });
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    const [currentSlide, setCurrentSlide] = useState(0);
    const numberOfSlides = 2;
    
    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
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
                                    <div className="title">Скидка 50% после 18 часов</div>
                                    <div className="descr">Получите 50% скидку на всю продукцию Вкусного хлебушка после 18 часов</div>
                                    <a className="slide_btn" href="/categories/hleba/">Купить хлеб</a>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{ backgroundImage: `url(${Background1})`, backgroundSize: 'cover', width: '1910px' }}>
                            <div className="bg"></div>
                            <div className="inner">
                                <div className="item_content">
                                    <div className="title">Высочайшее качество продукции</div>
                                    <div className="descr">В своих продуктах мы используем сырье самого высокого качества и технологии, позволяющие сделать вкусный хлеб в кратчайшие сроки</div>
                                    <a className="slide_btn" href="/categories/">В каталог</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                        <span className={`swiper-pagination-bullet ${currentSlide === 2 - 1 ? 'swiper-pagination-bullet-active' : ''}`} tabindex="0" role="button" aria-label="Go to slide 1"></span>
                        <span className={`swiper-pagination-bullet ${currentSlide === 0 ? 'swiper-pagination-bullet-active' : ''}`} tabindex="0" role="button" aria-label="Go to slide 2"></span>
                    </div>
                    <div
                        onClick={clickNext}
                        className={`swiper-button-next swiper-button-white ${currentSlide === 2 - 1 ? 'swiper-button-disabled' : ''}`}
                        tabIndex="0"
                        role="button"
                        aria-label="Next slide"
                        aria-disabled={currentSlide === 2 - 1 ? 'true' : 'false'}
                    >
                        <i className="f7-icons">chevron_right</i>
                    </div>
                    <div
                        onClick={clickBack}
                        className={`swiper-button-prev swiper-button-white ${currentSlide === 0 ? 'swiper-button-disabled' : ''}`}
                        tabIndex="0"
                        role="button"
                        aria-label="Previous slide"
                        aria-disabled={currentSlide === 0 ? 'true' : 'false'}
                    >
                        <i className="f7-icons">chevron_left</i>
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
        </div>
    );
};

export default Block_slider;