import React from 'react';
import Footer from '../../../footer/footer';
import Header from '../../../header/header';
import "../../../../styles/styles.css";
import "../../../../styles/dop_styles.css";
import Filter_items from '../../../filter_items/filter_items';
import Cart from '../../../cart/cart';
import Sort_show from '../../../sort_show/sort_show';
const Hleba = () => {
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
                                <span>Хлеб</span>
                            </div>
                            <h1 className="categories_title">Хлеб</h1>
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
                            <div className="category_text"><h2>Купить хлебобулочные изделия с доставкой</h2>

                                <p>Хлеб — хлебобулочное изделие, получаемое путём выпекания теста (состоящего как минимум из муки и воды), разрыхлённого дрожжами или закваской. Согласно российскому ГОСТу, к хлебу относят такие хлебобулочные изделия, масса которых превышает 500 г, а влажность должна быть не менее 19%.</p>

                                <p>Для приготовления хлеба используют пшеничную и ржаную муку, реже — кукурузную, ячменную и другие. Словом хлеб часто называют сельскохозяйственные культуры (пшеницу, рожь, ячмень и другие), а также само зерно этих культур и изготовляемую из него муку (см. Зерновые культуры). В некоторые сорта хлеба также добавляют специи — такие, как зёрна тмина, орехи, изюм, чеснок, курагу и зёрнышки (семена кунжута, мака и другие). Зёрнышки также служат для украшения.</p>

                                <p>Хлеб можно есть отдельно, также его употребляют со сливочным, арахисовым или подсолнечным маслом, вареньем, маргарином, повидлом, джемом, желе, мармеладом, мёдом, что по сути является блюдом, носящим название бутерброд. Хлеб используется также как основа для сэндвича. Он может быть только выпеченным или впоследствии подрумянен (например, в тостере), может подаваться почти без ограничений, комнатной температуры или горячим. В некоторых культурах хлеб одновременно используется и как столовый прибор.</p>

                                <p>Неупакованный хлеб можно хранить в хлебнице, и так он дольше останется свежим.</p>

                                <p>Существует наследственное заболевание, целиакия, при котором употребление в пищу хлеба противопоказано из-за содержащегося в нём глютена. Больной должен соблюдать пожизненную безглютеновую диету.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Hleba;