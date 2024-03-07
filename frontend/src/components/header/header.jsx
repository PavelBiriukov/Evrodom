import React from 'react';
import Bottom_menu from '../bottom_menu/bottom_menu';
import Middle_menu from '../middle_menu/middle_menu';
import ScrollToTopButton from '../scrollToTopButton/ScrollToTopButton';
import Top_menu from '../top_menu/top_menu';

const Header = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Для плавного скролла
        });
    };
    
    return (
        <header>
           {/*  <Top_menu/> */}
            <Middle_menu/>
            <Bottom_menu/>
            <ScrollToTopButton/>
        </header>
    );
};

export default Header;