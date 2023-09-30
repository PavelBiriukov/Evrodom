import { useState } from 'react';
import cl from './admin.module.css';
import { v4 as uuidv4 } from 'uuid';

const CategoryForm = () => {
    const [category, setCategory] = useState('');
    const [formData, setFormData] = useState({
        id: uuidv4(),
        category_item: ''
    });
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        setFormData({   
            ...formData, 
            [name]: value, 
            category_item: category,
            id: uuidv4()
        });
    };
    const handleSubmit = () => {
        // Отправляем данные на сервер для выбранной категории
        console.log('Отправка данных на сервер:', formData);
        // Здесь вызывайте функцию для отправки данных на сервер
    };
    const renderFormFields = () => {
        switch (category) {
            case 'ПЛАСТИК ПОТОЛОЧНЫ ПВХ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                    </div>
                );
            case 'ПЛАСТИКОВЫЕ СТЕНОВЫЕ ПАНЕЛИ ПВХ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                    </div>
                );
            case 'ЛИСТОВАЯ СТЕНОВАЯ ПАНЕЛЬ ПВХ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦВЕТ" placeholder="ЦВЕТ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                    </div>
                );
            case 'КОМПЛЕКТУЮЩИЕ ДЛЯ СТЕНОВЫХ ЛИСТОВЫХ ПАНЕЛИЙ ПВХ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                    </div>
                );
            case 'ЛИСТОВЫЕ СТЕНОВЫЕ ПАНЕЛИ МДФ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                    </div>
                );
            case 'ПАНЕЛИ СТЕНОВЫЕ МДФ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                    </div>
                );
            case 'ПЛИТКА ПОТОЛОЧНАЯ ПЕНОПАРИСТИРОЛ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                    </div>
                );
            case 'ПЛИНТУСА ПОТОЛОЧНЫЕ ПЕНОПОЛИСТИРОЛ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                    </div>
                );
            case 'САЙДЕНГ ВИНИЛОВЫЙ ФОСАДНЫЙ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦВЕТ" placeholder="ЦВЕТ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                    </div>
                );
            case 'КОМПЛЕКТУЮЩИЕ ДЛЯ САЙДЕНГА':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦВЕТ" placeholder="ЦВЕТ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                    </div>
                );
            case 'ДВЕРИ ВХОДНЫЕ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Внутренняя отделка" placeholder="Внутренняя отделка" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Верхний замок сувальдный" placeholder="Верхний замок сувальдный: " />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Нижний замок цилиндровый" placeholder="Нижний замок цилиндровый:" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Ручка" placeholder="Ручка" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Глазок" placeholder="Глазок" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Заполнение двери" placeholder="Заполнение двери" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Толщина металла короба" placeholder="Толщина металла короба " />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Глубина короба" placeholder="Глубина короба  " />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Толщина металла полотна" placeholder="Толщина металла полотна  " />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Толщина полотна" placeholder="Толщина полотна " />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Уплотнители" placeholder="Уплотнители " />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Ночная задвижка" placeholder="Ночная задвижка  " />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Петли" placeholder="Петли" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ " />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ВЫСОТА" placeholder="ВЫСОТА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="Внешняя отделка" placeholder="Внешняя отделка" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                    </div>
                );
            case 'РУЧКИ ДЛЯ МЕЖКОМНАТНЫХ ДВЕРЕЙ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'НАВЕСЫ-ШАРНИРЫ ДЛЯ МЕЖ.ДВЕРЕЙ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА МЕТАЛЛА" placeholder="ТОЛЩИНА МЕТАЛЛА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'МОЛДИНГ СТЕНОВОЙ МЕТАЛЛ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'МОЛДИНГ ПОЛИСТИРОЛ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'УГОЛКИ ОТКОСНЫЕ ПВХ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'УГОЛЫ УНЕВЕРСАЛЬНЫЕ МДФ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'САМОРЕЗЫ ОСТРЫЕ (СЕМЕЧКИ)':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'САМОРЕЗЫ СВЕРЛО (СЕМЕЧКИ)':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'КЛЯЙМЕРВ (СКОБЫ) МЕТАЛИЧИСКИЕ ШИРОКИЕ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'ФИШЕР ГВОЗДЬ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'АНКЕР ДВЕРНОЙ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            case 'ЗАВЁРТКА ДЛЯ ДВЕРИ':
                return (
                    <div>
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                        <textarea className={cl.textarea} onChange={handleInputChange} type="text" name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ДЛИНА" placeholder="ДЛИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ШИРИНА" placeholder="ШИРИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ТОЛЩИНА" placeholder="ТОЛЩИНА" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="АРТИКУЛ" placeholder="АРТИКУЛ" />
                        <input className={cl.input} onChange={handleInputChange} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                    </div>
                );
            // Добавьте обработку остальных категорий аналогичным образом
            default:
                return null;
        }
    };

    return (
        <div className={cl.container}>
            <label className={cl.label}>
                Выберите категорию товара:
                <select style={{visibility: 'visible'}} className={cl.select} value={category} onChange={handleCategoryChange}>
                    <option className={cl.option} value="">Выберите категорию товара:</option>
                    <option className={cl.option} value="ПЛАСТИК ПОТОЛОЧНЫ ПВХ">ПЛАСТИК ПОТОЛОЧНЫ ПВХ</option>
                    <option className={cl.option} value="ПЛАСТИКОВЫЕ СТЕНОВЫЕ ПАНЕЛИ ПВХ">ПЛАСТИКОВЫЕ СТЕНОВЫЕ ПАНЕЛИ ПВХ</option>
                    <option className={cl.option} value="ЛИСТОВАЯ СТЕНОВАЯ ПАНЕЛЬ ПВХ">ЛИСТОВАЯ СТЕНОВАЯ ПАНЕЛЬ ПВХ</option>
                    <option className={cl.option} value="КОМПЛЕКТУЮЩИЕ ДЛЯ СТЕНОВЫХ ЛИСТОВЫХ ПАНЕЛИЙ ПВХ">КОМПЛЕКТУЮЩИЕ ДЛЯ СТЕНОВЫХ ЛИСТОВЫХ ПАНЕЛИЙ ПВХ</option>
                    <option className={cl.option} value="ЛИСТОВЫЕ СТЕНОВЫЕ ПАНЕЛИ МДФ">ЛИСТОВЫЕ СТЕНОВЫЕ ПАНЕЛИ МДФ</option>
                    <option className={cl.option} value="ПАНЕЛИ СТЕНОВЫЕ МДФ">ПАНЕЛИ СТЕНОВЫЕ МДФ</option>
                    <option className={cl.option} value="ПЛИТКА ПОТОЛОЧНАЯ ПЕНОПАРИСТИРОЛ">ПЛИТКА ПОТОЛОЧНАЯ ПЕНОПАРИСТИРОЛ</option>
                    <option className={cl.option} value="ПЛИНТУСА ПОТОЛОЧНЫЕ ПЕНОПОЛИСТИРОЛ">ПЛИНТУСА ПОТОЛОЧНЫЕ ПЕНОПОЛИСТИРОЛ</option>
                    <option className={cl.option} value="САЙДЕНГ ВИНИЛОВЫЙ ФОСАДНЫЙ">САЙДЕНГ ВИНИЛОВЫЙ ФОСАДНЫЙ</option>
                    <option className={cl.option} value="КОМПЛЕКТУЮЩИЕ ДЛЯ САЙДЕНГА">КОМПЛЕКТУЮЩИЕ ДЛЯ САЙДЕНГА</option>
                    <option className={cl.option} value="ДВЕРИ ВХОДНЫЕ">ДВЕРИ ВХОДНЫЕ</option>
                    <option className={cl.option} value="РУЧКИ ДЛЯ МЕЖКОМНАТНЫХ ДВЕРЕЙ">РУЧКИ ДЛЯ МЕЖКОМНАТНЫХ ДВЕРЕЙ</option>
                    <option className={cl.option} value="НАВЕСЫ-ШАРНИРЫ ДЛЯ МЕЖ.ДВЕРЕЙ">НАВЕСЫ-ШАРНИРЫ ДЛЯ МЕЖ.ДВЕРЕЙ</option>
                    <option className={cl.option} value="МОЛДИНГ СТЕНОВОЙ МЕТАЛЛ">МОЛДИНГ СТЕНОВОЙ МЕТАЛЛ</option>
                    <option className={cl.option} value="МОЛДИНГ ПОЛИСТИРОЛ">МОЛДИНГ ПОЛИСТИРОЛ</option>
                    <option className={cl.option} value="УГОЛКИ ОТКОСНЫЕ ПВХ">УГОЛКИ ОТКОСНЫЕ ПВХ</option>
                    <option className={cl.option} value="УГОЛЫ УНЕВЕРСАЛЬНЫЕ МДФ">УГОЛЫ УНЕВЕРСАЛЬНЫЕ МДФ</option>
                    <option className={cl.option} value="САМОРЕЗЫ ОСТРЫЕ (СЕМЕЧКИ)">САМОРЕЗЫ ОСТРЫЕ (СЕМЕЧКИ)</option>
                    <option className={cl.option} value="САМОРЕЗЫ СВЕРЛО (СЕМЕЧКИ)">САМОРЕЗЫ СВЕРЛО (СЕМЕЧКИ)</option>
                    <option className={cl.option} value="КЛЯЙМЕРВ (СКОБЫ) МЕТАЛИЧИСКИЕ ШИРОКИЕ">КЛЯЙМЕРВ (СКОБЫ) МЕТАЛИЧИСКИЕ ШИРОКИЕ</option>
                    <option className={cl.option} value="ФИШЕР ГВОЗДЬ">ФИШЕР ГВОЗДЬ</option>
                    <option className={cl.option} value="АНКЕР ДВЕРНОЙ">АНКЕР ДВЕРНОЙ</option>
                    <option className={cl.option} value="ЗАВЁРТКА ДЛЯ ДВЕРИ">ЗАВЁРТКА ДЛЯ ДВЕРИ</option>
                    {/* ... добавьте остальные категории в соответствии с вашими требованиями */}
                </select>
            </label>

            {renderFormFields()}
            <button className={cl.button} onClick={handleSubmit}>Отправить форму</button>
        </div>
    );
};

export default CategoryForm;
