import React from 'react';
import Footer from '../../../footer/footer';
import Header from '../../../header/header';
import "../../../../styles/styles.css";
import "../../../../styles/dop_styles.css";
import Filter_items from '../../../filter_items/filter_items';
import Cart from '../../../cart/cart';
import Sort_show from '../../../sort_show/sort_show';
const Konditerskie_izdeliya = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <div className='block main'>
                    <div className='inner'>
                        <Filter_items />
                        <div className="content nositebar filter">
                            <div className="breadcrumb">
                                <span><a href="/">Главная</a> / </span>
                                <span>Кондитерские изделия</span>
                            </div>
                            <h1 className="categories_title">Кондитерские изделия</h1>
                            <h4>Всего 6 товаров</h4>
                            <Sort_show />
                            <div className="items grid items_table">
                                <Cart />
                                <Cart />
                                <Cart />
                                <Cart />
                                <Cart />
                                <Cart />
                            </div>
                            <div className="category_text"><h2>Купить кондитерские изделия с доставкой по Москве</h2>

                                <p>Кондитерские изделия — продукты питания, как правило, с большим содержанием сахара, отличающиеся высокой калорийностью и усваиваемостью. Подразделяются на группы: сахаристые, мучные кондитерские изделия, шоколад, какао.</p>

                                <p>В зависимости от используемых ингредиентов, все виды кондитерских изделий делятся на две основные группы: сахаристые (шоколад, мармелад, карамель, конфеты, халва, драже) и мучные (печенье, пряники, торты, кексы, вафли, пирожные). Бывает, что кондитерское изделие содержит элементы обеих групп, однако только одна считается основной (например вафли с клубникой — мучное, хотя клубничный наполнитель — сахаристое).</p>

                                <p>В качестве основного сырья для приготовления кондитерских изделий используются следующие виды продуктов: мука (пшеничная, реже кукурузная, рисовая, овсяная и др.), сахар, мёд, фрукты и ягоды, молоко и сливки, жиры, яйца, дрожжи, крахмал, какао, орехи, пищевые кислоты, желирующие вещества, вкусовые и ароматические добавки, пищевые красители и разрыхлители.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Konditerskie_izdeliya;