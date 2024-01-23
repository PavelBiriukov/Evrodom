import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useActions from '../../../hooks/useAcrions';
import { useInput } from '../../../hooks/useInput';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import cl from '../updateCard/update.module.css';

const DeleteCard = () => {
  const id = useInput('');
  const [card, setCard] = useState<any>();
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
    event.preventDefault()
    const { value, name } = event.target;
    setCard({ ...card, [name]: value });
  };

  const deleteCard = async () => {
    try {
      setSending(true);

      setTimeout(async () => {
        await axios.delete(`https://eurodom.kg/api/cards/${card?._id}`)
          .then(response => {
            console.log('Данные успешно удалены:', response.data);
            setSending(false);
            setOperationStatus('Карточка успешно удаленна!');
          })
          .catch(error => {
            console.error('Ошибка при удаленнеи данных:', error);
            setSending(false);
            setOperationStatus('Ошибка при удаленнеи данных');
          });
      }, 1000);
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
        <select style={{ visibility: 'visible' }} className={cl.select} value={card?.category || ''} name='category'>
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
      />
      <textarea className={cl.textarea}
        name="description"
        value={card?.description} // Set the initial value to the card's description
        placeholder="ОПИСАНИЕ"
      />
      <input className={cl.input}
        type='text'
        name="price"
        value={card?.price} // Set the initial value to the card's description
        placeholder="ЦЕНА"

      />
      <input className={cl.input}
        type='text'
        name="maker"
        value={card?.maker} // Set the initial value to the card's description
        placeholder="ПРОИЗВОДИТЕЛЬ"

      />
      <input className={cl.input}
        type='text'
        name="product_availability"
        value={card?.product_availability} // Set the initial value to the card's description
        placeholder="НАЛИЧИЕ ТОВАРА"

      />
      <textarea className={cl.textarea}
        name="unique_parameters"
        value={card?.unique_parameters} // Set the initial value to the card's description
        placeholder="УНИКАЛЬНЫЕ ПАРАМЕТРЫ"

      />
      <input className={cl.input}
        type='text'
        name="unit_of_measurement"
        value={card?.unit_of_measurement} // Set the initial value to the card's description
        placeholder="ЕДЕНИЦА ИЗМЕРЕНИЯ"

      />
      <div className={cl.blockImg}>
        {card?.picture?.length > 0 && (
          card?.picture.map((cardImg: string) =>
            <img key={cardImg} className={cl.img} src={cardImg ? 'https://eurodom.kg/api/' + cardImg : 'Изображение не найдено'} alt={card?.name || 'Изображение не найдено'} />
          )
        )}
      </div>
      <p>{operationStatus}</p>
      <button className={cl.button} onClick={deleteCard}>
        {sending ? 'Удаление товара...' : 'Удалить товар'}
      </button>
    </div>
  );
};

export default DeleteCard;