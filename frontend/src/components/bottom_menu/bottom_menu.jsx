import React from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
const Bottom_menu = () => {
    return (
        <div className='bottom_menu'>
            <div className='inner'>
                <div className='categories'>
                    <ul className='level_1'>
                        <li>
                            <a href="/categories/hleba/" className="" title="Двери">Двери</a>
                        </li>
                        <li>
                            <a href="/categories/bulochnye-izdeliya/" className="" title="Линолиум">Линолиум</a>
                        </li>
                        <li>
                            <a href="/categories/gastronomiya/" className="" title="САЙДЕНГ ВИНИЛОВЫЙ ФОСАДНЫЙ">Сайденг виниловый фосадный</a>
                        </li>
                        <li>
                            <a href="/categories/konditerskie-izdeliya/" className="" title="ПЛАСТИК ПОТОЛОЧНЫЙ ПВХ">Пластик потолочный пвх</a>
                        </li>
                        <li>
                            <a href="/categories/novaya-kategoriya/" className="" title="МДФ ПАНЕЛИ">Мдф панели</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Bottom_menu;