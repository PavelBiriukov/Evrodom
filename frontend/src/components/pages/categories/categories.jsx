import React from 'react';
import "../../../styles/styles.css";
import "../../../styles/dop_styles.css";
import Footer from '../../footer/footer';
import Header from '../../header/header';
const Categories = () => {
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
                                <div className="category_item">
                                    <a href="/categories/hleba/">
                                        <img src="/img/300x205/6958/categories/hleba_16303855636628.jpg" width="300px" height="205px" loading="lazy"/>
                                            <span>Хлеб</span>
                                    </a>
                                </div>
                                <div className="category_item">
                                    <a href="/categories/bulochnye-izdeliya/">
                                        <img src="/img/300x205/6958/categories/bulochnye-izdeliya_16303856390801.jpg" width="300px" height="205px" loading="lazy"/>
                                            <span>Булочные изделия</span>
                                    </a>
                                </div>
                                <div className="category_item">
                                    <a href="/categories/gastronomiya/">
                                        <img src="/img/300x205/6958/categories/gastronomiya_16303856826797.jpg" width="300px" height="205px" loading="lazy"/>
                                            <span>Гастрономия</span>
                                    </a>
                                </div>
                                <div className="category_item">
                                    <a href="/categories/konditerskie-izdeliya/">
                                        <img src="/img/300x205/6958/categories/konditerskie-izdeliya_16303857358731.jpg" width="300px" height="205px" loading="lazy"/>
                                            <span>Кондитерские изделия</span>
                                    </a>
                                </div>
                                <div className="category_item">
                                    <a href="/categories/novaya-kategoriya/">
                                        <img src="/img/300x205/6958/categories/pechen-e_16303857652385.jpg" width="300px" height="205px" loading="lazy"/>
                                            <span>Печенье</span>
                                    </a>
                                </div>
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