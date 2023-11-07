import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useActions from '../../../hooks/useAcrions';
import { useInput } from '../../../hooks/useInput';
import FileUpload from '../../fileUpload/FileUpload';
import cl from './DeleteCategories.module.css';

const DeleteCategories = () => {
    const id = useInput('');
    const [categories, setCategories] = useState<any>();
    const [picture, setPicture] = useState(categories?.picture || undefined)
    const {getCategoriesById} = useActions()
    const fetchData = async () => {
      try {
        const categoriesData = await getCategoriesById(id.value);
        setCategories(categoriesData)
        // Теперь у вас есть доступ к данным из response.data
      } catch (error) {
        console.error('Error fetching categories data:', error);
      }
    };
    useEffect(() => {
      setTimeout(() => {
        fetchData()
      }, 500)
    }, [id.value]);

    const handleInputChange = (event:any) => {
      event.preventDefault()
      const { value, name } = event.target;
      setCategories({ ...categories, [name]: value});
    };

    const deleteCategories = async () => {
      try {
        await axios.delete(`http://localhost:5000/categories/${categories?._id}`);
        console.log('Categories delete successfully!');
      } catch (error) {
        console.error('Error updating categories:', error);
      }
    };

    return (
      <div className={cl.container}>
        <div className={cl.menu}>
              <a href='/admin/createCategories' style={{textDecoration: 'underline'}} className={cl.menuItem}>Добавить категорию </a>
              <a href='/admin/updateCategories' className={cl.menuItem}>Изменить категорию</a>
              <a href='/admin/deleteCategories' className={cl.menuItem}>Удалить категорию</a>
          </div> 
        <h1>УДАЛЕНИЕ категории</h1>
        <input className={cl.input}  type="text" {...id} placeholder='Напишите ID товара'/>
        <input className={cl.input}
          type="text"
          name="name"
          value={categories?.name} // Set the initial value to the categories name
          placeholder="НАЗВАНИЕ"
          onChange={handleInputChange}
        />
        <FileUpload setFile={setPicture} accept="image/*"> 
          <div>Загрузить изображение</div>
        </FileUpload>
        <img src={'http://localhost:5000/' + categories?.picture} alt={categories?.name || 'Изображение не найдено '} />
        <button className={cl.button} onClick={deleteCategories}>Удалить товар</button>
      </div>
    );
};

export default DeleteCategories;