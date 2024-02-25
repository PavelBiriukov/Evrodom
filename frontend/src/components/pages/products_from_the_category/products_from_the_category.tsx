import React, { useEffect, useState } from 'react';
import "../../../styles/styles.css";
import "../../../styles/dop_styles.css";
import { useParams } from 'react-router-dom';
import useActions from '../../../hooks/useAcrions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ICard } from '../../../type/cards';
import Header from '../../header/header';
import Select from '../../select/select';
import blocks_icon from '../../../img/icon/free-icon-four-rounded-squares-button-54784.png'
import longs_icon from '../../../img/icon/free-icon-menu-three-outlined-rounded-lines-symbol-54206.png'
import blocks_icon_Green from '../../../img/icon/four-rounded-squares-button.png'
import longs_icon_Green from '../../../img/icon/menu-three-outlined-rounded-lines-symbol.png'
import Footer from '../../footer/footer';
import Basket_popup_wrapper from '../../basket_popup_wrapper/basket_popup_wrapper';

const Products_from_the_category = () => {
    const { fetchCard,addToBasket } = useActions();
    const { cards } = useTypedSelector(state => state.card);
    const { categoryName } = useParams();
    const [cardsItem, setCardsItem] = useState<ICard[] | any>();
    const [sortType, setSortType] = useState<string>(''); // Хранение выбранного типа сортировки
    const [isGridView, setIsGridView] = useState(true);
    const [priсeMin, setPriсeMin] = useState<any>();
    const [priсeMax, setPriсeMax] = useState<any>();
    const [filteredProducts, setFilteredProducts] = useState<ICard[] | any>();
    const displayItems = filteredProducts && filteredProducts.length > 0 ? filteredProducts : cardsItem;
    const [showPopup, setShowPopup] = useState(false);
    const { user, isAuth } = useTypedSelector(state => state.users);
    /* Добавление товров */
    useEffect(() => {
        fetchCard(20, 0);
    }, []);

    useEffect(() => {
        const filteredCards = cards.filter((card: any) => card.category === categoryName);
        setCardsItem(filteredCards);
    }, [cards, categoryName]);

    /* Сортировка по  */
    const sortCards = (type: string) => {
        setSortType(type);
        const sortedCards = [...cardsItem]; // Create a new array to avoid mutating the original state
        if (type === 'popular') {
            // Sorting logic by popularity or any other custom logic
            sortedCards.sort((a, b) => a.name.localeCompare(b.name)); // Example: Sort by name
        } else if (type === 'price_asc') {
            sortedCards.sort((a, b) => a.price - b.price);
        } else if (type === 'price_desc') {
            sortedCards.sort((a, b) => b.price - a.price);
        }
        setCardsItem(sortedCards); // Update state with the new sorted array
    };

    /* Изменение вида товаров блок или лист */
    const switchToGridView = () => {
        setIsGridView(true);
    };
    const switchToListView = () => {
        setIsGridView(false);
    };
    /* Фильтрация */

    const productWithMinPrice = Array.isArray(cardsItem) && cardsItem.length > 0 ?
        cardsItem.reduce((minProduct, currentProduct) => {
            return (currentProduct.price < minProduct.price) ? currentProduct : minProduct;
        }, cardsItem[0]) : null;
        console.log(productWithMinPrice);
        
    const productWithMaxPrice = Array.isArray(cardsItem) && cardsItem.length > 0 ?
        cardsItem.reduce((maxProduct, currentProduct) => {
            return (currentProduct.price > maxProduct.price) ? currentProduct : maxProduct;
        }, cardsItem[0]) : null;


    const filterByPriceRange = (products: [any], minPrice: any, maxPrice: any) => {
        return products?.filter((product: any) => product.price >= minPrice && product.price <= maxPrice);
    };

    useEffect(() => {
        if (cardsItem) {
            const productsInRange = filterByPriceRange(cardsItem, priсeMin, priсeMax);
            setFilteredProducts(productsInRange);
        }
    }, [cardsItem, priсeMin, priсeMax]);

    /* Сортировака по производителю */

    // Получение всех производителей
    const manufacturers = Array.isArray(cardsItem) && cardsItem.length > 0 ?
        cardsItem.map((card: ICard) => card.maker) : [];

    // Оставление только уникальных производителей
    const uniqueManufacturers = manufacturers.filter((value, index, self) => self.indexOf(value) === index);

    // Сортировка производителей в алфавитном порядке
    const sortedUniqueManufacturers = uniqueManufacturers.sort();

    // Обновление состояния чекбоксов
    const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);

    // Функция для обработки изменений в чекбоксе
    const handleManufacturerChange = (maker: string) => {
        if (selectedManufacturers.includes(maker)) {
            const updatedManufacturers = selectedManufacturers.filter((item) => item !== maker);
            setSelectedManufacturers(updatedManufacturers);
        } else {
            setSelectedManufacturers([...selectedManufacturers, maker]);
        }
    };

    // Применение фильтрации на основе выбранных производителей
    const filteredByManufacturers = displayItems?.filter((card: any) => {
        if (selectedManufacturers.length === 0) {
            return true; // Если ни один производитель не выбран, показываем все товары
        } else {
            return selectedManufacturers.includes(card.maker); // Фильтрация по выбранным производителям
        }
    });

    useEffect(() => {
        if (cardsItem) {
            let filteredByManufacturer: any = [...cardsItem];

            if (selectedManufacturers.length > 0) {
                filteredByManufacturer = filteredByManufacturer.filter((card: any) => {
                    if (selectedManufacturers.includes(card.maker)) {
                        return true;
                    }
                    return false;
                });
            }

            if ((priсeMin !== undefined && priсeMax !== undefined) && (priсeMin !== 0 || priсeMax !== 0)) {
                const productsInRange = filterByPriceRange(filteredByManufacturer, priсeMin, priсeMax);
                setFilteredProducts(productsInRange);
            } else {
                setFilteredProducts(filteredByManufacturer);
            }
        }
    }, [cardsItem, priсeMin, priсeMax, selectedManufacturers]);

    //кoрзина
    const handleAddToCart = (item: ICard) => {
        if (isAuth) {
            const basketDto = {
                userId: user.id,
                items: [item],
            };
            addToBasket(basketDto)
            setShowPopup(true);
        }
        console.log(item);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    ///
    const [showPrice, setShowPrice] = useState(false);
    const [showManufacturer, setShowManufacturer] = useState(false);
    const [show, setShow] = useState(false);

    const handleShowClick = () => {
        setShow(!show);
    };

    const handlePriceClick = () => {
        setShowPrice(!showPrice);
    };

    const handleManufacturerClick = () => {
        setShowManufacturer(!showManufacturer);
    };
    ///
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <div className='block main'>
                    <div className='inner'>
                        <form method="GET" className="filter_items desktop">
                            <div className="filter_bar">
                                <div className="title"><span>Фильтр по параметрам</span>
                                </div>
                                <div className="price_range range_all">
                                    <div className="f_title">Цена сом
                                    </div>
                                    <div className="list price_wrapp" style={{ display: 'block' }}>
                                        <div className="field">
                                            <input
                                                className="f_price min"
                                                placeholder={`от ${productWithMinPrice?.price}`}
                                                name="min_price"
                                                id="min_price"
                                                type="text"
                                                value={priсeMin}
                                                onChange={(e) => setPriсeMin(Number(e.target.value))}
                                            />
                                            <input
                                                className="f_price max"
                                                placeholder={`до ${productWithMaxPrice?.price}`}
                                                name="max_price"
                                                id="max_price"
                                                type="text"
                                                value={priсeMax}
                                                onChange={(e) => setPriсeMax(Number(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="filter_checkbox filter_checkbox_all ">
                                    <div className="f_title">Производитель</div>
                                    <div className="list active" style={{ display: 'block' }}>
                                        {sortedUniqueManufacturers.map((maker: string) =>
                                            <label key={maker} className="checkbox_container maker">
                                                <div className="radio_title">{maker}</div>
                                                <input
                                                    data-type="ur"
                                                    name={maker}
                                                    type="checkbox"
                                                    value={maker}
                                                    checked={selectedManufacturers.includes(maker)}
                                                    onChange={() => handleManufacturerChange(maker)}
                                                />
                                                <span className="checkmark"></span>
                                            </label>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="content nositebar filter">
                            <div className="breadcrumb">
                                <span><a href="/">Главная</a> / </span>
                                <span><a href="#">{categoryName}</a></span>
                            </div>
                            <h1 className="categories_title">{categoryName}</h1>
                            <h4>Всего {cardsItem?.length} товаров</h4>
                            <div className="sort_show">
                                <form method="GET" className="filter_items mobile">
                                    <div className="filter_bar">
                                        <div className="title" onClick={handleShowClick}>
                                            <span >Фильтр по параметрам</span>
                                        </div>
                                        {show && (
                                        <>  
                                            <div className="price_range range_all">
                                                <div className="f_title" onClick={handlePriceClick}>Цена сом
                                                </div>
                                                {showPrice && (
                                                <div className="list price_wrapp" style={{ display: 'block' }}>
                                                    <div className="field">
                                                        <input
                                                            className="f_price min"
                                                            placeholder={`от ${productWithMinPrice?.price}`}
                                                            name="min_price"
                                                            id="min_price"
                                                            type="text"
                                                            value={priсeMin}
                                                            onChange={(e) => setPriсeMin(Number(e.target.value))}
                                                        />
                                                        <input
                                                            className="f_price max"
                                                            placeholder={`до ${productWithMaxPrice?.price}`}
                                                            name="max_price"
                                                            id="max_price"
                                                            type="text"
                                                            value={priсeMax}
                                                            onChange={(e) => setPriсeMax(Number(e.target.value))}
                                                        />
                                                    </div>
                                                </div>
                                                )}
                                            </div>
                                            <div className="filter_checkbox filter_checkbox_all ">
                                                <div className="f_title" onClick={handleManufacturerClick}>Производитель</div>
                                                {showManufacturer && (
                                                <div className="list active" style={{ display: 'block' }}>
                                                    {sortedUniqueManufacturers.map((maker: string) =>
                                                        <label key={maker} className="checkbox_container maker">
                                                            <div className="radio_title">{maker}</div>
                                                            <input
                                                                data-type="ur"
                                                                name={maker}
                                                                type="checkbox"
                                                                value={maker}
                                                                checked={selectedManufacturers.includes(maker)}
                                                                onChange={() => handleManufacturerChange(maker)}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    )}
                                                </div>
                                                )}
                                            </div>
                                        </>  
                                        )}    
                                    </div>
                                </form>
                                <div className="sort sort_mobile">
                                    <div className="title">Сортировка</div>
                                    <Select
                                        value={sortType}
                                        onChange={sortCards}
                                        options={[
                                            { name: 'по популярности', value: 'popular' },
                                            { name: 'по возрастанию цены', value: 'price_asc' },
                                            { name: 'по убыванию цены', value: 'price_desc' },
                                        ]}
                                    />
                                    <div className="show">
                                        <div className="show_style">
                                            <div className={`grid ${isGridView ? 'active' : ''}`} data-id="grid" title="Показывать в виде плиток" onClick={switchToGridView}>
                                                {!isGridView ?
                                                    <img style={{ width: '20px', height: '20px' }} src={blocks_icon} alt="Grid View" />
                                                    :
                                                    <img style={{ width: '20px', height: '20px' }} src={blocks_icon_Green} alt="Grid View" />
                                                }
                                            </div>
                                            <span></span>
                                            <div className={`list ${!isGridView ? 'active' : ''}`} data-id="list" title="Показывать в виде списка" onClick={switchToListView}>
                                                {!isGridView ?
                                                    <img style={{ width: '22px', height: '22px' }} src={longs_icon_Green} alt="List View" />
                                                    :
                                                    <img style={{ width: '22px', height: '22px' }} src={longs_icon} alt="List View" />

                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {displayItems && displayItems.length > 0 ? (
                                <div className={`items items_table ${isGridView ? 'grid' : 'list'}`}>
                                    {displayItems?.map((card: ICard) =>
                                        <div key={card._id} className="item" data-discount-type="absolute" data-discount="0.00" data-code="89236">
                                            <div className="image">
                                                <div className="item_tags"></div>
                                                <div className="bg_dark"></div>
                                                <img src={`https://eurodom.kg/api/${card.picture[0]}`} alt={card.name} width="280px" height="280px" loading="lazy" />
                                                <a href={`/items/${card._id}`}></a>
                                            </div>
                                            <div className="item_content">
                                                <div className="descr">
                                                    <a className="item_link" href={`/items/${card._id}`}>{card.name}</a>
                                                </div>
                                                <div className="property">
                                                    {card.description}
                                                </div>
                                                <div className="all_prices item_price" data-discount="">
                                                    <div className="price ">{card.price} сом</div>
                                                    <div className="btn_wrapp">
                                                        <div>
                                                            <button onClick={() => handleAddToCart(card)} className="item_basket_add" title={`Добавить в корзину: ${card.name}`}>В корзину</button>
                                                        </div>
                                                        <Basket_popup_wrapper style={showPopup} handleClosePopup={handleClosePopup} />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <h1 style={{ display: 'flex', justifyContent: 'center' }}>Товара нет в наличии</h1>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Products_from_the_category;