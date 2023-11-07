import React from 'react';
import cl from './admin_main.module.css';

const Admin_main = () => {
    return (
        <div className={cl.block}>
            <div className={cl.block_link}>
                <a href="/admin/createCard">Работа с товаром</a>
            </div>
            <div className={cl.block_link}>
                <a href="/admin/createCategories">Работа с катигориями</a>
            </div>
        </div>
    );
};

export default Admin_main;