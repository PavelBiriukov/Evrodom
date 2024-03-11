import cl from "./main_category_items.module.css";
import dveri from "../../img/main_Catigorios_items/Dveri_2.png"
import Caideng_veniloviy from "../../img/main_Catigorios_items/Caideng_veniloviy_1.png"
import linolium from "../../img/main_Catigorios_items/Linolium.png"
import mdf_paneli from "../../img/main_Catigorios_items/26_1_mdflam_galeri_buyuk.jpg"
import Plastic_potoloxysq_PVH from "../../img/main_Catigorios_items/Plactic_potolochniy_PVH.png"
import Santehnica from "../../img/main_Catigorios_items/1581590574_57-p-modnii-dizain-vannikh-komnat-84.jpg"

const Main_category_items = () => {
    return (
        <div className={cl.main_category_items}>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/МЕЖКОМНАТНЫЕ">
                    <span className={cl.category_tytle}>Двери</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={dveri} alt="Двери"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href={`/categories/КЛАСС%20"ПАРМА"`}>
                    <span className={cl.category_tytle}>Линолеум</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={linolium} alt="Линолеум"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/САЙДИНГ%20ФАСАДНЫЙ%20(ВИНИЛОВЫЙ)">
                    <span className={cl.category_tytle}>САЙДИНГ ФАСАДНЫЙ ВИНИЛОВЫЙ </span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={Caideng_veniloviy} alt="САЙДИНГ ФАСАДНЫЙ ВИНИЛОВЫЙ"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/ЛИСТОВЫЕ%20(ГИБКИЙ%20МРАМОР)">
                    <span className={cl.category_tytle}>Панели PVC (Пластиковые)</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={Plastic_potoloxysq_PVH} alt="Панели PVC (Пластиковые)"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/Панели%20МДФ%20ЛИСТОВЫЕ%20(ЖЁСТКИЕ%20ОБОИ)%20/">
                    <span className={cl.category_tytle}>ПАНЕЛИ МДФ</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img style={{width: '118.2%'}} src={mdf_paneli} alt="ПАНЕЛИ МДФ"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/Унитазы">
                    <span className={cl.category_tytle}>Сантехника</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img style={{width: '117%'}} src={Santehnica} alt="Сантехника"/>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Main_category_items;