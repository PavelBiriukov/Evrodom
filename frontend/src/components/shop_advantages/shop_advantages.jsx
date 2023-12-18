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
                    <i className="fas">20</i>
                    <span><p style={{fontWeight: '700',
    fontSize: '20px'}}>20 лет на рынке </p>
                    </span>
                </div>
                <div className="trigger">
                    <i className="fas">742</i>
                    <span><p style={{fontWeight: '700',
    fontSize: '20px'}}>742 еденицы товара</p>
                    </span>
                </div>
                <div className="trigger">
                    <i className="fas">10к</i>
                    <span><p style={{fontWeight: '700',
    fontSize: '20px'}}>10 000 довольных клиентов за все время</p>
                    </span>
                </div>
                <div className="trigger">
                    <i className="fas ">20</i>
                    <span><p style={{fontWeight: '700',
    fontSize: '20px'}}>20 компаний работающих с нами</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Shop_advantages;