import React, { useEffect } from 'react';
import "../../../styles/styles.css";
import "../../../styles/dop_styles.css";
import Footer from '../../footer/footer';
import Header from '../../header/header';
import { ICategories } from '../../../type/categories';
import useActions from '../../../hooks/useAcrions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import cl from './categories.module.css'
import { Link } from 'react-router-dom';

const Categories = () => {
    const { fetchCategories } = useActions()
    const { categories, error } = useTypedSelector(state => state.categories);
    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <div className='block main'>
                    <div className='inner'>
                        <div className="content nositebar ">
                            <div className="breadcrumb">
                                <span><a href="/">Главная</a> / </span>
                                <span>Категории</span>
                            </div>
                            <h1 className="categories_title">Категории</h1>
                            <div className="category_items size_220x150">
                                {categories.map((category) => (
                                    <div key={category._id} className="category_item">
                                        <Link to={`/categories/${category.name}`}>
                                            <img src={`http://localhost:5000/${category.picture[0]}`} className={cl.item_img} loading="lazy" />
                                            <span>{category.name}</span>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Categories;