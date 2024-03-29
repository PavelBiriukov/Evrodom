import React, { useEffect, useRef, useState } from 'react';
import { useFetcher, useParams } from 'react-router-dom';
import useActions from '../../hooks/useAcrions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ICard } from '../../type/cards';
import { CardItemProps } from '../CardItem/CardItem';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import "../../styles/swiper.css";
import Footer from '../footer/footer';
import Header from '../header/header';
import ReactImageZoom from 'react-image-zoom';
import { relative } from 'path';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import Basket_popup_wrapper from '../basket_popup_wrapper/basket_popup_wrapper';
import cl from '../registration/registration.module.css';
import clPOPAP from './CardID.module.css';
import close from '../../img/icon/cross (1).png';

const CardID: React.FC<CardItemProps> = () => {
    const { id } = useParams<{ id: string }>();
    const [card, setCard] = useState<ICard | any>();
    const { getCardById, fetchCard, addToBasket, getBasket } = useActions()
    const [cardsItem, setCardsItem] = useState<ICard[] | any>();
    const { cards } = useTypedSelector(state => state.card);
    const { user, isAuth } = useTypedSelector(state => state.users);
    const { items } = useTypedSelector(state => state.basket);

    const [popapImg, setPopapImg] = useState('');
    const [closeOpenImg, setCloseOpenImg] = useState('');

    const openClosePopapImg = (imgName: string) => {
        if (imgName === 'Открыть') {
            setCloseOpenImg('flex')
        }
        if (imgName === 'Закрыть') {
            setCloseOpenImg('none')
        }
    }
    useEffect(() => {
        fetchCard(0,0);
    }, []);

    useEffect(() => {
        if (cards.length > 0 && card?.category) {
            const filteredCards = cards.filter((cardCategory: ICard) => cardCategory.category === card?.category);
            setCardsItem(filteredCards);
        }
    }, [cards, card?.category]);

    const fetchData = async () => {
        try {
            const cardData = await getCardById(id);
            setCard(cardData)
            // Теперь у вас есть доступ к данным из response.data
        } catch (error) {
            console.error('Error fetching card data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: 'vertical', // or 'horizontal' as per your design
        });

        const galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    }, []);
    const [mainImage, setMainImage] = useState<string>(); // Добавляем состояние для главного изображения

    useEffect(() => {
        setMainImage(card?.picture[0])
    }, [card])

    // Обработчик клика по миниатюре
    const handleThumbnailClick = (image: string) => {
        setMainImage(image); // Обновляем главное изображение при клике на миниатуре
    };
    //Пораметры товара
    const parseParameters = (parametersString: string) => {
        const parametersArray = parametersString.split(';'); // Разбиваем строку на массив по точке с запятой
        const parametersObject: any = {};

        parametersArray.forEach((parameter) => {
            const [key, value] = parameter.split(':'); // Разбиваем элемент массива на ключ и значение по двоеточию
            if (key && value) {
                parametersObject[key.trim()] = value.trim(); // Удаляем лишние пробелы в ключе и значении и добавляем в объект
            }
        });

        return parametersObject;
    };
    const parsedParameters = card?.unique_parameters ? parseParameters(card.unique_parameters) : {};

    //карзина
    const [showPopup, setShowPopup] = useState(false);
    const handleAddToCart = (item: ICard) => {
        if (isAuth) {
            const basketDto = {
                userId: user.id,
                items: [item],
            };
            addToBasket(basketDto)
            setShowPopup(true);
        }

    };


    const handleClosePopup = () => {
        setShowPopup(false);
    };
    const imageRef = useRef<any>(null);
    const [imageSize, setImageSize] = useState({ width: 0 });

    useEffect(() => {
        const updateImageSize = () => {
            if (imageRef.current) {
                const { width } = imageRef.current.getBoundingClientRect();
                setImageSize({ width });
            }
        };

        // Вызываем функцию обновления размеров при загрузке контента и изменении размеров окна
        updateImageSize(); // При первой отрисовке страницы
        window.addEventListener('resize', updateImageSize);
        // Очищаем слушатель события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', updateImageSize);
        };

    }, []); // Пустой массив зависимостей означает, что эффект будет запускаться только после монтирования и размонтирования компонента
    console.log(imageSize.width);

    if (!card) {
        return <div>Карточка не найдена.</div>;
    }
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <div className='block main'>
                    <div className='inner'>
                        <div className="content nositebar ">
                            <div className="breadcrumb">
                                <span><a href="/">Главная</a>/</span>
                                <span><a href={`/categories/${card?.category}/`}>{card?.category}</a>/</span>
                                <span>{card.name}</span>
                            </div>
                            <div className="item_preview">
                                <div className="left">
                                    <div className="extra_image">
                                        <div className="swiper-container gallery-thumbs swiper-container-initialized swiper-container-vertical swiper-container-thumbs">
                                            <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
                                                {card.picture.map((imgCard: string, index: number) => (
                                                    <div key={index} className="swiper-slide">
                                                        <img
                                                            src={'https://eurodom.kg/api/' + imgCard}
                                                            alt={`Image ${index}`}
                                                            className="swiper-zoom"
                                                            onClick={() => handleThumbnailClick(imgCard)} // Добавляем обработчик клика
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image" ref={imageRef}>
                                        <div className="swiper-container gallery-top swiper-container-initialized swiper-container-horizontal swiper-container-autoheight">
                                            <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', height: '100%', transitionDuration: "0ms" }}>
                                                <div onClick={() => openClosePopapImg('Открыть')} className="swiper-slide offer_image_0 swiper-slide-active" style={{ width: "100%" }}>
                                                    <ReactImageZoom
                                                        {...{
                                                            width: imageSize.width,
                                                            height: imageSize.width,
                                                            zoomWidth: 500,
                                                            scale: 1,
                                                            img: `https://eurodom.kg/api/${mainImage}`,
                                                            zoomImg: `https://eurodom.kg/api/${mainImage}`,
                                                            offset: {
                                                                horizontal: -440,
                                                            },
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            {/* <div className="swiper-button-next"></div>
                                            <div className="swiper-button-prev"></div> */}
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                        </div>
                                    </div>
                                </div>
                                {/* __________________ */}
                                <div className="right">
                                    <h1 className="item_title">{card.name}</h1>
                                    <div className="item_short_description">{card.description}</div>
                                    <div className="right_top">
                                        <div className="availability exist">В наличии: {card.product_availability}</div>
                                        <div className="code v_code">ID товара:
                                            <span className="vendor_or_id">{card._id}</span>
                                        </div>
                                    </div>
                                    <div className="item_details">
                                        {/* <div className="item_detail colors_wrapper" style={{ display: "block" }}>
                                            <div className="details_title">Выберите цвет</div>
                                            <div className="colors"></div>
                                        </div>
                                        <div className="item_detail sizes_wrapper" style={{ display: "block" }}>
                                            <div className="details_title">Выберите размер</div>
                                            <div className="sizes"></div>
                                        </div> */}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} className="item_price" data-discount="5.00" data-discount-type="percent">
                                        <div className="total_price">
                                            <span className="total_new">{card.price} сом</span>
                                        </div>
                                        <div>
                                            <button onClick={() => handleAddToCart(card)} style={{ marginTop: '10px', width: '250px', alignItems: 'end' }} className={`"item_add_to_cart" ${cl.button}`}>В корзину</button>
                                        </div>
                                        <Basket_popup_wrapper style={showPopup} handleClosePopup={handleClosePopup} />
                                    </div>
                                    <div className="properties">
                                        <div className="properties_basis">
                                            <div className="prop_row">
                                                <div className="prop_title">Производитель:</div>
                                                <div className="separator_tabulator"></div>
                                                <div className="prop_val">
                                                    <p>{card.maker}</p>
                                                </div>
                                            </div>
                                            <div className="prop_row">
                                                <div className="prop_title">Единица измерения:</div>
                                                <div className="separator_tabulator"></div>
                                                <div className="prop_val">{card.unit_of_measurement}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main description">
                                <div className="item_description_title">Описание товара</div>
                                <div className="item_description">
                                    {Object.keys(parsedParameters).map((key, index) => (
                                        <p className='style_porametr_object' key={index}>
                                            {key}: <p className='style_porametr_object_type'>{parsedParameters[key]}</p>
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <h2 className="shop-title">Рекомендуем посмотреть</h2>
                            <div className='items equivalent_items'>
                                {cardsItem
                                    ?.filter((cardCatigor: ICard) => cardCatigor._id !== card._id)
                                    .map((cardCatigor: ICard, index: string) =>
                                        <div key={index} className="item" data-discount-type="" data-code="89238">
                                            <div className="image">
                                                <div className="item_tags">
                                                </div>
                                                <div className="bg_dark"></div>
                                                <img src={`https://eurodom.kg/api/${cardCatigor.picture[0]}`} alt={cardCatigor.name} width="280px" height="280px" loading="lazy" />
                                                <a href={`/items/${cardCatigor._id}/`}></a>
                                            </div>
                                            <div className="item_content">
                                                <div className="descr">
                                                    <a className="item_link" href={`/items/${cardCatigor._id}/`}>{cardCatigor.name}</a>
                                                </div>
                                                <div className="all_prices " data-discount="">
                                                    <div className="price ">
                                                        {cardCatigor.price}
                                                        сом.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: `${closeOpenImg}` }} className={clPOPAP.blockPopapIMG}>
                    <div className={clPOPAP.block_img}>
                        <button style={{}} className={clPOPAP.close} onClick={() => openClosePopapImg('Закрыть')}>
                            <img className={clPOPAP.img_close} src={close} alt="" />
                        </button>
                        <img className={clPOPAP.img} src={`https://eurodom.kg/api/${mainImage}`} alt="" />
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
};

export default CardID;