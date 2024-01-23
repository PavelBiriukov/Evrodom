import axios from 'axios';
import React, { useState } from 'react';
import { useInput } from '../../../hooks/useInput';
import FileUpload from '../../fileUpload/FileUpload';
import cl from './categoriesCreate.module.css';

const CategoriesCreate = () => {
    const [picture, setPicture] = useState<any>()
    const name = useInput('')
    const [sending, setSending] = useState(false); // Состояние для отслеживания статуса отправки
    const [operationStatus, setOperationStatus] = useState(''); // Состояние для отображения статуса операции

    const handleSubmit = () => {
        if (!picture) {
            console.error('Изображение не выбрано');
            return;
        }
        setSending(true);
        const formData = new FormData();
        formData.append('name', name.value);
        console.log(picture);
        
        for (let i = 0; i < picture.length; i++) {
            formData.append('picture', picture[i]);
        }
        
        axios.post('https://eurodom.kg/api/categories', formData)
            .then(response => {
                console.log('Данные успешно отправлены:', response.data);
                setSending(false);
                setOperationStatus('Успешно отправлено!');
            })
            .catch(error => {
                console.error('Ошибка при отправке данных:', error);
                setSending(false);
                setOperationStatus('Ошибка при отправке данных:');
            });
    };

    return (
        <div className={cl.container}>
            <div className={cl.menu}>
                <a href='/admin/createCategories' style={{textDecoration: 'underline'}} className={cl.menuItem}>Добавить категорию </a>
                <a href='/admin/updateCategories' className={cl.menuItem}>Изменить категорию</a>
                <a href='/admin/deleteCategories' className={cl.menuItem}>Удалить категорию</a>
            </div>
            <h1>СОЗДАНИЕ категории</h1>
            <input className={cl.input} {...name} type="text" name="НАЗВАНИЕ" placeholder="НАЗВАНИЕ" />
            <FileUpload  setFile={setPicture} accept="image/*"> 
                <div>Загрузить изображение</div>
            </FileUpload>
            <p>{operationStatus}</p>
            <button className={cl.button} onClick={handleSubmit}>{sending ? 'Отправка данных...' : 'Отправить форму'}</button>
        </div>
    )
};

export default CategoriesCreate;