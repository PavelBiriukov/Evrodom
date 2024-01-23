import React, { useEffect, useState } from 'react';
import useActions from '../../../hooks/useAcrions';
import { useInput } from '../../../hooks/useInput';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { ICard } from '../../../type/cards';
import FileUpload from '../../fileUpload/FileUpload';
import cl from './update.module.css';

const UpdateCard = () => {
  const URL_BACK: string = process.env.URL_BACK || '';
  const id = useInput('');
  const [card, setCard] = useState<ICard | any>();
  const [picture, setPicture] = useState<any>();
  const { updateCardById } = useActions()
  const { getCardById, fetchCategories } = useActions()
  const { categories, error } = useTypedSelector(state => state.categories);
  const [sending, setSending] = useState(false); // Состояние для отслеживания статуса отправки
  const [operationStatus, setOperationStatus] = useState(''); // Состояние для отображения статуса операции

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
    event.preventDefault();
    const { value, name } = event.target;
    setCard({ ...card, [name]: value });
  };

  const updateCard = async () => {
    try {
      setSending(true);
      if (!card || !card._id) {
        console.error('Invalid card data');
        return;
      }
      setTimeout(() => {
        const formData = new FormData();
        formData.append('name', card.name);
        formData.append('category', card.category);
        formData.append('description', card.description);
        formData.append('maker', card.maker);
        formData.append('price', card.price);
        formData.append('product_availability', card.product_availability);
        formData.append('unique_parameters', card.unique_parameters);
        formData.append('unit_of_measurement', card.unit_of_measurement);

        if (picture && picture.length > 0) {
          console.log(picture);
          for (let i = 0; i < picture.length; i++) {
            formData.append('picture', picture[i]);
          }
        } else {
          console.log(card.picture);
          for (let i = 0; i < card.picture.length; i++) {
            formData.append('picture', card.picture[i]);
          }
        }
        if (card?._id && formData) {
          console.log('Данные успешно обнавленны:', formData);
          setSending(false);
          setOperationStatus('Успешно обнавленны!');
          updateCardById(card?._id, formData)
        }
        else {
          console.error('Ошибка при обновлении данных:', error);
          setSending(false);
          setOperationStatus('Ошибка при обновлении данных');
        }
      }, 1000);
      console.log('Card updated successfully!');
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
      <h1>ОБНОВЛЕНИЕ ТОВАРА</h1>
      <input className={cl.input} type="text" {...id} placeholder='Напишите ID товара' />
      <label className={cl.label}>
        Выберите категорию товара:
        <select style={{ visibility: 'visible' }} className={cl.select} value={card?.category || ''} onChange={handleInputChange} name='category'>
          <option className={cl.option} value="">Выберите категорию товара:</option>
          {categories.map((category_item: any) =>
            <option key={category_item._id} className={cl.option} value={category_item.name}>{category_item.name}</option>
          )}
        </select>
      </label>
      <input className={cl.input}
        type="text"
        name="name"
        value={card?.name || ''} // Set the initial value to the card's name
        placeholder="НАЗВАНИЕ"
        onChange={handleInputChange}
      />
      <textarea className={cl.textarea}
        name="description"
        value={card?.description || ''} // Set the initial value to the card's description
        placeholder="ОПИСАНИЕ"
        onChange={handleInputChange}
      />
      <input className={cl.input}
        type='text'
        name="price"
        value={card?.price || ''} // Set the initial value to the card's description
        placeholder="ЦЕНА"
        onChange={handleInputChange}
      />
      <input className={cl.input}
        type='text'
        name="maker"
        value={card?.maker || ''} // Set the initial value to the card's description
        placeholder="ПРОИЗВОДИТЕЛЬ"
        onChange={handleInputChange}
      />
      <input className={cl.input}
        type='text'
        name="product_availability"
        value={card?.product_availability || ''} // Set the initial value to the card's description
        placeholder="НАЛИЧИЕ ТОВАРА"
        onChange={handleInputChange}
      />
      <textarea className={cl.textarea}
        name="unique_parameters"
        value={card?.unique_parameters || ''} // Set the initial value to the card's description
        placeholder="УНИКАЛЬНЫЕ ПАРАМЕТРЫ"
        onChange={handleInputChange}
      />
      <input className={cl.input}
        type='text'
        name="unit_of_measurement"
        value={card?.unit_of_measurement || ''} // Set the initial value to the card's description
        placeholder="ЕДЕНИЦА ИЗМЕРЕНИЯ"
        onChange={handleInputChange}
      />
      <FileUpload setFile={setPicture} accept="image/*"> {/* Используем handleImageChange для обновления изображений */}
        <div>Загрузить изображение</div>
      </FileUpload>
      <div className={cl.blockImg}>
        {card?.picture?.length > 0 && (
          card?.picture.map((cardImg: string) =>
            <img key={cardImg} className={cl.img} src={cardImg ? 'https://eurodom.kg/api/' + cardImg : 'Изображение не найдено'} alt={card?.name || 'Изображение не найдено'} />
          )
        )}
      </div>
      <p>{operationStatus}</p>
      <div >
        <button className={cl.button} onClick={updateCard}>
          {sending ? 'Обновленние данных...' : 'Обновить товар'}
        </button>
        {card?._id 
        ? 
          <button className={cl.button}> 
            <a target="_blank" href={`${URL_BACK}/items/${card?._id}`}>Передти на странницу товара</a>
          </button> 
        : <a></a>}
      </div>

    </div>
  );
};

export default UpdateCard;