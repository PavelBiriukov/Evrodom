import cl from "./main_category_items.module.css";
import dveri from "../../img/main_Catigorios_items/Dveri_2.png"
import Caideng_veniloviy from "../../img/main_Catigorios_items/Caideng_veniloviy_1.png"
import linolium from "../../img/main_Catigorios_items/Linolium.png"
import mdf_paneli from "../../img/main_Catigorios_items/mdf_paneli.png"
import Plastic_potoloxysq_PVH from "../../img/main_Catigorios_items/Plactic_potolochniy_PVH.png"

const Main_category_items = () => {
    return (
        <div className={cl.main_category_items}>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/Двери/">
                    <span>Двери</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={dveri} alt="Двери"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/Линолеум/">
                    <span>Линолеум</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={linolium} alt="Линолеум"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/САЙДИНГ ВИНИЛОВЫЙ ФОСАДНЫЙ/">
                    <span>САЙДИНГ ВИНИЛОВЫЙ ФОСАДНЫЙ</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={Caideng_veniloviy} alt="САЙДИНГ ВИНИЛОВЫЙ ФОСАДНЫЙ"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/ПЛАСТИК ПОТОЛОЧНЫЙ ПВХ/">
                    <span>ПЛАСТИК ПОТОЛОЧНЫЙ ПВХ</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={Plastic_potoloxysq_PVH} alt="ПЛАСТИК ПОТОЛОЧНЫЙ ПВХ"/>
                    </div>
                </a>
            </div>
            <div className={cl.main_category_item}>
                <a className={cl.category_link} href="/categories/МДФ ПАНЕЛИ/">
                    <span>МДФ ПАНЕЛИ</span>
                    <div style={{overflow: 'hidden', maxHeight: '530px'}}>
                        <img src={mdf_paneli} alt="МДФ ПАНЕЛИ"/>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Main_category_items;