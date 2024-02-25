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
        'Двери': false,
        'Линолеум': false,
        'Сайдинг фасадный (виниловый)': false, 
        'Панели PVC (Пластиковые)': false,
        'Панели МДФ': false,
        'Сантехника': false,
        'Ламинат напольный': false,
        'Потолочная плитка': false,
        'Плинтусы и пороги напольные': false,
        'Рейка декоративная': false,
        'Плинтусы и молдинги PVC (золото и серебро)': false,
        'Рейка и профиль': false,
        'Сопутствующие товары разные': false,
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
                            <a style={{ paddingRight: '5px' }} href="/">Каталог</a>
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
                                            <a onClick={(e) => handleCategoryClick(e, "Двери")} style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders__link} href="">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Двери</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Двери")}>
                                                        <img src={subMenuStates['Двери'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Двери'] ? 'flex': 'none'}`, flexDirection: 'column'}}>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item} >
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/МЕЖКОМНАТНЫЕ">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Межкомнатные</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/ВХОДНЫЕ%20(БРОНИРОВАННЫЕ)">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>{'Входные (бронированные)'}</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/СОПУТСТВУЮЩИЕ%20ТОВАРЫ%20ДЛЯ%20ДВЕРЕЙ">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Сопутствующие товары для дверей</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a onClick={(e) => handleCategoryClick(e, "Линолеум")} style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Линолеум</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Линолеум")}>
                                                        <img src={subMenuStates['Линолеум'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Линолеум'] ? 'flex': 'none'}`}}>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/КЛАСС%20ТИП%20Б">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Класс тип "Б"</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href={`/categories/КЛАСС%20"ПАРМА"`}>
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Класс "Парма"</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href={`/categories/КЛАСС%20"ВЕРСАЛЬ"`}>
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Класс "Версаль"</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="/categories/САЙДИНГ%20ФАСАДНЫЙ%20(ВИНИЛОВЫЙ)">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Сайдинг фасадный (виниловый)</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Сайдинг фасадный (виниловый)")}>
                                                        {/* <img src={subMenuStates['Сайдинг фасадный (виниловый)'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" /> */}
                                                    </span>
                                                </span>
                                            </a>
                                            <ul className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Сайдинг фасадный (виниловый)'] ? 'flex': 'none'}`}}>
                                                
                                            </ul>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a onClick={(e) => handleCategoryClick(e, "Панели PVC (пластиковые)")} style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Панели PVC (пластиковые)</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Панели PVC (пластиковые)")}>
                                                        <img src={subMenuStates['Панели PVC (пластиковые)'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Панели PVC (пластиковые)'] ? 'flex': 'none'}`}}>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/ЛИСТОВЫЕ%20(ГИБКИЙ%20МРАМОР)">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>{"Листовые (Гибкий мрамор)"}</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/ПАНЕЛИ%20PVC%20ПОТОЛОЧНЫЕ">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Потолочные</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/ПАНЕЛИ%20PVC%20СТЕНОВЫЕ">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Стеновые</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/КОМПЛЕКТУЮЩИЕ%20ДЛЯ%20ПАНЕЛЕЙ%20PVC">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Комплектующие для панелей</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a onClick={(e) => handleCategoryClick(e, "Панели МДФ")} style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Панели МДФ</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Панели МДФ")}>
                                                        <img src={subMenuStates['Панели МДФ'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Панели МДФ'] ? 'flex': 'none'}`}}>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Панели%20МДФ%20ЛИСТОВЫЕ%20(ЖЁСТКИЕ%20ОБОИ)">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>{"Листовые (Жёсткие обои)"}</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Панели%20МДФ%20СТЕНОВЫЕ">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Стеновые</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/КОМПЛЕКТУЮЩИЕ%20ДЛЯ%20МДФ">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Комплектующие для МДФ</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a onClick={(e) => handleCategoryClick(e, "Сантехника")} style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Сантехника</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Сантехника")}>
                                                        <img src={subMenuStates['Сантехника'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Сантехника'] ? 'flex': 'none'}`}}>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Ванны">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>{"Ванны"}</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Унитазы">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Унитазы</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Умывальники%20с%20пьедесталом">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Раковины</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Смеситель%20для%20ванной">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Смесители</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/СОПУТСТВУЮЩИЕ%20ТОВАРЫ%20ДЛЯ%20САНТЕХНИКИ">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Сопутствующие товары для сантехники</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a onClick={(e) => handleCategoryClick(e, "Ламинат напольный")} style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Ламинат напольный</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Ламинат напольный")}>
                                                        <img src={subMenuStates['Ламинат напольный'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Ламинат напольный'] ? 'flex': 'none'}`}}>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Ламинат%208мм%2032%20класс/">
                                                        <span className={[clbottom.mosaic_shop2_folders_sub_text, clbottom.tovar_unik].join(' ')}>{"8мм 32 класс"}</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Ламинат%208мм%2033%20класс/">
                                                        <span className={[clbottom.mosaic_shop2_folders_sub_text, clbottom.tovar_unik].join(' ')}>8мм 33 класс</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/СОПУТСТВУЮЩИЕ%20ТОВАРЫ%20ДЛЯ%20ЛАМИНАТА">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Сопутствующие товары для ламината</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a  style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="/categories/ПОТОЛОЧНАЯ%20ПЛИТКА">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Потолочная плитка</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Потолочная плитка")}>
                                                        <img onClick={(e) => handleCategoryClick(e, "Потолочная плитка")} src={subMenuStates['Потолочная плитка'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul  className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Потолочная плитка'] ? 'flex': 'none'}`}}>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/ПОТОЛОЧНАЯ%20ПЛИТКА%20ПЛИНТУСЫ">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>{"Плинтусы"}</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/ПОТОЛОЧНАЯ%20ПЛИТКА%20МОЛДИНГИ">
                                                    <span className={clbottom.mosaic_shop2_folders_sub_text}>{"Молдинги"}</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/ПОТОЛОЧНАЯ%20ПЛИТКА%20УГОЛКИ%20МОЛДИНГА">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Уголки молдинга</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/ПОТОЛОЧНАЯ%20ПЛИТКА%20РОЗЕТКИ">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Розетки</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a onClick={(e) => handleCategoryClick(e, "Плинтусы и пороги напольные")} style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="https://eurodom.kg/categories/Унитазы/">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Плинтусы и пороги напольные</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Плинтусы и пороги напольные")}>
                                                        <img src={subMenuStates['Плинтусы и пороги напольные'] ? up : dawn} className={clbottom.img} data-prefix="iwhtrbpc8" />
                                                    </span>
                                                </span>
                                            </a>
                                            <ul  className={clbottom.mosaic_shop2_folders_sub_list} style={{display: `${subMenuStates['Плинтусы и пороги напольные'] ? 'flex': 'none'}`}}>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Плинтуса%20напольные%2055мм">
                                                        <span className={[clbottom.mosaic_shop2_folders_sub_text, clbottom.tovar_unik].join(' ')}>{"55мм"}</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Плинтуса%20напольные%2070мм">
                                                    <span className={[clbottom.mosaic_shop2_folders_sub_text, clbottom.tovar_unik].join(' ')}>{"70мм"}</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/Плинтуса%20напольные%2085мм">
                                                        <span className={[clbottom.mosaic_shop2_folders_sub_text, clbottom.tovar_unik].join(' ')}>85мм</span>
                                                    </a>
                                                </li>
                                                <li className={clbottom.mosaic_shop2_folders_sub_item}>
                                                    <a className={clbottom.mosaic_shop2_folders_sub_link} href="/categories/ПОРОГИ%20НАПОЛЬНЫЕ">
                                                        <span className={clbottom.mosaic_shop2_folders_sub_text}>Пороги</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="/categories/РЕЙКА%20ДЕКОРАТИВНАЯ">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Рейка Декоративная</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Рейка Декоративная")}>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="/categories/ПЛИНТУСЫ%20И%20МОЛДИНГИ%20PVC%20(ЗОЛОТО%20И%20СЕРЕБРО)">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Плинтусы и молдинги PVC (золото и серебро)</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Плинтусы и молдинги PVC (золото и серебро)")}>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="/categories/РЕЙКА%20И%20ПРОФИЛЬ">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Рейка и профиль</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Рейка и профиль")}>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                        <li style={{ position: 'relative'}} className={`${clbottom.mosaic_shop2_folders_item} has-child`}>
                                            <a  style={{display: 'flex',flexDirection: 'row',alignContent: 'center',alignItems: 'center' }} className={clbottom.mosaic_shop2_folders_link} href="/categories/СОПУТСТВУЮЩИЕ%20ТОВАРЫ%20РАЗНЫЕ">
                                                <span className={clbottom.mosaic_shop2_folders_text}>Сопутствующие товары разные</span>
                                                <span className={clbottom.mosaic_shop2_folders_icon}>
                                                    <span id="i2ex1ba1n_0" className={`svg_image ${clbottom.svg_image_u_i2ex1ba1n}`} onClick={() => handleSubMenuToggle("Сопутствующие товары разные")}>
                                                    </span>
                                                </span>
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