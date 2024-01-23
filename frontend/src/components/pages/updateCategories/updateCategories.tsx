import React, { useEffect, useState } from 'react';
import useActions from '../../../hooks/useAcrions';
import { useInput } from '../../../hooks/useInput';
import FileUpload from '../../fileUpload/FileUpload';
import cl from './UpdateCategories.module.css';

const UpdateCategories = () => {
  const {updateCategoriesById} = useActions()
    const id = useInput('');
    const [categories, setCategories] = useState<any>();
    const [picture, setPicture] = useState<any>()
    const {getCategoriesById} = useActions()

    const fetchData = async () => {
      try {
        const CategoriesData = await getCategoriesById(id.value);
        setCategories(CategoriesData)
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

    const updateCategories = async () => {
      try {
        const formData = new FormData();
        formData.append('name', categories.name);
        for (let i = 0; i < picture.length; i++) {
          formData.append('picture', picture[i]);
        };
        updateCategoriesById(categories?._id, formData)
        console.log('Categories updated successfully!');
      } catch (error) {
        console.error('Error updating Categories:', error);
      }
    };

    return (
      <div className={cl.container}>
          <div className={cl.menu}>
              <a href='/admin/createCategories' style={{textDecoration: 'underline'}} className={cl.menuItem}>Добавить категорию </a>
              <a href='/admin/updateCategories' className={cl.menuItem}>Изменить категорию</a>
              <a href='/admin/deleteCategories' className={cl.menuItem}>Удалить категорию</a>
          </div> 
        <h1>ОБНОВЛЕНИЕ категории</h1>
        <input className={cl.input}  type="text" {...id} placeholder='Напишите ID товара'/>
        <input className={cl.input}
          type="text"
          name="name"
          value={categories?.name || ''} // Set the initial value to the categories's name
          placeholder="НАЗВАНИЕ"
          onChange={handleInputChange}
        />
        <FileUpload setFile={setPicture} accept="image/*"> 
          <div>Загрузить изображение</div>
        </FileUpload>

        <img src={'https://eurodom.kg/api/' + categories?.picture} alt={categories?.name || 'Изображение не найдено '} />

        <button className={cl.button} onClick={updateCategories}>Update categories</button>
      </div>
  );
};

export default UpdateCategories;