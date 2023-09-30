import React, {useState} from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import img from "../../img/hleb-aromatnyy-2_1630386393.jpg";

const Cart = () => {
    const [mainCart, setMainCart] = useState([
        {
            id: 184978, 
            name: 'Хлеб Дарницкий', 
            image: "../../img/hleb-aromatnyy-2_1630386393.jpg", 
            text: 'Хлеб Дарницкий классический хлеб, который пользуется популярностью практически во всех городах России. В состав хлеба Дарницкий входит ржаная обдирная мука, содержащая витамины группы В и РР, улучшающие обмен веществ в организме человека. Ржаная закваска придает хлебу характерный вкус и аромат.',
            discount_prosent: '0.00',
            discount: false,
            data_discount_type: "absolute",
            price: 27.00,
            manufacturer: 'Вкусный хлебушек',
            weight: 150.00,
        }
    ]);
    return (
        <div className="item" data-discount-type="absolute" data-discount="0.00" data-code="184978">
            <div className="image">
                <div className="item_tags"></div>
                <div className="bg_dark"></div>
                <img src={img} alt="Хлеб Дарницкий" width="280px" height="280px" loading="lazy"/>
                <a href="/items/hleb-darnickiy-5112/"></a>
            </div>
            <div className="item_content">
                <div className="descr">
                    <a className="item_link" href="/items/hleb-darnickiy-5112/">Хлеб Дарницкий</a>
                </div>
                <div className="property">
                    Хлеб Дарницкий классический хлеб, который пользуется популярностью практически во всех городах России. В состав хлеба Дарницкий входит ржаная обдирная мука, содержащая витамины группы В и РР, улучшающие обмен веществ в организме человека. Ржаная закваска придает хлебу характерный вкус и аромат.
                </div>
                <div className="all_prices item_price" data-discount="">
                    <div className="price ">
                        27.00
                        руб.
                    </div>
                </div>
                <div className="btn_wrapp">
                    <form method="GET" action="/basket/add/">
                        <input type="hidden" name="step" value="1.00"/>
                        <input type="hidden" name="max" value="100.00"/>
                        <input type="hidden" name="price" value="27.00"/>
                        <input type="hidden" name="offer_id" value="432645"/>
                        <input type="hidden" name="quantity" className="number_input" value="1.00" min="1.00" step="1" max="100.00"/>
                        <button className="item_basket_add" title="Добавить в корзину: Хлеб Дарницкий">В корзину</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Cart;