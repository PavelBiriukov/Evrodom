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

const Bottom_menu = () => {
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
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleSubMenuToggle = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
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
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders__item} has-child`}>
                                            <a style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders__link} href="/magazin/folder/mezhkomnatnye-dveri">
                                                <span className={clbottom.mosaic_shop2_folders__text}>Межкомнатные двери</span>
                                                <span className={clbottom.mosaic_shop2_folders__icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={(e) => { e.preventDefault();handleSubMenuToggle()}}>
                                                        <img src={isSubMenuOpen ? up : dawn} style={{ marginLeft: '5px', width: "30px", height: "30px" }} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul className={clbottom.mosaic_shop2_folders__sub_list} style={{display: `${isSubMenuOpen ? 'flex': 'none'}`}}>
                                                <li className={clbottom.mosaic_shop2_folders__sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders__sub_link} href="/magazin/folder/klassik-9">
                                                        <span className={clbottom.mosaic_shop2_folders__sub_text}>Коллекция Классика</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders__sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders__sub_link} href="/magazin/folder/lirika-1">
                                                        <span className={clbottom.mosaic_shop2_folders__sub_text}>Коллекция Неоклассика</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders__sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders__sub_link} href="/magazin/folder/elegiya-1">
                                                        <span className={clbottom.mosaic_shop2_folders__sub_text}>Современный стиль</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={clbottom.mosaic_shop2_folders__item}>
                                            <a className={clbottom.mosaic_shop2_folders__link} href="/magazin/folder/vhodnye-dveri">
                                                <span className={clbottom.mosaic_shop2_folders__text}>Входные двери</span>
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