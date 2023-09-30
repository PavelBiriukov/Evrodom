import React from 'react';
import Bottom_menu from '../bottom_menu/bottom_menu';
import Middle_menu from '../middle_menu/middle_menu';
import Top_menu from '../top_menu/top_menu';

const Header = () => {
    return (
        <header>
            <Top_menu/>
            <Middle_menu/>
            <Bottom_menu/>
        </header>
    );
};

export default Header;