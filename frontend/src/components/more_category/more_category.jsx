import React from 'react';
import cl from "./more_category.module.css";

const More_category = () => {
    return (
        <div className={cl.more_category}>
            <a href="/categories/">Все категории</a>
        </div>
    );
};

export default More_category;