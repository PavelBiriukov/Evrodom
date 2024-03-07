import React, { useState, useEffect } from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import "../../styles/swiper.css";
import cl from "./block_slider.module.css";
import Background1 from '../../img/34b208a18f8489ed786094fcae0d3ca3.jpeg'
import Background2 from '../../img/284_original.jpg'
import Background3 from '../../img/snapedit_1708445005911.png'
import Background4 from '../../img/двери.jpg'
import Background5 from '../../img/линолиум.jpg'
import Background6 from '../../img/f281d0fbb9bed23adf11bb39120f4455.jpg'
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
    const numberOfSlides = 6;


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

    const [intervalId, setIntervalId] = useState(null); // Объявляем intervalId
    const [isMouseOverSlider, setIsMouseOverSlider] = useState(false);

    const handleMouseEnterSlider = () => {
        setIsMouseOverSlider(true);
    };

    const handleMouseLeaveSlider = () => {
        setIsMouseOverSlider(false);
    };

    useEffect(() => {
        const autoScroll = () => {
            const id = setInterval(() => {
                if (!isMouseOverSlider) {
                    clearInterval(intervalId);
                    if (currentSlide < numberOfSlides - 1) {
                        clickNext();
                        clearInterval(intervalId);
                    } else {
                        clearInterval(intervalId);
                        setCurrentSlide(0); // Возвращаемся к первому слайду
                        setNextStyle({
                            transitionDuration: '2000ms',
                            transform: `translate3d(0px, 0px, 0px)`
                        });
                        
                    }
                }
            }, 10000);
            setIntervalId(id); // Сохраняем id интервала
        };
        autoScroll();
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlide, numberOfSlides, isMouseOverSlider]);


    const clickNext = () => {
        clearInterval(intervalId);
        if (currentSlide < numberOfSlides - 1) {
            setTimeout(() => {
                setNextStyle({
                    transitionDuration: '0ms',
                    transform: `translate3d(${-windowDimensions.width * (currentSlide + 1)}px, 0px, 0px)`
                });
            }, 1000);

            setCurrentSlide(currentSlide + 1);
            setNextStyle({
                transitionDuration: '2000ms',
                transform: `translate3d(${-windowDimensions.width * (currentSlide + 1)}px, 0px, 0px)`
            });
        }
    };

    const clickBack = () => {
        clearInterval(intervalId);
        if (currentSlide > 0) {
            const newPosition = -windowDimensions.width * (currentSlide - 1);
            setTimeout(() => {
                setNextStyle({
                    transitionDuration: '0ms',
                    transform: `translate3d(${newPosition}px, 0px, 0px)`
                });
            }, 1000);

            setCurrentSlide(currentSlide - 1);
            setNextStyle({
                transitionDuration: '2000ms',
                transform: `translate3d(${newPosition}px, 0px, 0px)`
            });
        }
    };
    return (
        <div className="block_slider">
            <div
                onMouseEnter={handleMouseEnterSlider}
                onMouseLeave={handleMouseLeaveSlider}
                className="slider">

                <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={nextStyle}>
                        <div className={`swiper-slide swiper-slide-prev ${cl.sliders_image}`} style={{ backgroundImage: `url(${Background1})` }}>
                            <div className="bg"></div>
                            <div className="inner">
                                <div className="item_content">
                                    <div className="title">Мы делаем ваш дом красивым и надежным.</div>
                                    <div className="descr">Евродом - это качество, надежность, доступность. Мы знаем толк в стройке.</div>
                                    <a style={{ borderRadius: '5px' }} href="/categories/Унитазы">
                                        <div className={cl.button}>
                                            Сантехника
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`swiper-slide swiper-slide-active ${cl.sliders_image}`} style={{ backgroundImage: `url(${Background2})` }}>
                            <div className="bg"></div>
                            <div className="inner">
                                <div className="item_content">
                                    <div className="title">Строй с умом, выбирай нас!</div>
                                    <div className="descr">
                                        Добро пожаловать в мир качественных стройматериалов — добро пожаловать в Евродом!
                                    </div>
                                    <a style={{ borderRadius: '5px' }} href="/categories/САЙДИНГ%20ФАСАДНЫЙ%20(ВИНИЛОВЫЙ)">
                                        <div className={cl.button}>
                                            Купить Сайдинг
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`swiper-slide swiper-slide-active ${cl.sliders_image}`} style={{ backgroundImage: `url(${Background3})` }}>
                            <div className="bg"></div>
                            <div className="inner">
                                <div className="item_content">
                                    <div className="title">Покупай гибкий мрамор у нас!</div>
                                    <div className="descr">
                                        Гибкий мрамор представляет собой инновационный материал,
                                        который сочетает в себе эстетику мрамора с
                                        гибкостью и легкостью обработки других материалов.

                                    </div>
                                    <a style={{ borderRadius: '5px' }} href="/categories/ЛИСТОВЫЕ%20(ГИБКИЙ%20МРАМОР)">
                                        <div className={cl.button}>
                                            Гибкий мрамор
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`swiper-slide swiper-slide-active ${cl.sliders_image}`} style={{ backgroundImage: `url(${Background4})` }}>
                            <div className="bg"></div>
                            <div className="inner">
                                <div className="item_content">
                                    <div className="title">Двери на любой вкус и цвет !</div>
                                    <div className="descr">
                                        От классических деревянных дверей до современных металлических конструкций,
                                        наш ассортимент предлагает разнообразие вариантов.
                                    </div>
                                    <a style={{ borderRadius: '5px' }} href="/categories/МЕЖКОМНАТНЫЕ">
                                        <div className={cl.button}>
                                            Купить двери
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`swiper-slide swiper-slide-active ${cl.sliders_image}`} style={{ backgroundImage: `url(${Background5})` }}>
                            <div className="bg"></div>
                            <div className="inner">
                                <div className="item_content">
                                    <div className="title">Линолеум для вас.</div>
                                    <div className="descr">
                                        Наша компания предлагает широкий выбор линолеума высокого качества для различных потребностей и предпочтений.
                                    </div>
                                    <a style={{ borderRadius: '5px' }} href={`/categories/КЛАСС%20"ПАРМА"`}>
                                        <div className={cl.button}>
                                            Линолеум
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`swiper-slide swiper-slide-active ${cl.sliders_image}`} style={{ backgroundImage: `url(${Background6})` }}>
                            <div className="bg"></div>
                            <div className="inner">
                                <div className="item_content">
                                    <div className="title">Панели МДФ</div>
                                    <div className="descr">
                                        Наши панели МДФ представляют собой идеальное сочетание эстетики,
                                        прочности и функциональности для вашего интерьера.
                                    </div>
                                    <a style={{ borderRadius: '5px' }} href="/categories/Панели%20МДФ%20ЛИСТОВЫЕ%20(ЖЁСТКИЕ%20ОБОИ)">
                                        <div className={cl.button}>
                                            Панели МДФ
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="swiper-pagination">
                        <span className={`swiper-pagination-bullet ${currentSlide === 0 ? 'swiper-pagination-bullet-active' : ''}`} tabIndex="0" role="button" aria-label="Go to slide 1"></span>
                        <span className={`swiper-pagination-bullet ${currentSlide === 1 ? 'swiper-pagination-bullet-active' : ''}`} tabIndex="0" role="button" aria-label="Go to slide 2"></span>
                        <span className={`swiper-pagination-bullet ${currentSlide === 2 ? 'swiper-pagination-bullet-active' : ''}`} tabIndex="0" role="button" aria-label="Go to slide 3"></span>
                        <span className={`swiper-pagination-bullet ${currentSlide === 3 ? 'swiper-pagination-bullet-active' : ''}`} tabIndex="0" role="button" aria-label="Go to slide 4"></span>
                        <span className={`swiper-pagination-bullet ${currentSlide === 4 ? 'swiper-pagination-bullet-active' : ''}`} tabIndex="0" role="button" aria-label="Go to slide 5"></span>
                        <span className={`swiper-pagination-bullet ${currentSlide === 5 ? 'swiper-pagination-bullet-active' : ''}`} tabIndex="0" role="button" aria-label="Go to slide 6"></span>
                    </div>
                    <div
                        onClick={clickNext}
                        className={`swiper-button-next-slider swiper-button-white ${currentSlide === numberOfSlides - 1 ? 'swiper-button-disabled' : ''}`}
                        tabIndex="0"
                        role="button"
                        aria-label="Next slide"
                        aria-disabled={currentSlide === numberOfSlides - 1 ? 'true' : 'false'}
                    >
                        <img style={{ content: 'выф' }} className="" src={right_arrow} alt="стрелочка" />
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