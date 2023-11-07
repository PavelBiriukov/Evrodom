import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useActions from '../../../hooks/useAcrions';
import { useInput } from '../../../hooks/useInput';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import FileUpload from '../../fileUpload/FileUpload';
import cl from '../updateCard/update.module.css';

const DeleteCard = () => {
  const id = useInput('');
  const [card, setCard] = useState<any>();
  const [picture, setPicture] = useState(card?.picture || undefined)
  const { getCardById, fetchCategories } = useActions()
  const { categories, error } = useTypedSelector(state => state.categories);
  const [category, setCategory] = useState('');
  const handleCategoryChange = (event: any) => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    fetchCategories()
  }, [])
  const fetchData = async () => {
    try {
      const cardData = await getCardById(id.value);
      setCard(cardData)
      // Теперь у вас есть доступ к данным из response.data
    } catch (error) {
      console.error('Error fetching card data:', error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 500)
  }, [id.value]);

  const handleInputChange = (event: any) => {
    event.preventDefault()
    const { value, name } = event.target;
    setCard({ ...card, [name]: value });
  };

  const deleteCard = async () => {
    try {
      await axios.delete(`http://localhost:5000/cards/${card?._id}`);
      console.log('Card delete successfully!');
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  return (
    <div className={cl.container}>
      <div className={cl.menu}>
        <a href='/admin/createCard' style={{ textDecoration: 'underline' }} className={cl.menuItem}>Добавить товар </a>
        <a href='/admin/updateCard' className={cl.menuItem}>Изменить товар</a>
        <a href='/admin/deleteCard' className={cl.menuItem}>Удалить товар</a>
      </div>
      <h1>УДАЛЕНИЕ ТОВАРА</h1>
      <input className={cl.input} type="text" {...id} placeholder='Напишите ID товара' />
      <label className={cl.label}>
        Выберите категорию товара:
        <select style={{visibility: 'visible'}} className={cl.select} value={card?.category || ''} onChange={handleInputChange} name='category'>
              <option className={cl.option} value="">Выберите категорию товара:</option>
              {categories.map((category_item) =>
                <option key={category_item._id} className={cl.option} value={category_item.name}>{category_item.name}</option>
              )}
          </select>
      </label>
      <input className={cl.input}
        type="text"
        name="name"
        value={card?.name} // Set the initial value to the card's name
        placeholder="НАЗВАНИЕ"
        onChange={handleInputChange}
      />
      <textarea className={cl.textarea}
        name="description"
        value={card?.description} // Set the initial value to the card's description
        placeholder="ОПИСАНИЕ"
        onChange={handleInputChange}
      />
      <input className={cl.input}
        type='text'
        name="price"
        value={card?.price} // Set the initial value to the card's description
        placeholder="ЦЕНА"
        onChange={handleInputChange}
      />
      <input className={cl.input}
        type='text'
        name="maker"
        value={card?.maker} // Set the initial value to the card's description
        placeholder="ПРОИЗВОДИТЕЛЬ"
        onChange={handleInputChange}
      />
      <input className={cl.input}
        type='text'
        name="product_availability"
        value={card?.product_availability} // Set the initial value to the card's description
        placeholder="НАЛИЧИЕ ТОВАРА"
        onChange={handleInputChange}
      />
      <textarea className={cl.textarea}
        name="unique_parameters"
        value={card?.unique_parameters} // Set the initial value to the card's description
        placeholder="УНИКАЛЬНЫЕ ПАРАМЕТРЫ"
        onChange={handleInputChange}
      />
      <input className={cl.input}
        type='text'
        name="unit_of_measurement"
        value={card?.unit_of_measurement} // Set the initial value to the card's description
        placeholder="ЕДЕНИЦА ИЗМЕРЕНИЯ"
        onChange={handleInputChange}
      />
      <FileUpload setFile={setPicture} accept="image/*">
        <div>Загрузить изображение</div>
      </FileUpload>
      <img src={'http://localhost:5000/' + card?.picture} alt={card?.name || 'Изображение не найдено '} />
      <button className={cl.button} onClick={deleteCard}>Удалить товар</button>
    </div>
  );
};

export default DeleteCard;