import React from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
const Bottom_menu = () => {
    return (
        <div className='bottom_menu'>
            <div className='inner'>
                <div className='categories'>
                    <ul className='level_1'>
                        <li><a href="/categories/hleba/" className="" title="Хлеб">Хлеб</a></li>
                        <li><a href="/categories/bulochnye-izdeliya/" className="" title="Булочные изделия">Булочные изделия</a></li>
                        <li><a href="/categories/gastronomiya/" className="" title="Гастрономия">Гастрономия</a></li>
                        <li><a href="/categories/konditerskie-izdeliya/" className="" title="Кондитерские изделия">Кондитерские изделия</a></li>
                        <li><a href="/categories/novaya-kategoriya/" className="" title="Печенье">Печенье</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Bottom_menu;