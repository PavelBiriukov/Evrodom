import React, { useState, useEffect } from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import { ICard } from '../../type/cards';
import cl from "../middle_menu/middle_menu.module.css";
import clbottom from "./bottom_menu.module.css";
import searchIMG from "../../img/icon/free-icon-search-4024513.png";
import katalogIMG from "../../img/icon/free-icon-font-menu-burger-3917215.png";
import dawn from "../../img/icon/angle-small-down.png";
import up from "../../img/icon/angle-small-up.png";
import useActions from '../../hooks/useAcrions';
require('dotenv').config();
const Bottom_menu = () => {
    const URL_BACK: string = process.env.URL_BACK || '';

    const { searchCard } = useActions()
    const [query, setQuery] = useState<string>('');
    const [cards, setCards] = useState<ICard[] | any>();
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    /* const [isPopupOpen, setIsPopupOpen] = useState(false); */
    const [isMouseOverPopup, setIsMouseOverPopup] = useState(false);
    const handleButtonClick = () => {
        setIsMouseOverPopup(!isMouseOverPopup);
    };
    useEffect(() => {
        const popup = document.querySelector(`.${clbottom.dropdown__content_wrapper}`);
        const handleMouseEnter = () => {
            setIsMouseOverPopup(true);
        };
    
        const handleMouseLeave = () => {
            setIsMouseOverPopup(false);
            setPopupVisible(false);
        };
    
        if (popup) {
            popup.addEventListener('mouseenter', handleMouseEnter);
            popup.addEventListener('mouseleave', handleMouseLeave);
        }
    
        return () => {
            if (popup) {
                popup.removeEventListener('mouseenter', handleMouseEnter);
                popup.removeEventListener('mouseleave', handleMouseLeave);
            }
        };
        
    }, [isMouseOverPopup]);


    const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }
        if (value.trim() === '') {
            setCards(null); // Очистить карточки, если инпут пустой
        } else {
            setTimer(
                setTimeout(async () => {
                    const result = await searchCard(value);
                    setCards(result);
                    setPopupVisible(!!result);
                }, 500)
            );
        }
    }
    const [subMenuStates, setSubMenuStates] = useState<{ [key: string]: boolean }>({
        // Инициализация состояний для всех категорий
        'Межкомнатные двери': false,
        'Сантехника': false,
        // Добавьте другие категории здесь
    });

    const handleSubMenuToggle = (category: string) => {
        setSubMenuStates(prevStates => ({
            ...prevStates,
            [category]: !prevStates[category],
        }));
    };

    const handleCategoryClick = (e: React.MouseEvent, category: string) => {
        e.preventDefault();
        setPopupVisible(!subMenuStates[category]);
    };
    
    return (
        <div className='bottom_menu'>
            <div className='inner'>
                <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }} className='categories'>
                    <ul id="menu_list" style={{ overflow: 'visible', width: '100%', display: 'flex',flexDirection: 'row',alignContent: 'center',justifyContent: 'space-evenly',}}>
                        <li onClick={(e) => { e.preventDefault(); handleButtonClick(); }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className="li">
                            <a  style={{ paddingRight: '5px' }} href="/">Каталог</a>
                            {/* <img  style={{ cursor: 'pointer', width: '20px', marginRight: '15px' }} src={katalogIMG} alt="каталог" /> */}
                        </li>

                        <li className="li">
                            <a href="/">Главная</a>
                        </li>

                        <li className="li">
                            <a href="/o-kompanii/" className="" title="О компании">О компании</a>
                        </li>

                        <li className="li">
                            <a href="/dostavka-i-oplata/" className="" title="Доставка и оплата">Доставка и оплата</a>
                        </li>

                        <li className="li">
                            <a href="/kontakty/" className="" title="Контакты">Контакты</a>
                        </li>
                    </ul>
                    <div onMouseEnter={() => setIsMouseOverPopup(true)}
                        onMouseLeave={() => setIsMouseOverPopup(false)}
                        className={`${clbottom.dropdown__content_wrapper} ${isMouseOverPopup ? '' : clbottom.closed}`}
                        id="i1zw16m4u_0"
                        style={{ width: '100%', maxWidth: '320px', height: 'auto', opacity: '1', display: `${isMouseOverPopup ? 'flex' : 'none'}` }}
                    >
                        <div className={`dropdown__content ${clbottom.dropdown__content}`} id="ixpzzi0hy_0">
                            <div className={`div ${clbottom.div_u_inrzchron}`} id="inrzchron_0">
                                <div className={`mosaic-shop2-folders ${clbottom.mosaic_shop2_folders_u_iwvpglffu}`} id="iwvpglffu_0">
                                    <ul className={clbottom.mosaic_shop2_folders__list}>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a onClick={(e) => handleCategoryClick(e, "Межкомнатные двери")} style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders__link} href="/magazin/folder/mezhkomnatnye-dveri">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Межкомнатные двери</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Межкомнатные двери")}>
                                                        <img src={subMenuStates['Межкомнатные двери'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Межкомнатные двери'] ? 'flex': 'none'}`, flexDirection: 'column'}}>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item} >
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/magazin/folder/klassik-9">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Коллекция Классика</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/magazin/folder/lirika-1">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Коллекция Неоклассика</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/magazin/folder/elegiya-1">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Современный стиль</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a onClick={(e) => handleCategoryClick(e, "Сантехника")} style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="/magazin/folder/mezhkomnatnye-dveri">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Сантехника</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Сантехника")}>
                                                        <img src={subMenuStates['Сантехника'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Сантехника'] ? 'flex': 'none'}`}}>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/magazin/folder/klassik-9">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Ванны</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/magazin/folder/lirika-1">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Смесители</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/magazin/folder/elegiya-1">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Тумба с раковиной</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/magazin/folder/elegiya-1">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Раковина с пьедесталом</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href={`${URL_BACK}/categories/Унитазы`}>
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Унитазы</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={clbottom.mosaic_shop2_folders_item}>
                                            <a className={clbottom.mosaic_shop2_folders_link} href="/magazin/folder/vhodnye-dveri">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Входные двери</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottom_menu;