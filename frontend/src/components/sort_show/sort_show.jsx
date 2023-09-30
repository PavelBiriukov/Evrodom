import React from 'react';
import "../../styles/styles.css";
import "../../styles/dop_styles.css";
const Sort_show = () => {
    return (
        <div className="sort_show">
            <form method="GET" className="filter_items mobile" id="filter_items">
                <div className="filter_bar">
                    <div className="title"><span>Фильтр по параметрам</span>
                        <i className="fas fa-filter"></i>
                    </div>
                    <div className="price_range range_all">
                        <div className="f_title  ">Цена руб.
                            <i className="fas fa-chevron-down"></i>
                        </div>
                        <div className="list price_wrapp  ">
                            <div className="field">
                                <input className="f_price min" name="min_price" id="min_price" type="text" value="27.00"/>
                                    <input className="f_price max" name="max_price" id="max_price" type="text" value="45.00"/>
                                    </div>
                                    <div className="field">
                                        <span className="irs irs--round js-irs-1 irs-with-grid">
                                            <span className="irs">
                                                <span className="irs-line" tabindex="0"></span>
                                                <span className="irs-min" style={{}}>27</span>
                                                <span className="irs-max" style={{}}>45</span>
                                                <span className="irs-from">0</span>
                                                <span className="irs-to">0</span>
                                                <span className="irs-single">0</span>
                                            </span>
                                            <span className="irs-grid">
                                                <span className="irs-grid-pol" style={{left: '0%'}}></span>
                                                <span className="irs-grid-text js-grid-text-0" style={{left: '0%'}}>27</span>
                                                <span className="irs-grid-pol small" style={{left: '20%'}}></span>
                                                <span className="irs-grid-pol small" style={{left: '15%'}}></span>
                                                <span className="irs-grid-pol small" style={{left: '10%'}}></span>
                                                <span className="irs-grid-pol small" style={{left: "5%"}}></span>
                                                <span className="irs-grid-pol" style={{left: "25%"}}></span>
                                                <span className="irs-grid-text js-grid-text-1" style={{left: '25%', visibility: "hidden"}}>32</span>
                                                <span className="irs-grid-pol small" style={{left: "45%"}}></span>
                                                <span className="irs-grid-pol small" style={{left: "40%"}}></span>
                                                <span className="irs-grid-pol small" style={{left: "35%"}}></span>
                                                <span className="irs-grid-pol small" style={{left: "30%"}}></span>
                                                <span className="irs-grid-pol" style={{left: '50%'}}></span>
                                                <span className="irs-grid-text js-grid-text-2" style={{left: "50%", visibility: "hidden"}}>36</span>
                                                <span className="irs-grid-pol small" style={{left: "70%"}}></span>
                                                <span className="irs-grid-pol small" style={{left: "65%"}}></span>
                                                <span className="irs-grid-pol small" style={{left: "60%"}}></span>
                                                <span className="irs-grid-pol small" style={{left: "55%"}}></span>
                                                <span className="irs-grid-pol" style={{left: "75%"}}></span>
                                                <span className="irs-grid-text js-grid-text-3" style={{left: "75%", visibility: "hidden"}}>41</span>
                                                <span className="irs-grid-pol small" style={{left: "95%"}}></span>
                                                <span className="irs-grid-pol small" style={{left: "90%"}}></span>
                                                <span className="irs-grid-pol small" style={{left: "85%"}}></span>
                                                <span className="irs-grid-pol small" style={{left: "80%"}}></span>
                                                <span className="irs-grid-pol" style={{left: "100%"}}></span>
                                                <span className="irs-grid-text js-grid-text-4" style={{left: "100%"}}>45</span>
                                            </span>
                                            <span className="irs-bar"></span>
                                            <span className="irs-shadow shadow-from"></span>
                                            <span className="irs-shadow shadow-to"></span>
                                            <span className="irs-handle from">
                                                <i></i>
                                                <i></i>
                                                <i></i>
                                            </span>
                                            <span className="irs-handle to">
                                                <i></i>
                                                <i></i>
                                                <i></i>
                                            </span>
                                        </span>
                                        <input className="range js-range-slider irs-hidden-input" data-skin="round" data-type="double" data-min="27.00" data-max="45.00" data-from="27.00" data-to="45.00" data-grid="true" type="text" value="" tabindex="-1" readonly=""/>
                                    </div>
                            </div>
                        </div>
                        <div className="filter_checkbox filter_checkbox_all">
                            <div className="f_title  ">Производитель
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="list  ">
                                <label className="checkbox_container maker">
                                    <div className="radio_title">Вкусный хлебушек</div>
                                    <input data-type="ur" name="maker[]" type="checkbox" value="25243"/>
                                        <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className="btns_wrapper">
                            <button className="filter_make">Применить</button>
                            <a href="/categories/hleba/" className="filter_clear">Сбросить</a>
                        </div>
                    </div>
            </form>
            <div className="sort">
                <div className="title">Сортировка</div>
                <div className="select"><select id="sort" name="sort" form="filter_items" className="s-hidden">
                    <option value="popular">по популярности</option>
                    <option value="price_asc" selected="">по возрастанию цены</option>
                    <option value="price_desc">по убыванию цены</option>
                </select><div className="styledSelect">по возрастанию цены</div><ul className="options"><li rel="popular">по популярности</li><li rel="price_asc">по возрастанию цены</li><li rel="price_desc">по убыванию цены</li></ul></div>
            </div>
            <div className="show">
                <div className="title">Показывать</div>
                <div className="select"><select id="view" name="view" form="filter_items" className="s-hidden">
                    <option value="12" selected="">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                </select><div className="styledSelect">12</div><ul className="options"><li rel="12">12</li><li rel="24">24</li><li rel="48">48</li></ul></div>
                <div className="show_style">
                    <div className="grid  active " data-id="grid" title="Показывать в виде плиток">
                        <i className="fas fa-th-large"></i>
                    </div>
                    <span></span>
                    <div className="list " data-id="list" title="Показывать в виде списка">
                        <i className="fas fa-stream"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sort_show;