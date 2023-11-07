import { useState, useEffect } from 'react';
import axios from 'axios';
import cl from './createCard.module.css';
import { v4 as uuidv4 } from 'uuid';
import { useInput } from '../../../hooks/useInput';
import FileUpload from '../../fileUpload/FileUpload';
import useActions from '../../../hooks/useAcrions';
import { ICategories } from '../../../type/categories'
import { useTypedSelector } from '../../../hooks/useTypedSelector';
const CreateCard = () => {
    const handleCategoryChange = (event: any) => {
        setCategory(event.target.value);
    };
    const [picture, setPicture] = useState<any>()
    const [category, setCategory] = useState('');
    const name = useInput('')
    const price = useInput('')
    const description: any = useInput('')
    const maker = useInput('')
    const product_availability = useInput('')
    const unique_parameters: any = useInput('')
    const unit_of_measurement = useInput('')
    const {categories, error} = useTypedSelector(state => state.categories);    
    const {fetchCategories} = useActions()
    useEffect(() => {
        fetchCategories()
    },[])
    const handleSubmit = () => {
        if (picture === null) {
            console.error('Files array is empty or undefined');
            return; // Или выполните другие действия, например, показ сообщения пользователю
        }
        const formData = new FormData();
        formData.append('name', name.value)
        formData.append('price', price.value)
        formData.append('description', description.value)
        formData.append('maker', maker.value)
        formData.append('product_availability', product_availability.value)
        formData.append('category', category)
        formData.append('unique_parameters', unique_parameters.value)
        formData.append('unit_of_measurement', unit_of_measurement.value)
        for (let i = 0; i < picture.length; i++) {
            formData.append('picture', picture[i]);
          }
        axios.post('http://localhost:5000/cards', formData)
            .then(response => {
                console.log('Данные успешно отправлены:', response.data);
            })
            .catch(error => {
                console.error('Ошибка при отправке данных:', error);
            });
        console.log('Отправка данных на сервер:', formData);
        // Здесь вызывайте функцию для отправки данных на сервер
    };
    const renderFormFields = () => {
        return (
            <div>
                <input className={cl.input} {...name} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
                <textarea className={cl.textarea} {...description} name="ОПИСАНИЕ" placeholder="ОПИСАНИЕ" />
                <input className={cl.input} {...maker} type="text" name="ПРОИЗВОДИТЕЛЬ" placeholder="ПРОИЗВОДИТЕЛЬ" />
                <input className={cl.input} {...price} type="text" name="ЦЕНА" placeholder="ЦЕНА" />
                <input className={cl.input} {...product_availability} type="text" name="НАЛИЧИЕ ТОВАРА" placeholder="НАЛИЧИЕ ТОВАРА" />
                <input className={cl.input} {...unit_of_measurement} type="text" name="ЕДЕНИЦА ИЗМЕРЕНИЯ" placeholder="ЕДЕНИЦА ИЗМЕРЕНИЯ" />
                <textarea className={cl.textarea} {...unique_parameters} name="УНИКАЛЬНЫЕ ПАРАМЕТРЫ" placeholder="УНИКАЛЬНЫЕ ПАРАМЕТРЫ" />
                <FileUpload setFile={setPicture} accept="image/*">
                    <div>Загрузить изображение</div>
                </FileUpload>
            </div>
        );
    };

    return (
        <div className={cl.container}>

            <div className={cl.menu}>
                <a href='/admin/createCard' style={{ textDecoration: 'underline' }} className={cl.menuItem}>Добавить товар </a>
                <a href='/admin/updateCard' className={cl.menuItem}>Изменить товар</a>
                <a href='/admin/deleteCard' className={cl.menuItem}>Удалить товар</a>
            </div>
            <h1>СОЗДАНИЕ ТОВАРА</h1>
            <label className={cl.label}>
                Выберите категорию товара:
                {Array.isArray(categories) ? ( // Check if categories is an array
                    <select
                        style={{ visibility: 'visible' }}
                        className={cl.select}
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option className={cl.option} value="">
                            Выберите категорию товара:
                        </option>
                        {categories.map((category: any) => (
                            <option
                                key={category._id}
                                className={cl.option}
                                value={category?.name}
                            >
                                {category?.name}
                            </option>
                        ))}
                    </select>
                ) : (
                    <div>Loading categories...</div>
                )}
            </label>
            {renderFormFields()}
            <button className={cl.button} onClick={handleSubmit}>Отправить форму</button>
        </div>
    );
};

export default CreateCard;
