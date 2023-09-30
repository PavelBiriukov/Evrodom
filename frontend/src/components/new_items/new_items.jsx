import React from 'react';
import cl from "./new_items.module.css";
import img1 from "../../img/hleb-aromatnyy_1630386388.jpg"
import img2 from "../../img/hleb-aromatnyy-2_1630386393.jpg"

const New_items = () => {
    return (
        <div className={cl.new_items}>
            <div className={cl.shop_title}>Свежие поступления</div>
            <div className={cl.items}>
                <div className={cl.item} data-discount-type="percent" data-discount="5.00" data-code="184975">
                    <div className={cl.image}>
                        <div className={cl.item_tags}>
                            <div className={cl.discount}>Скидка 5%</div>
                        </div>
                        <div className={cl.bg_dark}></div>
                        <img src={img1} alt="Хлеб Ароматный" data-switch="0" width="280px" height="280px" loading="lazy"/>
                        <img src={img2} alt="Хлеб Ароматный" data-switch="1" style={{display: 'none', width:"280px" ,height:"280px"}}/>
                        <a href="/items/hleb-aromatnyj/"></a>
                    </div>
                    <div className={cl.item_content}>
                        <div className={cl.descr}>
                            <a className={cl.item_link} href="/items/hleb-aromatnyj/">Хлеб Ароматный</a>
                        </div>
                        <div className={cl.property}>
                            Батон Ароматный классика. Сухое молоко в составе придает батону нежный молочный вкус и аромат. Батон Ароматный прекрасно дополнит чаепитие в качестве основы для бутерброда или самостоятельного лакомства.
                        </div>
                        <div className={cl.all_prices } data-discount="">
                            <div className={[cl.price_new ,cl.price].join(' ')}>
                                37.05
                                руб.
                            </div>
                            <div className={[cl.price ,cl.discount_exist].join(' ')}>
                                39.00
                                руб.
                            </div>
                    </div>
                    </div>
                </div>
                <div className={cl.item} data-discount-type="absolute" data-discount="0.00" data-code="184976">
                    <div className={cl.image}>
                        <div className={cl.item_tags}>
                    </div>
                    <div className={cl.bg_dark}></div>
                    <img src={img1} alt="Хлеб Советский" data-switch="0" width="280px" height="280px" loading="lazy"/>
                    <img src={img2} alt="Хлеб Советский" data-switch="1" style={{display: 'none', width:"280px" ,height:"280px"}}/>
                        <a href="/items/hleb-sovetskiy-4178/"></a>
                    </div>
                    <div className={cl.item_content}>
                        <div className={cl.descr}>
                            <a className={cl.item_link} href="/items/hleb-sovetskiy-4178/">Хлеб Советский</a>
                        </div>
                        <div className={cl.property}>
                            Хлеб Советский изготовлен из смеси ржаной и пшеничной муки по традиционной технологии советского времени. Ржаной солод придает хлебу Советский насыщенный аромат и обогащает его витаминами группы В и микроэлементами, оказывающими общеукрепляющее действие на здоровье человека.
                        </div>
                        <div className={cl.all_prices } data-discount="">
                            <div className={cl.price }>
                                38.00
                                руб.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default New_items;