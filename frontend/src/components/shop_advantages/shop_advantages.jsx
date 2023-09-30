import React from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
import "../../styles/fa-free.min.css";
const Shop_advantages = () => {
    return (
        <div className="shop-advantages">
            <div className="shop-title">Наши преимущества</div>
            <div className="triggers">
                <div className="trigger">
                    <i className="fas fa-ice-cream"></i>
                    <span><p>99 874 единиц ароматного хлеба выпекается ежедневно</p>
                    </span>
                </div>
                <div className="trigger">
                    <i className="fas fa-cubes"></i>
                    <span><p>43 024 свежих булок попадают на прилавки ежедневно</p>
                    </span>
                </div>
                <div className="trigger">
                    <i className="fas fa-calendar-check"></i>
                    <span><p>9 172 аппетитных пирогов было выпечено с начала года</p>
                    </span>
                </div>
                <div className="trigger">
                    <i className="fas fa-map-marked-alt"></i>
                    <span><p>1 804 точек реализации нашей продукции по городу и области</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Shop_advantages;