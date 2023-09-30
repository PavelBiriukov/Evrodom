import React from 'react';
import Footer from '../../../footer/footer';
import Header from '../../../header/header';
import "../../../../styles/styles.css";
import "../../../../styles/dop_styles.css";
import Filter_items from '../../../filter_items/filter_items';
import Cart from '../../../cart/cart';
import Sort_show from '../../../sort_show/sort_show';
const Gastronomiya = () => {
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
                                <span>Гастрономия</span>
                            </div>
                            <h1 className="categories_title">Гастрономия</h1>
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
                            <div className="category_text"><h2>Купить гастрономические продукты с доставкой по Москве</h2>

                                <p>Гастрономия — наука, изучающая связь между культурой и пищей. Часто ошибочно относится к кулинарии, однако последняя — только небольшая часть дисциплины.</p>

                                <p>Гастрономия относится к искусству (изощрённый вкус в еде, понимание тонкостей кулинарного искусства, также искусство готовить вкусные и утончённые блюда) и социальным наукам.</p>

                                <p>Употребляется почти исключительно в смысле свода всех знаний, касающихся поваренного искусства и умения пользоваться его произведениями. Гастрономия часто смешивается с гурманством.</p>

                                <p>Также — общее название пищевых продуктов высококачественного приготовления, первоначально закусочных.</p>

                                <p>Некоторые страны считаются странами высокой гастрономии (например, Франция).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Gastronomiya;