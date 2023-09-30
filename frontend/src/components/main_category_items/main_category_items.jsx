import cl from "./main_category_items.module.css";
import img1 from "../../img/bulochnye-izdeliya_16303856390801.jpg"
import img2 from "../../img/gastronomiya_16303856826797.jpg"
import img3 from "../../img/hleba_16303855636628.jpg"
import img4 from "../../img/konditerskie-izdeliya_16303857358731.jpg"
import img5 from "../../img/pechen-e_16303857652385.jpg"
const Main_category_items = () => {
    return (
        <div className={cl.main_category_items}>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/hleba/">
                    <span>Хлеб</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={img1} alt="Хлеб"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/bulochnye-izdeliya/">
                    <span>Булочные изделия</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={img2} alt="Булочные изделия"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/gastronomiya/">
                    <span>Гастрономия</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={img3} alt="Гастрономия"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/konditerskie-izdeliya/">
                    <span>Кондитерские изделия</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={img4} alt="Кондитерские изделия"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/novaya-kategoriya/">
                    <span>Печенье</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={img5} alt="Печенье"/>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Main_category_items;