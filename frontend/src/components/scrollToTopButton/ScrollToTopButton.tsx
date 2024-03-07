import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Подключаем файл CSS для стилей кнопки

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Обработчик события для прокрутки страницы вверх
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Добавляем плавность прокрутки
        });
    };

    // Обработчик события для отслеживания прокрутки страницы
    const handleScroll = () => {
        if (window.pageYOffset > 300) { // Если прокручено более 300px, кнопка становится видимой
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Добавляем слушателя события прокрутки при монтировании компонента

        return () => {
            window.removeEventListener('scroll', handleScroll); // Убираем слушателя события прокрутки при размонтировании компонента
        };
    }, []);

    return (
        <button
            className={isVisible ? 'scrollToTopButton show' : 'scrollToTopButton'} // Добавляем класс 'show', если кнопка должна быть видимой
            onClick={scrollToTop}
            title="Наверх"
        >
            Наверх
        </button>
    );
};

export default ScrollToTopButton;
